export default class Tag {
  constructor({ tid, name }) {
    this.tid = tid;
    this.name = name;
  }

  #rename = (newName) => {
    this.name = newName;
  };
}
