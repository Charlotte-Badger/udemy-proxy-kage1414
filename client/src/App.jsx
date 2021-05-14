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
    const script = document.createElement('script');

    script.src = `http://127.0.0.1:9800/content/item?courseId=${this.state.courseId}`;
    script.async = true;

    document.body.appendChild(script);
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