import React from "react";
import PropTypes from "prop-types";
import { userShape } from "../UserCard";

const SelectedUsers = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  const mapUsers = ({ id, firstName }) => <li key={id}>{firstName}</li>;
  return <ul>{selectedUsers.map(mapUsers)}</ul>;
};

SelectedUsers.propTypes = {
  users: PropTypes.arrayOf(userShape).isRequired
};

export default SelectedUsers;
