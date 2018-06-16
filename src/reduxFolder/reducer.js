export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];

    case 'REMOVE_ITEM':
      return state.filter(id => id !== action.id);

    case 'SET_ITEMS':
      return action.expenses

    case 'LOGIN':
      return {
        uuid: action.uuid
      }

    default:
      return state;
  }
}
