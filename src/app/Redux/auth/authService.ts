// import { gql } from "@apollo/client";
import axios from "axios";

// const LOGIN_USER = gql`
//   mutation Login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       user {
//         id
//         name
//         email
//       }
//       token
//     }
//   }
// `;


const loginUser = async(userInfo: {}) => {
  const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/login", userInfo);
  console.log(response.data);
  return response.data;
}

const authServices = {
  // LOGIN_USER,
  loginUser

};

export default authServices;
