import React, { useContext, useState } from 'react';
import StudentsContext from '../../context/Students/StudentsContext';
import Student from '../Student/Student';
import './StudentList.scss';

export default function StudentList() {
  const { students } = useContext(StudentsContext);
  const [filter, setFilter] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [tags, setTags] = useState([]);

  const renderStudents = () => {
    if (!students) return;

    const filteredStudents = students.filter((student) => {
      let studentsToInclude = [];

      tags.forEach((v) => {
        if (v[student.firstName] && v[student.firstName].includes(filterTag))
          studentsToInclude.push(student.firstName);
      });

      return filterTag !== ''
        ? studentsToInclude.includes(student.firstName)
        : student.firstName.toLowerCase().includes(filter.toLowerCase());
    });

    return filteredStudents.map((student, index) => {
      return (
        <React.Fragment key={index}>
          <Student student={student} tags={tags} setTags={setTags} />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="StudentList">
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filteringInput"
        id="name-input"
        placeholder="Search by name"
      />
      <input
        value={filterTag}
        onChange={(e) => setFilterTag(e.target.value)}
        className="filteringInput"
        id="tag-input"
        placeholder="Search by tag"
      />
      {renderStudents()}
    </div>
  );
}
