import React from 'react';
import qs from 'qs';
import {Pride, CourseContent, Sidebar, Container, Reviews, InnerContainer, Overview, TopContainer, Featured} from './StyledComponents.js';
import SelectCourse from './SelectCourse.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    const queries = qs.parse(window.location.search);
    const courseId = Number(queries['?courseId']);
    this.handleSubmit = this.handleSubmit.bind(this);

    if (courseId) {
      this.state = {
        courseId,
        sidebarPosition: {
          position: 'absolute',
          top: '100px'
        }
      };
    } else {
      this.state = {};
    }

    this.setSidebarPosition = this.setSidebarPosition.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setSidebarPosition);
    window.addEventListener('resize', this.handleWindowResize);

    const body = document.body;

    let overview = document.createElement('script');
    overview.async = true;
    overview.src = 'https://charlotte-badger-overview.s3.amazonaws.com/overview.js';
    body.appendChild(overview);

    let review = document.createElement('script');
    review.async = true;
    review.src = 'https://charlotte-badger-reviews.s3-us-west-1.amazonaws.com/reviewBundle.js';
    body.appendChild(review);

    let sidebar = document.createElement('script');
    sidebar.async = true;
    sidebar.src = 'https://charlotte-badger-sidebar.s3-us-west-1.amazonaws.com/sidebar.js';
    body.appendChild(sidebar);

    let content = document.createElement('script');
    content.async = true;
    content.src = 'https://charlotte-badger-course-content-bundles.s3.eu-west-2.amazonaws.com/course-content.js';
    body.appendChild(content);

    let author = document.createElement('script');
    author.async = true;
    author.src = 'https://charlotte-badger-author.s3.amazonaws.com/author.js';
    body.appendChild(author);

  }

  handleWindowResize() {

  }

  setSidebarPosition() {
    const overview = document.getElementById('overview');

    if (window.scrollY < overview.clientHeight) {
      this.setState({sidebarPosition: {
        position: 'absolute',
        top: '100px',
        zIndex: '5',
        animationDuration: '0ms'
      }});
    } else {
      this.setState({sidebarPosition: {
        position: 'fixed',
        top: '25px',
        zIndex: '1001',
        animationDuration: '1000ms'
      }});
    }

  }

  handleSubmit(e) {
    e.preventDefault();

    const id = Number(e.target.courseId.value);

    if (id > 100 || id < 1) {
      this.setState({
        outOfRange: true,
        outOfRangeValue: id
      });
    } else {
      this.setState({
        outOfRange: false,
        outOfRangeValue: undefined
      });

      const queries = qs.parse(window.location.search);
      const courseId = Number(queries['?courseId']);
      this.setState({ courseId });

      location.href = `/?courseId=${e.target.courseId.value}`;

    }
  }

  render() {
    return (
      <div>
        <Pride />
        <div style={this.state.courseId ? {display: 'block'} : {display: 'none'}}>
          <Container>
            <Sidebar id="sidebar" style={this.state.sidebarPosition} ></Sidebar>
            <TopContainer>
              <Overview id="overview"></Overview>
            </TopContainer>
            <InnerContainer>
              <div style={{display: 'inline-block'}}>
                <CourseContent id="content"></CourseContent>
                <Featured id='featured' />
                <div id='author' />
                <Reviews id="reviews"></Reviews>
              </div>
            </InnerContainer>
          </Container>
        </div>
        {!this.state.courseId &&
            <SelectCourse handleSubmit={this.handleSubmit} outOfRange={this.state.outOfRange} />
        }
      </div>
        
    );
  }

}

export default App;