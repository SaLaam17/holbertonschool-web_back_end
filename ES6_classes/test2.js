export default class HolbertonCourse {
    constructor(name, length, students) {
      // Make sure to verify the type of attributes during object creation
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
      if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      /*
      Each attribute must be stored in an “underscore”
      attribute version (ex: name is stored in _name)
      */
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    // Implement a getter and setter for each attribute.
    get name() {
      return this._name;
    }
  
    set name(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = name;
    }
  
    // --------------------------------------------------- //
    get length() {
      return this._length;
    }
  
    set length(length) {
      if (typeof length !== 'number') {
        throw new TypeError('length must be a number');
      }
      this._length = length;
    }
  
    // --------------------------------------------------- //
    get students() {
      return this._students;
    }
  
    set students(students) {
      if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of Strings');
      }
      this._students = students;
    }
  }
  