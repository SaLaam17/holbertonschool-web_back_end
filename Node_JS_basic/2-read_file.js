const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter(line => line.trim() !== '');

  const students = lines.slice(1);

  const fields = {};

  students.forEach((line) => {
    const parts = line.split(',');
    if (parts.length === 4) {
      const firstname = parts[0].trim();
      const field = parts[3].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
  });

  const totalStudents = students.length;

  console.log(`Number of students: ${totalStudents}`);

  for (const [field, firstnames] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
  }
}

module.exports = countStudents;
