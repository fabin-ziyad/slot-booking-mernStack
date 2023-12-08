
const { getUser } = require("../../Actions/userActions");

export const getLoggedUser = async () => {
  const token = localStorage.getItem("token");
  console.log("entered", token);

  if (!token) {
    return null;
  }

  try {

    const user = await getUser();
    return user;
  } catch (error) {
    console.error("Error retrieving user:", error);
    return null;
  }
};
