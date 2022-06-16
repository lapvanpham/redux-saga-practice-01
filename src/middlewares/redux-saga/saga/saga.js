import axios from "axios";

function* getAllUsers(action) {
  try {
    const res  = yield axios.get("http://localhost:3004/user");
  } catch (error) {
    console.log('error - getUsers',error);

  }
}