import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from '../src/pagination.js';
import '../assets/index.less';

class Example extends Component {

  state = {
    offset: 0
  }

  _updatePage(offset) {
    console.log(`收到 ${offset}`);
    this.setState({
      offset: offset
    });
  }

  render() {
    let { offset } = this.state;
    return (
      <div>
        <Pagination offset={ offset } update={ this._updatePage.bind(this) }/>

        <hr />

        <Pagination offset={ offset } update={ this._updatePage.bind(this) }
          totalPage={16}
          myStyle="compressed"
        />

        <hr />

        <Pagination offset={this.state.offset} update={this._updatePage.bind(this)}
          totalPage={16}
        />

        <hr />

        <Pagination offset={this.state.offset} update={this._updatePage.bind(this)}
          totalPage={16}
          myStyle="fullsize"
        />
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('component-example-simple-style'));
