import React from "react";
import { Alert } from "react-bootstrap";
// import "./blog.css";

const Blog = () => {
  return (
    <div className="container py-4 mx-auto card my-4">
      <Alert variant="warning">Difference between javascript and nodejs</Alert>
      <p className="p-3">
        <big>Ans: </big> <strong>Javascript</strong> is the updated version of
        EcmaScript. It is a scripting language that runs of the client side on
        the browser. It is a high level programming language. <br />
        <strong>NodeJS</strong> is a cross-platform opensource runtime that
        environment. NodeJS allows javascript to run on the server outside of
        the browser. Nodejs is built depends on google's v8 engine.
        <br />
        <strong>NodeJS</strong> can run on the server outside of the browser. On
        the other hand, <strong>Javascript</strong> can run only in the browser.{" "}
        <br />
        <strong> Javascript</strong> can be used to add HTML and play with the
        DOM.
        <strong>Nodejs</strong> can't add HTML tags.
      </p>
      <Alert variant="info">
        When should you use nodejs and when should you use mongodb
      </Alert>
      <p className="p-3">
        <big>Ans: </big>
        <strong>NodeJS</strong> is a Javascript runtime that allows us to run
        javascript on the server to manipulate client side and add dynamic
        functionality to the static side. We use NodeJS to make our server side
        for our static website that allows us to connect our static website to
        the database. <br /> <br />
        <strong>MongoDB</strong> is a No-Sql database management platform. We
        can store our data on the mongoDB server. We use it to store our website
        database on the cloud so that anyone from anywhere can use our website
        and access the website data.
      </p>
      <Alert variant="success">
        Differences between sql and nosql databases.
      </Alert>
      <div className="p-3">
        <big>Ans: </big> <strong>SQL</strong> database is primarily called as
        Relational Database(RDBMS). <strong>NoSQL</strong> database are
        primarily called as non-relational database or also called as{" "}
        <em>Distributed Database</em> . <br />
        <b>Key difference between SQL & NoSQL</b>
       
        <ul>
          <li>
            <b>SQL</b> is a relation database system whereas, <b>NoSQL</b> is a
            non-relational database system.
          </li>
          <li>
            <b>SQL</b> database are table based on the other hand, <b>NoSQL </b>
            database contains key-value pairs, document based or also can be
            graph based.
          </li>
          <li>
            <b>SQL</b> database are not suitable for hierarchical data storage.
            On the other hand, <b>NoSQL</b> is best suited for hierarchical data
            storage.
          </li>
        </ul>
      </div>
      <Alert variant="primary">
        What is the purpose of jwt and how does it work?
      </Alert>
      <p className="p-3">
        <big>Ans: </big> <strong>JWT</strong> stands for json web token. JWT is
        used for user security assurance.
      </p>
    </div>
  );
};

export default Blog;
