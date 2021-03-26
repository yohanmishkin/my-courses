import { render } from '@testing-library/react';
import CourseCard from './CourseCard';

test('renders unfavourited course', () => {
  const course = {
    id: 1234,
    favourite: false,
  };

  const { container } = render(<CourseCard course={course} />);

  expect(container.querySelector(`[data-test="course-${course.id}"] span`)).not.toHaveClass('favourite');
});

test('renders favourited course', () => {
  const course = {
    id: 1234,
    favourite: true,
  };

  const { container } = render(<CourseCard course={course} />);

  expect(container.querySelector(`[data-test="course-${course.id}"] span`)).toHaveClass('favourite');
});
