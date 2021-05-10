import React from 'react';
import axios from 'axios';
import qs from 'qs';

class App extends React.Component {

  constructor(props) {
    super(props);
    const queries = qs.parse(window.location.search);
    const courseId = Number(queries['?courseId']);
    this.state = {courseId};
  }


  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.state.courseId);

    // Api call to courseContent.
    axios.get(`127.0.0.1:9800/content/item/?courseId=${this.state.courseId}`)
      .then((response) => {
        console.log(response.data);
      });

  }

  render() {

    return (
      <div>
        <span>Hello Second World</span>
        <span>{this.state.courseId}</span>
        {this.state.courseContent && 
          <CourseContent />
        }
      </div>
    );

  }

}

export default App;