class MyArray<T> {
    private array: T[] = [];

    append(value: T): void {
        this.array.push(value);
    }

    prepend(value: T): void {
        this.array.unshift(value);
    }
    
    deleteLast(): void {
        this.array.pop()
    }

    deleteFirst(): void {
        this.array.shift()
    }

    inseartValueAtIndex(value: T, index: number) {
        this.array.splice(index, 0, value);
    }

    deleteIndex(index: number) {
        if(index >= this.array.length || index < 0) {
            throw new Error("Index out of bounds");
        }
        this.array.splice(index, 1);
    }

    getArray(): T[] {
        return this.array;
    }
}

const array = new MyArray<number>();

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
