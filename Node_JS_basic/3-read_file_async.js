const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);
    const fields = {};

    for (const student of students) {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    }

    let result = `Number of students: ${students.length}`;
    for (const [field, names] of Object.entries(fields)) {
      result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
