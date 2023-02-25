import React from "react";
import "./topcontributer.css";

const contributors = [
  {
    name: "John Doe",
    designation: "Animal Care Department",
    picture: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
  },
  {
    name: "Jane Doe",
    designation: "Backend Developer",
    picture: "https://i.pinimg.com/564x/54/f5/cf/54f5cf98a15648853db8dfe0f7fb591d.jpg"
  },
  {
    name: "Bob Smith",
    designation: "UI Designer",
    picture: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
];

const TopContributors = () => {
  return (
    <div className="top-contributors-container">
      <h2>Top Contributors</h2>
      <div className="contributors-list">
        {contributors.map((contributor, index) => (
          <div key={index} className="contributor mx-4">
            <img src={contributor.picture} alt={contributor.name} />
            <div className="contributor-info">
              <h3>{contributor.name}</h3>
              <p>{contributor.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopContributors;
