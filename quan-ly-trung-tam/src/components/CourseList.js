import React, { useState, useEffect } from 'react';
import { getCourses } from '../services/api';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(response => setCourses(response.data));
  }, []);

  return (
    <div>
      <h3>Danh sách khóa học</h3>
      <ul className="list-group">
        {courses.map(course => (
          <li className="list-group-item" key={course.id}>
            {course.name} - {course.startDate} đến {course.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
