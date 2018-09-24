//1st
const grades = function(first, second, third, final) {
    return ((first + second + third + final) / 4 );
};
const cs = grades(89, 98, 80, 79);
console.log(cs);

//2nd
const alpha = function() {
    return "omega";
};
console.log(alpha());

//3rd 
const student = function(firstName, age) {
	console.log(firstName + " is " + age + " years old");
};

//4th 
const friends = function(friend1, friend2, friend3) {
    if (friend1.length > friend2.length && friend1.length > friend3.length) {
        return friend1
    }
    else if (friend2.length > friend1.length && friend2.length > friend3.length) {
        return friend2
    } else {
        return friend3
    }
}; 
console.log(friends("Garo", "Garabed", "Berg"));

//5th
const numbers = function(numb1, numb2) {
  if (numb1 === numb2) {
    return "0";
  } if (numb1 > numb2) {
    return "1";
	} if (numb1 < numb2) {
		return "-1";
	}
};
console.log(numbers(15,10));

//6th
const salary = function (payment, hoursWorked) {
    return (payment * hoursWorked);
};
console.log(salary(5,20));

//7th
const killDeathRatio = function(kills, deaths) {
	return (kills/deaths);
};
console.log(killDeathRatio(80,20));

//8th
const areaOfTriangle = function(base, height) {
    return killDeathRatio (salary(base,height),2);
};
console.log(areaOfTriangle(4,9));

//9th
const numLength = function (number) {
    return number.toString().length;
};
console.log(numLength(86987));

//10th
const person = function (Fname, Lname, age) {
    if ((Fname + " " + Lname).length > age) {
    return "1";
} else {
    return "-1";
}
};
console.log(person("Max", "Jones", 18));

//11th
const runStuff = function (base, height, shape) {
    if (shape === "rectangle") {
        return (base * height);
    } else if (shape === "triangle") {
        return (0.5 * (base * height));
    } else {
        return "-1";
    }
};
console.log(runStuff(8,4, "triangle"));
