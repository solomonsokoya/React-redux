const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


export const Increment = res => ({
  type: INCREMENT
})

export const Decrement = res => ({
  type: DECREMENT
})

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state, {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ];
//     case 'TOGGLE_TODO':
//       return state.map(todo => {
//         if (todo.id !== action.id) {
//           return todo;
//         }
//         return {
//           ...todo,
//           completed: !todo.completed
//         }
//       })
//
//     default:
//       return state;
//   }
// };

export default counter;
