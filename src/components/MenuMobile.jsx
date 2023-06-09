// import React from 'react';
import { slide as Menu } from "react-burger-menu";
import MenuLinks from "./MenuLinks";

const MenuMobile = ({ styles }) => {
  return (
    <Menu right width={220} className="hb-menu">
      <MenuLinks styles={styles} />
    </Menu>
  );
};

export default MenuMobile;
