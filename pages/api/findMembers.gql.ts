import { gql } from "@apollo/client";
export const FIND_MEMBERS = gql`
  query {
    findMembers(fields: {}) {
      _id
      discordName
      discordAvatar
      skills {
        level
        skillInfo {
          _id
        }
      }
    }
  }
`;
