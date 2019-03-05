const defaultState = {
  inputValue: null,
  dolist: [],
  donelist: []
}
//reducer 可以接受state，但是绝对不能修改state
export default (state=defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'change_input_value': 
      newState.inputValue = action.value;
      return newState;
    case 'add_todo_item':
      newState.dolist.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case 'delete_todo_item':
      newState.donelist.push(newState.dolist[action.index])
      newState.dolist.splice(action.index, 1);
      return newState
    default:
      return state;
  }
}