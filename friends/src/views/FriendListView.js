import React from "react";
import { getFriends } from "../actions";
import { connect } from "react-redux";

class FriendListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("mounted");
    this.props.getFriends();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loading && (
          <div>
            <h2>Loading friends...</h2>
          </div>
        )}

        {this.props.error && (
          <div>
            <h2>{this.props.error}</h2>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.loading,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { getFriends }
)(FriendListView);
