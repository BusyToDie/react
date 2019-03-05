const defaultState = {
  inputValue: '',
  dolist: [],
  donelist: []
}

export default (state=defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type){
    case 'input_change':
      newState.inputValue = action.value; 
      return newState;
    case 'btn_click':
      newState.dolist.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case 'delete':
      newState.donelist.push(newState.dolist[action.index]);
      newState.dolist.splice(action.index,1);
      return newState;
    default:
      return state;
  }
}