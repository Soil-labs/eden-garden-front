import { gql } from "@apollo/client";
export const FIND_TEAMS = gql`
  query {
    findTeams(fields: {}) {
      _id
      name
      description
    }
  }
`;
