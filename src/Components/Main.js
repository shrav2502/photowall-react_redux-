import React from "react";
import AddPhoto from "./AddPhoto";
import Photowall from "./Photowall";
import { Link, Route } from "react-router-dom";
import "../style.css";
import Single from "./Single";

class Main extends React.Component {
  render() {
    return (
      <div>
        <p className="title">
          <Link to="/">Photowall</Link>
        </p>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <div>
              <AddPhoto {...this.props} onHistory={history} />
            </div>
          )}
        />
        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
