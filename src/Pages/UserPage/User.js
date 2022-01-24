import React from "react";
import "./User.css";
import {
  PermIdentity,
  CakeOutlined,
  MailOutline,
  Home,
  PhoneAndroidOutlined,
  Publish,
} from "@material-ui/icons";

// form currently displays horizontally when df is applied to userUpdateForm class

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              alt=""
              src="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Jon Snow</span>
              <span className="userShowUserTitle">Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">kingofthenorth</span>
            </div>
            <div className="userShowInfo">
              <CakeOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">283 AC</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">Raven</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">
                kingofthenorth94@gmail.com
              </span>
            </div>
            <div className="userShowInfo">
              <Home className="userShowIcon" />
              <span className="userShowInfoTitle">Winterfell</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="kingofthenorth"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Jon Snow"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="kingofthenorth94@gmail.com"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Raven"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Winterfell"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  alt=""
                  src="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
