import React from "react";

interface NavbarButton {
  text: string;
}

function NavbarButton(props: NavbarButton) {
  const { text } = props;

  return <div>{text}</div>;
}

export default NavbarButton;
