import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
query Query {
  allFilms {
    films {
      title
      director
      releaseDate
      characterConnection {
        characters {
          id
          name
          gender
          homeworld {
            name
          }
        }
      }
    }
   }
  }
`;

export const  GET_CHARACTER_DETAIL = gql`
query GET_CHARACTER_DETAIL($personId: ID) {
  person(id: $personId) {
    name
    gender
    birthYear
    homeworld {
      name
      population
    }
    
  }
}
`;
