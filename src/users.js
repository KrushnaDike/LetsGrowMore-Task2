import React from "react";
import "./users.css";
export default function Cards(props) {
  return (
    <>
      <p className="content">LGM Users</p>
      {props.userData.map((user, index) => {
        return (
          <div className="col-lg-4 col-md-6 mt-4 col-sm-8 col-xs-10 mx-auto">
            <br />
            <div className="userCard">
              <img src={user.avatar} alt="" className="imgUser" />
              <div className="userCard-body">
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
                <br />
                <button className="btn-grad">Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}