//infer types
// let userName="razal";
// userName=0

//defining type (explicit Type);
let userName :String ='razal'
let phoneno :Number =8129933192
let doYouWant : boolean=true
let skils : String[] =["JS","TS","CSS"]
let count :Number[] =[1,2,3,4,4,5]
let array:[]=[]
let userDetailes : {name:String,age:Number ,salery:Number} ={name:"razal",
age:19
}
console.log(userDetailes)

//interface
interface Detailes {
    name?:String;//opetional
    age?:Number | String;
    salery?:Number;
}

let UserDetailes : Detailes = {
    name:   'rarararar',
    age:200,
    salery:20000,
}

let adminDetailes : Detailes = {
    name:"diedx",
    age:66,
    salery:1234,
}

let skiles:(String|Number|boolean)[] =["razal" ,"sjs",10,12,13,14,true]
type GetUserName ={
    name:String,
    age:Number,
}//we can give her the type 
function getUserDetails(userDetails:Detailes):String|Number {
return userDetailes?.age
 }

 const newValue=getUserDetails(userDetailes);
 newValue.toString()


 //named types

 type AllStutus="pending"|"completed"|"started";
 let currStatus:AllStutus ='completed';

 const response="pending";

 if(response==='pending') currStatus='pending'
 