import React, { Fragment } from "react";

export default function UsersList(props) {
  return props.users.map(user => {
    return (
      <Fragment key={user.id}>
        <h1>Name: {user.name}</h1>
        <p>Website: {user.website}</p>
      </Fragment>
    );
  });
}
