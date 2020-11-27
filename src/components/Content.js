import React, { Component } from 'react';
import copy from 'copy-to-clipboard';

// Styles
import '../styles/Content.css';

class Content extends Component {
  handleClick = () => {
    copy(`http://alibahaari.github.io/Badge-Provider/#/badges/${ this.props.imageName }.png`);
  }

  render() {
    return (
      <div className="content">
        <img src={'./badges/' + this.props.imageName + '.png'} alt={ this.props.imageText } />
        <p>{ this.props.imageText }</p>
        <button onClick={ this.handleClick }>Copy</button>
      </div>
    );
  }
}

export default Content;