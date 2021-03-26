import React from 'react';

export default function CourseCard({ course, isToggling, toggleFavourite }) {
  return (
    <button data-test={`course-${course.id}`} onClick={() => toggleFavourite(course)}>
      <img
        src={course.instructor_image_url}
        alt={`Headshot of ${course.instructor_name}`}
        data-test={`instructor-headshot-${course.id}`}
      />
      <p data-test={`course-instructor-${course.id}`}>{course.instructor_name}</p>
      <p data-test={`course-title-${course.id}`}>{course.title}</p>
      {isToggling ? (
        <span className="toggling">&#9862;</span>
      ) : course.favourite ? (
        <span className="favourite">&#9733;</span>
      ) : (
        <span className="not-yet-favourited">&#9734;</span>
      )}
    </button>
  );
}
