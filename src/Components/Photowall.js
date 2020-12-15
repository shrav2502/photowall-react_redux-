import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photowall(props) {
  return (
    <div>
      <Link className="add-Icon" to="/AddPhoto"></Link>
      <div className="photo-grid">
        {props.posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo key={index} {...props} post={post} index={index} />
          ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
