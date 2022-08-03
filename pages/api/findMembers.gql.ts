import { gql } from "@apollo/client";
export const FIND_MEMBERS = gql`
  query {
    findMembers(fields: {}) {
      _id
      discordName
      skills {
        level
        skillInfo {
          _id
        }
      }
    }
  }
`;
