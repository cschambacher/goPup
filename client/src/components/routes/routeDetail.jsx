import React from 'react';
import { FETCH_ROUTE } from '../graphql/queries';
import { withRouter } from "react-router-dom";
import { Query } from 'react-apollo';
import Thumbnail from "./routeThumb";
import LoggedInLandingNavbar from "../landing/loggedIn/landingNavbar";
import LoggedInLandingFooter from "../landing/loggedIn/landingFooter";


const RouteDetail = props => {
    return (
        <Query query={FETCH_ROUTE} variables={{ id: props.match.params.id }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error</p>;
                console.log(data.route);
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
                                <h2>author</h2>
                                <div className="green">
                                    {data.route.poop} püps
                                </div>
                                <div className="doggoRoutePoopIcon green">
                                    <i className="fas fa-poop"></i>
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