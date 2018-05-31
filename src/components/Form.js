import React from 'react';
import { connect } from 'react-redux';
import { startAddItem } from '../reduxFolder/actions';
import '../styles/form.css';

class Form extends React.Component {
  state = {
    title: '',
    type: 'music'
  }

  setType = (e) => {
    this.setState({ type: e.target.id })
  }
  setTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.startAddItem(this.state);
    this.setState({ title: '' });
  }


  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.onSubmit} className="form">
          <input type='text' placeholder='Title' onChange={this.setTitle} value={this.state.title} className="form-input"/>
          <div className='type-list'>
            <p id='music' onClick={this.setType} className={this.state.type === 'music' ? 'active-type' : ''}>Music</p>
            <p id='movie' onClick={this.setType} className={this.state.type === 'movie' ? 'active-type' : ''}>Movie</p>
            <p id='show' onClick={this.setType} className={this.state.type === 'show' ? 'active-type' : ''}>TV Show</p>
            <p id='podcast' onClick={this.setType} className={this.state.type === 'podcast' ? 'active-type' : ''}>Podcast</p>
            <p id='book' onClick={this.setType} className={this.state.type === 'book' ? 'active-type' : ''}>Book</p>
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startAddItem: (item) => dispatch(startAddItem(item))
})

export default connect(undefined, mapDispatchToProps)(Form);
