export const add = (data) => {
  return {
    type: "add_item",
    payload: {
      id: new Date().getTime().toString(),
      data: data
    }
  };
};
export const dlt = (id) => {
  return {
    type: "delete_item",
    id: id
  };
};
export const remove = () => {
  return {
    type: "remove_all"
  };
};
