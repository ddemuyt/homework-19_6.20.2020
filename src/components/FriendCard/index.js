import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";


function FriendCard(props) {
  return (
    <Row>
    <Col size="md-4">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      </Col>
      <Col size="md-4">
            <strong>Name:</strong> {props.name}
            </Col>
            <Col size="md-4">
            <strong>Occupation:</strong> {props.occupation}
            </Col>
            <Col size="md-4">
            <strong>Location:</strong> {props.location}
            </Col>
      
      <span onClick={() => props.sortEmployee(props.id)} className="sort">
        ^
      </span>
    </Row>
  );
}

export default FriendCard;
