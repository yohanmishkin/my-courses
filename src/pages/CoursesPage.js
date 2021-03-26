import { CoursesProvider } from '../providers/CoursesProvider';
import CourseCard from '../ui/CourseCard';

export default function CoursesPage() {
  return (
    <CoursesProvider>
      {({ isLoadingCourses, courses, toggleFavourite, isToggling }) => {
        if (isLoadingCourses) {
          return <p>Loading...</p>;
        }

        return (
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                <CourseCard course={course} toggleFavourite={toggleFavourite} isToggling={isToggling} />
              </li>
            ))}
          </ul>
        );
      }}
    </CoursesProvider>
  );
}
