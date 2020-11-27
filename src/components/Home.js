import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Content from '../components/Content';

// Styles
import '../styles/Home.css';

class Home extends Component {
  state = {
    initData: this.props.data,
    selectedData: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    if (e.target.value !== '') {
      this.setState({
        selectedData: []
      });
      
      let inputText = e.target.value.toUpperCase();
      let newData = [];

      this.props.data.forEach(obj => {
        if (obj.title.toUpperCase().includes(inputText)) {
          newData.push(obj);
        }
      });
              
      this.setState({
        selectedData: newData
      });

    } else {
      this.setState({
        selectedData: []
      });
    }
  }

  render() {
    return (
      <div className="home">
        <form onSubmit={ this.handleSubmit }>
          <label>Search Your Keyword :</label>
          <br />
          <input type="text" placeholder="Programming Language, Framework & ..." onChange={ this.handleChange } />
        </form>

        <div className="grid-container">
          {
            this.state.selectedData.length > 0 ? (
              this.state.selectedData.map(thisData => {
                return (
                  <div key={ thisData.title }>
                    <Content imageName={ thisData.title } imageText={ thisData.text } />
                  </div>
                );
              })
            ) : 
            (
            this.state.initData.map(thisData => {
              return (
                <div key={ thisData.title }>
                  <Content imageName={ thisData.title } imageText={ thisData.text } />
                </div>
              );
            })
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Home);