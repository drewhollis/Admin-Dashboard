import React from "react";
import "./SideBar.css";
import {
  LineStyle,
  Equalizer,
  Group,
  GroupOutlined,
  Add,
  PersonAdd,
  ShoppingCart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="users" className="link">
              <li className="sidebarListItem">
                <GroupOutlined className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="products" className="link">
              <li className="sidebarListItem">
                <ShoppingCart className="sidebarIcon" />
                Products
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Short Cuts</h3>
          <ul className="sidebarList">
            <Link to="newUser" className="link">
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                Add New User
              </li>
            </Link>
            <Link to="newProduct" className="link">
              <li className="sidebarListItem">
                <Add className="sidebarIcon" />
                Add New Product
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
