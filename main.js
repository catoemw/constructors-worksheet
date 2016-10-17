// EXERCISE 1
// ANIMAL

function Animal () {
	this.hunger = 100;
}

Animal.prototype.says = '...';

// EXERCISE 2
// DOG

function Dog () {
	this.hunger = 100;
	this.says = 'woof';
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.eats = ['plant', 'animal'];

// CAT

function Cat () {
	this.hunger = 100;
	this.says = 'meow';
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.eats = ['animal'];

// SNAIL

function Snail () {};

Snail.prototype = Object.create(Animal.prototype);

Snail.prototype.eats = ['plant', 'fungus', 'algae'];

// EXERCISE 3

// SPEAK

Animal.prototype.speak = function () {
	return this.says;
}

var dog = new Dog();
var cat = new Cat();
var snail = new Snail();

console.assert(dog.speak() === 'woof');
console.assert(cat.speak() === 'meow');

// EAT

Animal.prototype.eat = function (food) {
	if (this.eats.indexOf(food) > -1) {
		this.hunger -= 10;
	} else {
		this.hunger = 100;
	}
}; 

cat.eat('animal');
dog.eat('dog');

console.assert(cat.hunger === 90);
console.assert(dog.hunger === 100);





