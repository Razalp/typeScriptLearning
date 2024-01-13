//function overLoording;


function add(num1:number,num2:number):number;
function add(num1:string,num2:string):string;
function add(num1:any,num2:any):any{
    return num1 + num2
}

console.log(add(2,2))
console.log(add("2","2"))


//generics

function getAge<T>(age:T):T{
    return age;
}


console.log(getAge<string>("20"))
console.log(getAge<number>(20))

//enums

enum StatusType{
    PENDING ='pending',
    COMPLETED ='completed',
    FAILED ='failed',
}


function getStatus(message:string,status:StatusType){
    console.log(message,"==",status)
}

console.log('1212121asas',StatusType.COMPLETED)


//as const

let Name ="razal" as const