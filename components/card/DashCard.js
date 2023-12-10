
import React from 'react';
import "./card.css";

const DashCard = ({ title, value }) => {
  return (
    <div className="card mt-5">
      <p className="card-title">{title}</p>
      <p className="small-desc">{value}</p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
  );
};


export default DashCard;
