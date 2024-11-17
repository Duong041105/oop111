import React, { useState, useEffect } from 'react';
import { getStudents } from '../services/api';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(response => setStudents(response.data));
  }, []);

  return (
    <div>
      <h3>Danh sách học viên</h3>
      <ul className="list-group">
        {students.map(student => (
          <li className="list-group-item" key={student.id}>
            {student.name} - {student.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
