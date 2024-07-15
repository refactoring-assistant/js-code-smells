// AI-generated code smell for Incomplete-Library-Class
class ArrayLib {

    constructor(arr) {
        this.arr = arr;
    }

    getLength() {
        return this.arr.length;
    }

    getFirstElement() {
        return this.arr[0];
    }
    // Lack of methods for manipulating the 'arr' attribute (like adding or removing elements)
}