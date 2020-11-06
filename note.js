const addBookDate = (name = '123', telephone = '456') => {
  return {
    type: "ADD_BOOKING_DATE",
    name, 
    telephone
  };
}
//or

const addBookDate = (name = '123', telephone = '456') => ({
  type: "ADD_BOOKING_DATE",
  name, 
  telephone
})
