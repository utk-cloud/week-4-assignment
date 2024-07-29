import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import NewTweet from './NewTweet';
import EditTweet from './EditTweet';

function TweetList({ tweets, setTweets }) {
  const [editIndex, setEditIndex] = useState(null);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  const updateTweet = (index, updatedTweet) => {
    const newTweets = [...tweets];
    newTweets[index] = updatedTweet;
    setTweets(newTweets);
    setEditIndex(null);
  };

  const deleteTweet = (index) => {
    setTweets(tweets.filter((_, i) => i !== index));
  };

  return (
    <div>
      <NewTweet addTweet={addTweet} />
      <Row className="mt-4">
        {tweets.map((tweet, index) => (
          <Col md={4} key={index} className="mb-4">
            {editIndex === index ? (
              <EditTweet
                tweet={tweet}
                updateTweet={(updatedTweet) => updateTweet(index, updatedTweet)}
                cancelEdit={() => setEditIndex(null)}
              />
            ) : (
              <Card>
                <Card.Body>
                  <Card.Text>{tweet.content}</Card.Text>
                  <Button variant="warning" onClick={() => setEditIndex(index)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteTweet(index)}
                    className="ml-2"
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TweetList;
