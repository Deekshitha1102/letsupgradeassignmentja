let number = +prompt("Enter a number");
console.log(number, typeof number);

if ( number % 2 == 0) {
	console.log('the number entered is' +number+ 'Even Number');
}else{
	console.log('the number entered is ' +number+ ' Odd Number');
}


// take a os name and version from the user
let osname = Android;
//let osname = prompt("Enter a os name");
console.log(osname, typeof osname);

if ( osname == Android) {
    console.log("the os name is" +osname+ "version is 9");

}

// program to take marks and grade
let number = +prompt("Enter a number");
console.log(number, typeof number);

if (number >= 85 && number <= 100) {
    console.log("marks are" +number+ "grade is A");
}else if (number >= 50 && number <= 84) {
    console.log("marks are" +number+ " grade is B");
}else{
    console.log("Fail")    
}



}


