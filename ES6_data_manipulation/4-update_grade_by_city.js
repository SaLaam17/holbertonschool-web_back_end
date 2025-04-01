export default function updateStudentGradeByCity(students, location, newGrades) {
  return students.filter((student) => student.location === location);
}
