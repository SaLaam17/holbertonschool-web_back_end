export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('name and code must be strings');
    }

    this._name = name;
    this._code = code;
  }

  /*
  The default string description of the class should return the airport code.
  The toString() method is redifined.
  */
  toString() {
    return `[object ${this._code}]`;
  }
}
