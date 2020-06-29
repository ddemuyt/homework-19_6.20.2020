import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Search from "./components/Search";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    employees
  };

  sortEmployee = id => {
    console.log(this.state.employees);
  };

  sortEmployeeName = id => {
    const employees = [...this.state.employees];
    employees.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ employees });
  };

  render() {
    return (
      <Wrapper>
        <Title/>
        <Container>
          <Row>
            <Col size="md-12">
              <Search/>
            </Col>
            </Row>
            <Row>
            <Col size="md-12">
              <Filter
              sortEmployeeName={this.sortEmployeeName}
              sortEmployee={this.sortEmployee}/>
            </Col>
          </Row>
          <Row>
        {this.state.employees.map(employee => (
          <Col size="md-12">
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
            email={employee.email}
            phone={employee.phone}
          />
          </Col>
        ))}
        </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
