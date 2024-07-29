import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function NewTweet({ addTweet }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') return;
    addTweet({ content });
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTweet">
        <Form.Label>New Tweet</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Tweet
      </Button>
    </Form>
  );
}

export default NewTweet;
