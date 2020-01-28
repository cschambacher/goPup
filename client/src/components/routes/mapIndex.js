import React from "react";
import { Link } from "react-router-dom";
import { FETCH_ROUTES } from "../graphql/queries";
import { Query } from "react-apollo";

class MapIndex extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    
    return (
      <div>
        <div>
          <h2>My Routes</h2>
          <Link to="/routes/new">Create New Route</Link>
        </div>
        <ul>
          <Query query={FETCH_ROUTES}>
            {({ loading, error, data }) => {
              if (loading) return <h1>Loading...</h1>;
              if (error) return <h1>{error}</h1>;

              return data.routes.map(({ _id, title, start, end }) => (
              <li key={_id}>{title}start:{start}end:{end}</li>
              ));
            }}
          </Query>
        </ul>
      </div>
    );
  }
}

export default MapIndex;