import { useCallback, useEffect, useState } from 'react';

const apiHost = 'https://web-interview-api-ammea9.herokuapp.com';
const email = 'email@example.com';

export const CoursesProvider = (props) => {
  const [updatesAvailable, setUpdatesAvailable] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState(true);
  const [isToggling, setIsToggling] = useState(false);

  const toggleFavourite = useCallback(
    async (course) => {
      if (isToggling) return;

      setIsToggling(true);

      const body = JSON.stringify({ email, course_id: course.id });
      const response = await fetch(`${apiHost}/jsonapi/v1/favorite`, {
        method: course.favorite ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (response.ok) {
        setUpdatesAvailable(true);
      }

      setIsToggling(false);
    },
    [isToggling]
  );

  useEffect(() => {
    let isCancelled = false;

    const fetchCourses = async () => {
      try {
        const response = await fetch(`${apiHost}/jsonapi/v1/courses?email=${email}&page[limit]=5&page[offset]=2`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json();

        if (!isCancelled) {
          setCourses(json);
          setIsLoadingCourses(false);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchCourses();

    return () => {
      isCancelled = true;
    };
  }, [updatesAvailable]);

  return props.children({ isLoadingCourses, courses, toggleFavourite, isToggling });
};
