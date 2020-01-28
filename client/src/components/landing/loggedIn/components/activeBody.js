import React from "react";
import { FETCH_ROUTES } from "../../../graphql/queries";
import { Query } from "react-apollo";

class ActiveBodyCard extends React.Component {
  render() {
    return (
      <div id="landingHeroActiveBodyCard">
        <div id="routesNearYouHeader">
          NEARBY ROUTES
        </div>
        <div id="routesNearYouBody">
          <Query query={FETCH_ROUTES}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error}</div>;

              return data.routes.map(({ _id, title, start, end }) => (
                <div className="routeRecommendationCard" key={_id}>
                  {title}
                </div>
              ));
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default ActiveBodyCard;