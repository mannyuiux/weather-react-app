import React from "react";
import "./seasonDisplay.css";

const configSeason = {
  summer: {
    text: "Let's hit beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr! its chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = configSeason[season];
  return (
    <div className={`season-cover ${season}`}>
      <i className={`icon-left ${iconName} icon massive`}></i>
      <h1>{text}</h1>Í<i className={`icon-right  ${iconName} icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
