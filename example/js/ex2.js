document.getElementById('product-name').innerHTML = 'San pham 1';

//noi chuoi 
// cach 1

const string1 = 'duc la mot';
const string2 = 'thang ngu';
const result = string1 + ' ' + string2;
console.log(result);

//cach2

const result1 = `${string1} ${string2}`;
console.log(result1);

// kieu object

const person = {
    name: 'hung',
    age:  '18',
    nickname: 'bin',
}

console.log(person);

//lay ra tung thanh phan cua object
console.log(person.name);

//kieu array
const number = [1,2,3,4,5];
console.log(number[2]);

//kieu array object
const item1 = {
    name: 'linh',
    age: 18,
    nickname: 'bong'
}

const item2 = {
    name: 'dat',
    age: '19',
    nickname: 'dat pho',
}

const item3 = {
    name: 'tung',
    age: '19',
    nickname: 'bi',
}

const block = [item1, item2, item3];
console.log(block[1].name);

//function
function myFunction() {
    console.log('Hi');

    return 1;

    console.log('Hello');
}

console.log(myFunction());


//ktra xem co phai so chan khong
//cach 1
function myFunction1(local) {
    if(local % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

//cach 2
function myFunction1(local) {
    if(local % 2 === 0){
        return true;
    }

    return false;

    //cach 3
return local % 2 ===0;
}


const people = {
    name: 'duc',
    age: '29',
    nickname: 'bon',
    getFullname: function(){
        return this.name + ' ' + this.nickname;
    },

    checkAge: () => {
        return this.age >=29;
    },
}

console.log(people.getFullname());
console.log(people.checkAge());
