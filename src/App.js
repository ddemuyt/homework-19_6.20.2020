import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Search from "./components/Search";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  sortEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
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
        {this.state.friends.map(friend => (
          <Col size="md-12">
          <FriendCard
            sortEmployee={this.sortEmployee}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
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
