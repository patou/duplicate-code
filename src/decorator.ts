@color('red')
@size('xl')
class Product {
    constructor(public name: string, public price: number) {
    }

    toString() {
        return `${this.name} - ${this.price}`;
    }
}

class DecoratorProduct extends Product {

}

const product = new Product('Teeshirt', 100);
console.log(product.toString());

function color<T extends { new (...args: any[]): {} }>(color: string) {
    return function (constructor: T) {
        return class extends constructor {
            color = color;
            constructor(...args: any[]) {
                super(...args);
            }

            toString() {
                return `${super.toString()} - ${this.color}`;
            }
        }
    }
}

function size<T extends { new (...args: any[]): {} }>(size: string) {
    return function (target: T) {
        return class extends target {
            size = size;

            constructor(...args: any[]) {
                super(...args);
            }

            toString() {
                return `${super.toString()} - ${this.size}`;
            }
        }
    }
}