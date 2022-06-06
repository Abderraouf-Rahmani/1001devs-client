import React from "react";
import "./settings.css";
export default function Settings() {
  return (
    <div className="settings">
      <div className="page-title">
        <h1>Settings</h1>
      </div>
      <form className="setting-form" action="#">
        <div className="user-settings">
          <h2>User</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="name"
            placeholder="John Doe"
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="email"
            placeholder="John.Doe@exmple.com"
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="username"
            placeholder="JohnDoe"
          />
          <div className="profile-pic-settings">
            <label htmlFor="pic">Profile image</label>
            <input type="file" name="pic" id="pic" />
          </div>
        </div>
        <div className="skills-settings">
          <label htmlFor="email">Skills & Languages</label>
          <p>
            What tools and languages are you most experienced with? Are you
            specialized or more of a generalist?
          </p>
          <textarea name="skills" id="skills" className="skills" />
        </div>
        <button type="submit" className="setting-btn">
          Save profile informations
        </button>
      </form>
    </div>
  );
}
