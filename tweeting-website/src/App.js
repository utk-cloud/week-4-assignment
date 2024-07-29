import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from './components/Login';
import TweetList from './components/TweetList';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand>Tweeting Website</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setAuthenticated(false)}>Logout</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        {authenticated ? (
          <TweetList tweets={tweets} setTweets={setTweets} />
        ) : (
          <Login setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </div>
  );
}

export default App;
