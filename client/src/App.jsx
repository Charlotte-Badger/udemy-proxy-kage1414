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
    const content = document.createElement('script');
    script.src = `http://127.0.0.1:9800/content/item?courseId=${this.state.courseId}`;
    script.async = true;
    document.body.appendChild(content);

    const reviews = document.createElement('script');
    script.src = `http://127.0.0.1:2712?courseId=${this.state.courseId}`;
    script.async = true;
    document.body.appendChild(reviews);
  }

  render() {

    return (
      <div>
        <div id="content"></div>
      </div>
    );

  }

}

export default App;