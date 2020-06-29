import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";


function EmployeeCard(props) {
  return (
    <Row>
    <Col size="md-4">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      </Col>
      <Col size="md-4">
            <strong></strong> {props.name}
            </Col>
            <Col size="md-4">
            <strong></strong> {props.occupation}
            </Col>
            <Col size="md-4">
            <strong></strong> {props.email}
            </Col>
            <Col size="md-4">
            <strong></strong> {props.phone}
            </Col>
    </Row>
  );
}

export default EmployeeCard;
