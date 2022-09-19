import React from "react";

interface NavbarButtonProps {
  text: string;
}

function NavbarButton(props: NavbarButtonProps) {
  const { text } = props;

  return <div>{text}</div>;
}

export default NavbarButton;
