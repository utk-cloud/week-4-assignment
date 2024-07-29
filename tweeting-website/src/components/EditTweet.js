import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EditTweet({ tweet, updateTweet, cancelEdit }) {
  const [content, setContent] = useState(tweet.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') return;
    updateTweet({ content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEditTweet">
        <Form.Label>Edit Tweet</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Save
      </Button>
      <Button variant="secondary" onClick={cancelEdit} className="ml-2">
        Cancel
      </Button>
    </Form>
  );
}

export default EditTweet;
