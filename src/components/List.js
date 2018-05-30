import React from 'react';
import Item from './Item';
import database from '../firebase';
import '../styles/list.css';

class List extends React.Component {
  state = {
    items: []
  }

componentWillMount() {
  database.ref('items/').on('value', (snapshot => {
    let items = [];
    snapshot.forEach(childSnapshot => {
      items.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    this.setState({ items })
  }))
  // this.scrollToBottom();
}
componentDidUpdate() {
  this.scrollToBottom();
}
scrollToBottom() {
  var list = document.getElementById("list");
  list.scrollTop = list.scrollHeight;
}


  render() {
    return (
      <div className='list-container' id='list'>
        {this.state.items.map(item => <Item key={item.id} {...item}/>)}
      </div>
    )
  }
}

export default List;
