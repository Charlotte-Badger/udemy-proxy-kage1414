import React from 'react';
import axios from 'axios';
import qs from 'qs';

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
    console.log(this.state.courseId);
    // Api call to courseContent.
    // axios.get('/courseContent')
    //   .then((response) => {
    //     console.log(response.data);
    //   });

    axios.get('/courseContent')
      .then((response) => {
        console.log(response.data);
        this.setState({content: response.data});
      });
  }

  render() {

    return (
      <div>
        <span>Hello World</span>
        {this.state.courseContent &&
          <CourseContent courseId={this.state.courseId} />
        }
        {this.state.content &&
        <div>
          <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
          <CourseContent courseId={this.state.courseId}/>
        </div>
        }
      </div>
    );

  }

}

export default App;