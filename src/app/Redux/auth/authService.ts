import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

const authServices = {
  LOGIN_USER,
};

export default authServices;
