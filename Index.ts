//infer types
// let userName="razal";
// userName=0

//defining type (explicit Type);
let userName :string ='razal'
let phoneno :number =8129933192
let doYouWant : boolean=true
let skils : string[] =["JS","TS","CSS"]
let count :number[] =[1,2,3,4,4,5]
let array:[]=[]
let userDetailes : {name:string,age:number ,salery:number} ={name:"razal",
age:19
}
console.log(userDetailes)

//interface
interface Detailes {
    name?:string;//opetional
    age?:number | string;
    salery?:number;
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

let skiles:(string|number|boolean)[] =["razal" ,"sjs",10,12,13,14,true]
type GetUserName ={
    name:string,
    age:number,
}//we can give her the type 
function getUserDetails(userDetails:Detailes):string|number {
return userDetailes?.age
 }

 const newValue=getUserDetails(userDetailes);
 newValue.tostring()


 //named types

 type AllStutus="pending"|"completed"|"started";
 let currStatus:AllStutus ='completed';

 const response="pending";

 if(response==='pending') currStatus='pending'
