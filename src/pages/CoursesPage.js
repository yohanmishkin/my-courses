import { CoursesProvider } from '../providers/CoursesProvider';

export default function CoursesPage() {
  return (
    <CoursesProvider>
      {({ isLoading, courses }) => {
        if (isLoading) {
          return <p>Loading...</p>;
        }

        return (
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                <img
                  src={course.instructor_image_url}
                  alt={`Headshot of ${course.instructor_name}`}
                  data-test={`instructor-headshot-${course.id}`}
                />
                <p data-test={`course-instructor-${course.id}`}>{course.instructor_name}</p>
                <p data-test={`course-title-${course.id}`}>{course.title}</p>
              </li>
            ))}
          </ul>
        );
      }}
    </CoursesProvider>
  );
}
