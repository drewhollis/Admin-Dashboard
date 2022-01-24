import React from "react";
import "./smallWidget.css";
import { Visibility } from "@material-ui/icons";

const SmallWidget = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Employees</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImage"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jane Doe</span>
            <span className="widgetSmUserTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImage"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Smith</span>
            <span className="widgetSmUserTitle">Sales Rep</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImage"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jess Rogers</span>
            <span className="widgetSmUserTitle">Customer Support</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SmallWidget;
