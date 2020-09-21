console.log("--------------------------IIFE Function-------------------------");

console.log("example -> 1");

(function () {
    let myName = "My name is Tineshwar";
    console.log(myName);
})();

console.log("--------------------------------------");

console.log("example -> 2");

(function () {
    let like = "I love JavaScript"; 
    console.log(like);  
})(); 


console.log("-----------------------Functions Expression----------------------");

console.log("example -> 1");

var addTwoNumbers = function (a,b) {
	return a + b;
}

let sum = addTwoNumbers(10, 20)

console.log("sum => " + sum);

console.log("--------------------------------------");

console.log("example -> 2");

const getRectArea = function(width, height) {
    return width * height;
};

let rectangleArea = getRectArea(2, 5);

console.log("Area of Rectangle => " + rectangleArea);


console.log("--------------------------naming function-------------------------");

console.log("example -> 1");

function multiplication(a, b) {
  return a * b;             
}

let  multiResult = multiplication(10, 20);   

console.log("Multiplication => " + multiResult); 

console.log("--------------------------------------");

console.log("example -> 2");

function AreaOfRectangle(length, width) {
    return length * width;
}

let areaOfRectangleResult = AreaOfRectangle(15, 20) ;

console.log("Area of Rectangle => " + areaOfRectangleResult); 


console.log("--------------------------Arrow function-------------------------");

console.log("example -> 1");

let names = ["Tineshwar", "Hemlata", "Shivam", "Mahima", "Bhatia", "Disha"];

let getNames = names.map(n => {
    console.log(n);
});



console.log("--------------------------callback function-------------------------");

console.log("example -> 1");

function printName(name) {
     console.log("My name is " + name);
};

function getName(callback) {
    let name = "Tineshwar";
    callback(name);
};

console.log(getName(printName));

console.log("--------------------------------------");

console.log("example -> 2");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(function(num) {
    return num % 2;
});

console.log("odd numbers => " + oddNumbers);


console.log("--------------------------Anonymous function-------------------------");

console.log("example -> 1");

let show = function () {
    console.log("Anonymous Function - 1");
};

show();

console.log("--------------------------------------");

console.log("example -> 2");

let display = function(){
    console.log("Anonymous Function - 2")
};

display();


console.log("-------------------function with default parameter-------------------");

console.log("example -> 1");

function MyName(First_Name ="Tineshwar", Last_Name = "Singh", Age = 22) {
    return {First_Name , Last_Name, Age};
};

console.log(MyName());

console.log("--------------------------------------");

console.log("example -> 2");

function Substraction(a = 100, b = 70) {
    return a - b;
};

console.log("Substraction => " + Substraction());

console.log("----------------function with parameter------------------");

console.log("example -> 1");

function employee(name, age, company, salary){
    return{name, age, company, salary};
}

console.log(employee("Tineshwar", 22, "TCS" ,30000));

console.log("example -> 2");

function areaOfSquare(length){
    return(length * length);
}

console.log("Area of Square => " + areaOfSquare(5));


console.log("--------------------------reverse a string--------------------------");

console.log("example -> ");

function revString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let string1= 'Tineshwar';

let result1 = revString(string1);

console.log(result1);


console.log("--------------------check the number is even or odd--------------------");

console.log("example -> ");

let number = 50;

if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}



console.log("--------------------check the number is prime or not--------------------");

console.log("example -> ");

function isPrime(num) {
    let constant = 0 ;

    for (let i = 2 ;  i < num ; i++) {
        if(num%i == 0){
            constant++;
        } 
    }

    if (constant === 0 ) {
        console.log("number is prime number");
    }
    else {
        console.log("number is not a prime number");
    }
}

console.log(isPrime(11));



console.log("---------------------------Palindrome----------------------");

console.log("example -> ");

function Palindrome(str) {
    let len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

let string = 'level';

let value = Palindrome(string);

console.log(value);



console.log("--------------------------find biggest among three number----------------------");

console.log("example ->");

let num1 = 10;
let num2 = 20;
let num3 = 30;
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log("The largest number is " + largest);


console.log("--------------------------factorial of a number----------------------");

console.log("example -> ");

let numb = 5;
let fact = 1;

for (i = 1 ; i <= numb ; i++) {
    fact = fact * i;
}

console.log("The factorial of " + numb + " = " + fact);