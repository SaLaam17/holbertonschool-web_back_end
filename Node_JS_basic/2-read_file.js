const fs = require('fs');

function countStudents(path) {
  let data
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter(line => line.trim() !== '');

  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);
}

module.exports = countStudents;
