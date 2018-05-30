import React from 'react';
import { removeItem } from '../firebase';
import '../styles/item.css'

const Item = ({ title, type, id}) => {
  return (
    <div className='item-row'>
      <div className='item-info'>
        <h2 className='item-title'>{title}</h2>
        <p className='item-type'>{type}</p>
      </div>
      <div className='item-done'>
        <div onClick={() => removeItem(id)}>Done</div>
      </div>
    </div>
  )
}

export default Item;
