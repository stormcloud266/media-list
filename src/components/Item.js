import React from 'react';
import { connect } from 'react-redux';
import { startRemoveItem } from '../reduxFolder/actions';
import '../styles/item.css'

class Item extends React.Component {

  onRemove = () => {
    console.log(this.props.id);
    this.props.startRemoveItem(this.props.id)
  }

  render() {
    return (
      <div className='item-row'>
        <div className='item-info'>
          <h2 className='item-title'>{this.props.title}</h2>
          <p className='item-type'>{this.props.type}</p>
        </div>
        <div className='item-done'>
          <div onClick={this.onRemove}>Done</div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveItem: (id) => dispatch(startRemoveItem(id))
})

export default connect(undefined, mapDispatchToProps)(Item);
