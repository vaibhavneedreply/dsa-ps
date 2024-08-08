var MyArray = /** @class */ (function () {
    function MyArray() {
        this.array = [];
    }
    MyArray.prototype.append = function (value) {
        this.array.push(value);
    };
    MyArray.prototype.prepend = function (value) {
        this.array.unshift(value);
    };
    MyArray.prototype.deleteLast = function () {
        this.array.pop();
    };
    MyArray.prototype.deleteFirst = function () {
        this.array.shift();
    };
    MyArray.prototype.inseartValueAtIndex = function (value, index) {
        // if(this.array.length > index || index < 0) {
        //     throw new Error("Index out of bounds");
        // }
        this.array.splice(index, 0, value);
    };
    MyArray.prototype.deleteIndex = function (index) {
        if (index >= this.array.length || index < 0) {
            throw new Error("Index out of bounds");
        }
        this.array.splice(index, 1);
    };
    MyArray.prototype.getArray = function () {
        return this.array;
    };
    return MyArray;
}());
var array = new MyArray();
array.append(10);
array.append(20);
array.append(30);
array.append(40);
array.prepend(5);
array.prepend(3);
array.prepend(1);
array.deleteLast();
array.deleteFirst();
array.inseartValueAtIndex(10, 1);
array.deleteIndex(2);
console.log(array.getArray());
