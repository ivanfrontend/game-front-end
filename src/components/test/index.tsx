import { useQuery, useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const TestComponent = () => {
  const TEAMS_QUERY = gql`
    query getAllRoom {
      getAllRoom {
        _id
        quantityActiveCells
        quantityCells
      }
    }
  `;

  const { loading, data } = useQuery(TEAMS_QUERY);

  console.log(" test ", data);
  return <div> hi test </div>;
};
