import React from "react";
import Avatar from 'react-avatar';
import { useState } from "react";

function User() {
  return (
<Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="Wim Mostmans" />
  );
}
export default User;