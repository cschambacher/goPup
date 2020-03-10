import React from "react";
import { FETCH_ROUTES } from "../graphql/queries";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

class IndexSearch extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      search: '',
    }

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e){
    this.setState({ search: e.target.value.substr(0,20) })
  }


  render(){

    return (
      <div>
        <div className="search-bar-cont">
          <input
            type="text"
            placeholder="Search Routes"
            value={this.state.search}
            onChange={this.updateSearch}
          /><i className="fas fa-search"></i>
        </div>
        <div className="search-results-cont">
          <ul>
            <Query query={FETCH_ROUTES}>
              {({ loading, error, data }) => {
                if (loading) return <h1>Loading...</h1>;
                if (error) return <h1>{error}</h1>;
                let filtered;
                if(this.state.search === ''){
                  filtered = [];
                } else {
                  filtered = data.routes.filter(
                    (search) => {
                      return search.title 
                        .toLowerCase()
                        .indexOf(this.state.search.toLowerCase()) !== -1
                    })
                }

                return filtered.map(({ _id, title }) => (
                  <li key={_id}>
                    <Link to={`/routes/${_id}`}>{title}</Link>
                  </li>
                ))
              }}
            </Query>
          </ul>
        </div>
      </div>
    )
  }
}

export default IndexSearch;