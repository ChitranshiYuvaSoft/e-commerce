import { gql } from "@apollo/client";

const ALL_USERS = gql`
query ExampleQuery($page: String!, $size: String!) {
  users(page: $page, size: $size) {
    totalRecords
    data {
      id
      name
      email
    }
  }
}
`;


const dataServices  = {
    ALL_USERS,
}

export default dataServices;