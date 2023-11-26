console.log(145);

document.getElementById('product-name').innerHTML = 'San pham 1';

// noi chuoi
// cach 1 
const string1 = 'hello';
const string2 = 'how are you';

const result = string1 + ' ' + string2;

console.log(result);

// cach2

const result1 = `${string1} ${string2}`;

console.log(result1);


// kieu object
const person = {
    name: 'VWH',
    age: '23',
    address: 'ha noi',
}

// lay ra thuoc tinh kieu object

console.log(person.name);

// keiu array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);


//kieu array object
const person1 = {
    name: 'HDG',
    age: '23',
    address: 'ha noi',
}

const person2 = {
    name: 'JKH',
    age: '23',
    address: 'ha noi',
}

const person3 = {
    name: 'IOU',
    age: '23',
    address: 'ha noi',
}

const people = [person1, person2, person3 ];

console.log(people[1].name);


//function

function myFunction() {
    console.log('Hi');

    return 1;

    console.log('Hello');
}

console.log(myFunction());

//ktra xem co phai so chan hay khong
function isEvenNumber(number) {
    //cach1
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }

    //cach2
    if (number % 2 === 0) {
        return true;
    }

    return false;

    cach3
        return number % 2 === 0;
}


// phuong thuc trong object
const person5 = {
    firstName: 'Hung',
    lastName: 'Nguyen',
    age: 23,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    checkAge: () => {
        return this.age >= 23;
    },
};

console.log(person5.checkAge());

//phuong thuc cua mang
const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.length);  // do dai cua mang

// lap cac phan tu cua mang
// cach1
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//cach2
fruits.forEach(function(item) {
    console.log(item);
});

//cach3
fruits.forEach((item) => {
    console.log(item);
});