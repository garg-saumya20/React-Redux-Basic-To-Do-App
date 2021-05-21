const initialState = {
  list: []
};
const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_item":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      };
    case "delete_item":
      const newlist = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newlist
      };
    case "remove_all":
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
};
export default ToDoReducer;
