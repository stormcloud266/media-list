import database from '../firebase';

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
})

export const startAddItem = (itemData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      type = ''
    } = itemData;
    const item = { title, type }
    database.ref('items/').push(item).then(ref => {
      dispatch(addItem({
        id: ref.key,
        ...item
      }))
    })
  }
}

export const itemArr = (items) => {
  return (dispatch) => {
    database.ref('items/')
       .on('value', (snapshot => {
         let items = [];
         snapshot.forEach(childSnapshot => {
           items.push({
             id: childSnapshot.key,
             ...childSnapshot.val()
           });
         });
         console.log(items)
       }))
  }
}
