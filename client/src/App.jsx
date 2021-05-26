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
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="courseId">Enter courseId between 1-100</label>
            <br/>
            <input type="text" id="courseId"></input>
            <br/>
            <button type="submit">Enter</button>
          </form>
          {this.state.outOfRange &&
            <div style={{ color: 'red' }}>
              <span>Please choose a courseId between 1-100</span>
              <br/>
              <span>Received value: <span style={{ color: 'black' }}>{this.state.outOfRangeValue}</span></span>
            </div>
          }
        </div>
      );
    }
  }

}

export default App;