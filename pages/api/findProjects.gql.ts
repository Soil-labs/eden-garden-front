import { gql } from "@apollo/client";
export const FIND_PROJECTS = gql`
  query {
    findProjects(fields: {}) {
      _id
      title
      description
    }
  }
`;
