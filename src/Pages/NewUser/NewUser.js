import React from "react";
import "./NewUser.css";

//for adding employees

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="enter user name" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="enter full name" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="enter email" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="enter password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="password" placeholder="enter phone number" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="password" placeholder="enter address" />
        </div>
        <div className="newUserItem">
          <label>Preferred Pronouns</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">He/Him/His</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="male">She/Her/Hers</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="male">Other</label>
          </div>
        </div>
        <button className="newUserButton">Create User</button>
      </form>
    </div>
  );
};

export default NewUser;
