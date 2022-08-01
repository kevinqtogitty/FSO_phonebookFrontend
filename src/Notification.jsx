import React from "react";

const NotificationStyle = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const Notification = ({ actionMessage }) => {
  if (actionMessage === null) {
    return null;
  }

  return (
    <div className="actionMessage" style={NotificationStyle}>
      {actionMessage}
    </div>
  );
};

export default Notification;
