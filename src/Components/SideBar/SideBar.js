import React from "react";
import "./SideBar.css";
import { LineStyle, Equalizer, TrendingUp } from "@material-ui/icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Messages
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
