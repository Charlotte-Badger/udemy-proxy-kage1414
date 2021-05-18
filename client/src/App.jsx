import React from 'react';
import axios from 'axios';
import qs from 'qs';
import {Service, CourseContent, Sidebar, Container, Reviews, StickySidebar} from './StyledComponents.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    const queries = qs.parse(window.location.search);
    const courseId = Number(queries['?courseId']);
    this.state = {
      courseId
    };
  }

  componentDidMount() {
    const content = document.createElement('script');
    content.src = 'http://127.0.0.1:9800/bundle';
    content.async = true;
    document.body.appendChild(content);

    const sidebar = document.createElement('script');
    sidebar.src = 'http://127.0.0.1:3004/index.js';
    sidebar.async = true;
    document.body.appendChild(sidebar);

    const reviews = document.createElement('script');
    reviews.src = 'http://127.0.0.1:2712/reviewBundle.js';
    reviews.async = true;
    document.body.appendChild(reviews);

    const overview = document.createElement('script');
    overview.src = 'http://127.0.0.1:3100/overview.js';
    overview.async = true;
    document.body.appendChild(overview);
  }

  render() {

    return (
      <Container>
        <Service id="app"></Service>
        <CourseContent id="content"></CourseContent>
        {/* <Sidebar> */}
        <Sidebar id="sidebar"></Sidebar>
        {/* </Sidebar> */}
        <Reviews id="reviews"></Reviews>

      </Container>
    );

  }

}

export default App;