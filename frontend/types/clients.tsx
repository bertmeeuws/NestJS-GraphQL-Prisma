import { gql } from "urql";

export const GET_CLIENT_BY_ID_AS_COACH = gql`
  query Client($clientId: Int) {
    client(id: $clientId) {
      city
      id
      postal
      number
      address
      phone
      dob
      name
      surname
      user {
        email
        profile_image
      }
    }
  }
`;
