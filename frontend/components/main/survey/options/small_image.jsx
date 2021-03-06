import React from 'react';
import * as rb from 'react-bootstrap';

export default ({ images, captions, questionNumber, saveResponse }) => {
  let options =
    images.map((image, idx) => (
      <rb.Col xs={6} sm={3} className="option-container" key={idx}>
        <div className="option small-opt" onClick={() => saveResponse(questionNumber, idx)}>
          {image}
        </div>
      </rb.Col>
  ));

  return(
    <rb.Row className="survey-answer">
      <rb.Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
        <rb.ListGroup className="all-options">
          {options}
        </rb.ListGroup>
      </rb.Col>
    </rb.Row>
  );
};
