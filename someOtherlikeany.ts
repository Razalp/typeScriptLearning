//any//unkown//never/void/null


// let username :string="razal"

let userNamee:unknown="razal"

const newValuee =userNamee as string

function thrownewError(message:string):never{
    throw new Error(message)
}

function logError(message:string):void{
    console.log(message)
}


type Userss={
    name:string;
    getUserName:()=>number;
}

const currentObj:Userss ={
    name:"razal",
    getUserName(){
        return 2
    },
}
