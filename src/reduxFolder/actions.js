import database from '../firebase';

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});

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
      }));
    });
  };
};

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  id
});

export const startRemoveItem = (id) => {
  return (dispatch) => {
    return database.ref(`items/${id}`).remove().then(() => {
      dispatch(removeItem(id));
    });
  };
};


export const setItems = (items) => ({
  type: 'SET_ITEMS',
  items
});

export const startSetItems = () => {
  return (dispatch) => {
    return database.ref('items').once('value').then(snapshot => {
      const items = [];
      snapshot.forEach(childSnapshot => {
        items.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setItems(items));
    });
  };
};

export const login = (uuid) => ({
  type: 'LOGIN',
  uuid
});
