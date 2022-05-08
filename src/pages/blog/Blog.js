import React from "react";
import { Alert } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container py-4 mx-auto">
      <Alert variant="warning">Difference between javascript and nodejs</Alert>
      <p className="p-3">
        <big>Ans: </big> Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laboriosam in minima ipsum harum quidem! Aperiam vero excepturi
        quisquam officiis eum magnam culpa quia soluta voluptatem! Voluptatum
        iste quis hic! Corrupti.
      </p>
      <Alert variant="info">
        When should you use nodejs and when should you use mongodb
      </Alert>
      <p className="p-3">
        <big>Ans: </big> Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laboriosam in minima ipsum harum quidem! Aperiam vero excepturi
        quisquam officiis eum magnam culpa quia soluta voluptatem! Voluptatum
        iste quis hic! Corrupti.
      </p>
      <Alert variant="success">
        Differences between sql and nosql databases.
      </Alert>
      <p className="p-3">
        <big>Ans: </big> Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laboriosam in minima ipsum harum quidem! Aperiam vero excepturi
        quisquam officiis eum magnam culpa quia soluta voluptatem! Voluptatum
        iste quis hic! Corrupti.
      </p>
      <Alert variant="primary">
        What is the purpose of jwt and how does it work
      </Alert>
      <p className="p-3">
        <big>Ans: </big> Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laboriosam in minima ipsum harum quidem! Aperiam vero excepturi
        quisquam officiis eum magnam culpa quia soluta voluptatem! Voluptatum
        iste quis hic! Corrupti.
      </p>
    </div>
  );
};

export default Blog;
