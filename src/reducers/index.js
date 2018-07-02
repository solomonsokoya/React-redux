const counter = (state = 0, action) =>{
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
    return state;
  }
}

const todos = (state = [], action) =>{
  switch(action.type){
    case 'ADD_TODO':
    return [...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }

  ];

  default:
  return state;
}
};



export default counter;
