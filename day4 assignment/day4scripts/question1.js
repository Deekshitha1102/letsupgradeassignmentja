//write a mutiple of 3 and 5
for (let number = 0; number <= 100; number++ ){
    if((0 == number % 3) && (0 == number % 5)){
      console.log("FizzBuzz" + " " + number);

    }else if(0 == number % 5){
      console.log("Buzz" +" "+ number);

    }else if(0 == number % 3){
      console.log("Fizz" + " "+ number);
    }else{
      console.log(number);
    }
}

//2) Destructure the object

const student ={
  name: "Helsinki",
  age:24,
  projects:{
    diceGame:"Two player dice game using Javascript"
  }

}
console.log(student.name, student.age,student.projects.diceGame);
console.log(student.projects.diceGame);
const {name,age}=student;
console.log(name,age);

//write a shopping list program

let shoppinglist = ["juices","bread","fruits","milk","eggs","butter"];
console.log(shoppinglist);

for (let i=0;i<shoppinglist.length;i++){
  console.log(shoppinglist[i]);
}

let shoppingmarket = [...shoppinglist];
shoppingmarket.push("crud","peanuts");
console.log(shoppingmarket);

//employees

let sales = 5000;
if (sales==0 && sales>=5000){
  console.log("increased the income by 2%")
}else if(sales >= 5001 && sales>=10000){
  console.log("increased the income by 5")

}else if(sales >=10001 && sales>= 20000){
  console.log("increased the income by 7");

}else{
  console.log("increased by 10")
}


//write a prime number

let n = prompt("Enter a number");

for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) ; 
    break;
  }

  alert( i ); 
}







