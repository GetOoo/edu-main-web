import React from 'react';
import { Link } from "react-router-dom";

const DUMMY_COURSES = [
  {
    id: 'c1',
    title: 'Courses 1'
  },
  {
    id: 'c2',
    title: 'Courses 2'
  }
]

const CoursesPage = () => {
  return (
    <>
      <h1>CoursesPage</h1>
      <ul>
        {DUMMY_COURSES.map(course => <li key={course.id}>
          <Link to={course.id}>{course.title}</Link>
        </li>)}
      </ul>
    </>
  )
}

export default CoursesPage;