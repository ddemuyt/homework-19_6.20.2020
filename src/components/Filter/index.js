import React from "react";
import "./style.css";

function Filter(props) {
  return <div>

Name <span onClick={() => props.sortEmployeeName(props.id)} className="sort">
^ </span>

Occupation <span onClick={() => props.sortEmployee(props.id)} className="sort">
^ </span>

Email <span onClick={() => props.sortEmployee(props.id)} className="sort">
^ </span>

Phone <span onClick={() => props.sortEmployee(props.id)} className="sort">
^ </span>

  </div>;
}

export default Filter;

