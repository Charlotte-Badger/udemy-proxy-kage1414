import React from 'react';
import qs from 'qs';
import {Service, CourseContent, Sidebar, Container, Reviews} from './StyledComponents.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    const queries = qs.parse(window.location.search);
    const courseId = Number(queries['?courseId']);
    this.handleSubmit = this.handleSubmit.bind(this);

    if (courseId) {
      this.state = {
        courseId
      };
    } else {
      this.state = {};
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const queries = qs.parse(window.location.search);
    const courseId = Number(queries['?courseId']);
    this.setState({ courseId });

    location.href = `/?courseId=${e.target.courseId.value}`;
  }

  render() {

    if (this.state.courseId) {
      return (
        <div>
          <div>
            <div id="overview"></div>
          </div>
          <Container>
            <CourseContent id="content"></CourseContent>
            <Sidebar id="sidebar"></Sidebar>
            <Reviews id="reviews"></Reviews>
          </Container>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="courseId">Enter courseId</label>
          <input type="text" id="courseId"></input>
          <button type="submit">Enter</button>
        </form>
      );
    }


  }

}

export default App;