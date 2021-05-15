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
<<<<<<< HEAD
    const content = document.createElement('script');
    script.src = `http://127.0.0.1:9800/content/item?courseId=${this.state.courseId}`;
    script.async = true;
    document.body.appendChild(content);

    const reviews = document.createElement('script');
    script.src = `http://127.0.0.1:2712?courseId=${this.state.courseId}`;
    script.async = true;
    document.body.appendChild(reviews);
=======
    console.log('componentDidMount');
    console.log(this.state.courseId);

    // Api call to courseContent.
    axios.get(`127.0.0.1:9800/content/item/?courseId=${this.state.courseId}`)
      .then((response) => {
        console.log(response.data);
      });

>>>>>>> 3ce61fd26f33c1bbc735e23177e9cb2a82188fa0
  }

  render() {

    return (
      <div>
<<<<<<< HEAD
        <div id="content"></div>
=======
        <span>Hello Second World</span>
        <span>{this.state.courseId}</span>
        {this.state.courseContent && 
          <CourseContent />
        }
>>>>>>> 3ce61fd26f33c1bbc735e23177e9cb2a82188fa0
      </div>
    );

  }

}

export default App;