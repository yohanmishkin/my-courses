import { useEffect, useState } from 'react';

export const CoursesProvider = (props) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const fetchCourses = async () => {
      try {
        let response = await fetch(
          'https://web-interview-api-ammea9.herokuapp.com/jsonapi/v1/courses?email=email@example.com&page[limit]=5&page[offset]=2',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        let json = await response.json();

        if (!isCancelled) {
          setCourses(json);
          setIsLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchCourses();

    return () => {
      isCancelled = true;
    };
  }, []);

  return props.children({ isLoading, courses });
};
