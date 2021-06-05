import React from 'react';
import qs from 'qs';
import {CourseContent, Sidebar, Container, Reviews, InnerContainer, Overview, SidebarAbs} from './StyledComponents.js';
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
  }

  setSidebarPosition() {

    if (window.scrollY < 530) {
      this.setState({sidebarPosition: {
        position: 'absolute',
        top: '100px'
      }});
    } else {
      this.setState({sidebarPosition: {
        position: 'fixed',
        top: '25px'
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
        <div style={this.state.courseId ? {display: 'block'} : {display: 'none'}}>
          <Overview id="overview"></Overview>
          <Container>
            <InnerContainer>
              <div style={{display: 'inline-block'}}>
                <CourseContent id="content"></CourseContent>
                <Reviews id="reviews"></Reviews>
              </div>
              <Sidebar id="sidebar" style={this.state.sidebarPosition} ></Sidebar>
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