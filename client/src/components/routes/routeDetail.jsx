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
                        <ul>
                            <li>{data.route.name}</li>
                            <li>
                                <p>{data.route.description}</p>
                            </li>
                            <li>Helllooooooooooo</li>
                        </ul>
                    </div>
                );
            }}
        </Query>
    );
};

export default withRouter(RouteDetail);