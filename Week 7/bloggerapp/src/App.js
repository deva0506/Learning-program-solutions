import React, { useState } from "react";
import { books } from "./books";
import "./App.css";

const BookDetails = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );
};

const BlogDetails = () => {
  return (
    <div>
      <h3>Blog 1: Understanding React</h3>
      <h4>Trending</h4>
      <h3>Blog 2: Modern JavaScript with ES6+</h3>
      <h4>Top 1</h4>
      <h3>Blog 3: Functional vs Class Components</h3>
      <h4>Blogs Top List</h4>
    </div>
  );
};

const CourseDetails = () => {
  return (
    <ul>
      <h3>Advanced Angular</h3>
      <h5>4/5/2025</h5>
      <h3>MongoDB Basics</h3>
      <h5>6/8/2025</h5>
    </ul>
  );
};

function App() {
  const [showBlog, setShowBlog] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  const toggleBlog = () => setShowBlog(!showBlog);
  const toggleCourses = () => setShowCourses(!showCourses);

  const content = showBlog ? <BlogDetails /> : <p>Blog content hidden</p>;
  const coursedet = showCourses ? (
    <CourseDetails />
  ) : (
    <p>Course content hidden</p>
  );
  const bookdet =
    books.length > 0 ? (
      <BookDetails books={books} />
    ) : (
      <p>No books available</p>
    );

  return (
    <div className="container">
      <div className="column">
        <h2>Course Details</h2>
        {coursedet}
      </div>

      <div className="column">
        <h2>Book Details</h2>
        {bookdet}
      </div>

      <div className="column">
        <h2>Blog Details</h2>
        {content}
      </div>
    </div>
  );
}
export default App;
