import React from "react";

const students = [
  {
    id: 1,
    name: "dongsu",
  },
  {
    id: 2,
    name: "dangsu",
  },
  {
    id: 3,
    name: "honggu",
  },
  {
    id: 4,
    name: "sangsu",
  },
  {
    id: 5,
    name: "sanggu",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;