import React from 'react';

class SelectCourse extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="courseId">Enter courseId between 1-100</label>
          <br/>
          <input type="text" id="courseId"></input>
          <br/>
          <button type="submit">Enter</button>
        </form>
        {this.props.outOfRange &&
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

export default SelectCourse;