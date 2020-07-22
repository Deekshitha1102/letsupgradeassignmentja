
let arr1 = [1,2,3,4,5,6,7];

let number = arr1.map(arr1=>{
    let pos = Math.random()*100;
    arr1.pos = pos;
    return arr1
})

console.log(number);
let pass = number.filter(arr1=>{
    if(arr1.pos==0)
    return arr1;
})
console.log(pass);
let odd = arr1.filter(el=>el%2==0);
let oddcube = arr1.filter(el => el % 2==0).map(el => el**2);

console.log(odd);
console.log(oddcube);



//write a program to create a class user
class user{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.course = [];
    }

    login(){
        console.log('${this.name} has logged in');
        return this;
    
    }
    logout(){
        console.log('${this.name} has logged out');
        return this;

    }
    addcoins(){
        this.coins++;
        console.log('$(this.name) has added the coins');
        return this;
    }
}

class Moderator extends user{
    constructor(name,age,email){
        super(name,age,email);
    }
    addcoins(user){
        user = user.filter(u =>{
            return u.email == user.email;
        })
        this.coins++;
        console.log('$(this.name) has added the coins');
        return this;
        
    }
    deletecoins(){
        user = user.filter(u =>{
            return u.email != user.email;
        })
        this.coins++;
        console.log('$(this.name) has added the coins');
        return this;
        }

    }

class Admin extends Moderator{
    addcourse(user,course){
        user.course.push(course);
        console.log(user);
    }
    deletecourse(user,decourse){
        user.decourse.pop(course);
        console.log(user)
    }
}

let users1 = new user('megha', 23, 'megha@gmail.com');
let users2 = new user('mala',34,'mala@gmail.com');

let mod = new Moderator('gopal',34,'gopal@gmail.com');
let admin = new Admin('deeks',22,'deeks@gmail.com');
let user = [users1,users2,mod,admin];

