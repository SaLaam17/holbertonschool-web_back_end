export default function getStudentIdsSum(students) {
  const ListStudentsIds = students.map((students) => students.id);
  return ListStudentsIds.reduce((acc, num) => acc + num, 0);
}
