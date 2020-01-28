import React from 'react';
import { FETCH_ROUTE } from '../graphql/queries';
import { withRouter } from "react-router-dom";
import { Query } from 'react-apollo';


const RouteDetail = props => {
    return (
        <Query query={FETCH_ROUTE} variables={{ id: props.match.params.id }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error</p>;

                return (
                    <div className="detail">
                        <h1>{data.route.title}</h1>
                        <div className="detail-left">

                        </div>
                        <div className="detail-right">
                            <h2>author</h2>
                            <div className="stats"></div>
                            <p>{data.route.description}</p>
                        </div>                
                    </div>
                );
            }}
        </Query>
    );
};

export default withRouter(RouteDetail);