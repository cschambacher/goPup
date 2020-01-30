import React from 'react';
import { FETCH_ROUTE } from '../graphql/queries';
import { UPDATE_ROUTE_POOP } from '../graphql/mutations'
import { withRouter } from "react-router-dom";
import { Query, Mutation } from 'react-apollo';
import Thumbnail from "./routeThumb";
import LoggedInLandingNavbar from "../landing/loggedIn/landingNavbar";
import LoggedInLandingFooter from "../landing/loggedIn/landingFooter";


const RouteDetail = props => {
    return (
        <Query query={FETCH_ROUTE} variables={{ id: props.match.params.id }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error</p>;
                return (
                    <div className="route-detail">
                        <LoggedInLandingNavbar/>
                        <p></p>
                        <h1>{data.route.title}</h1>
                        <div className="route-detail-container">
                            <div className="route-detail-left">
                                <div className="map-route-detail" key={data.route._id}>
                                    <Thumbnail idx={`${data.route._id}`} start={data.route.start} end={data.route.end} />
                                </div>
                            </div>
                            <div className="route-detail-right">
                                <h3>
                                    Route created by {data.route.user.username}
                                </h3>
                                <div className="stats">
                                    püps: {data.route.poop}
                                    <Mutation mutation={UPDATE_ROUTE_POOP}>
                                        {(updateRoutePoop, mutationData) => (
                                          <div 
                                            className="poopPlusPlus"
                                            onClick={(e) => {
                                              e.preventDefault()
                                              updateRoutePoop({
                                                variables: {
                                                    id: data.route._id, 
                                                    poop: data.route.poop + 1
                                                }
                                              })
                                            }}
                                          >
                                              Add püp!
                                          </div>
                                        )}
                                    </Mutation>
                                </div>
                                
                                <p>{data.route.description}</p>
                            </div> 
                        </div>
                        <LoggedInLandingFooter/>               
                    </div>
                );
            }}
        </Query>
    );
};

export default withRouter(RouteDetail);