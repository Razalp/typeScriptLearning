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


console.log(getAge("20"))
console.log(getAge(20))