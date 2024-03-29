
let sales:number;
sales = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

// if variable declared and we dont initiatlize it it will be type any, if we initialize it to a number it automatically sets to number
// best practice is to avoid using any type


function render(document:any) {
    console.log(document)
}

// let numbers: number[] = [1,2,3];

let numbers: number[] = [];
numbers.forEach(n=>n.toFixed)

//tuples, id and name

let user: [number, string] = [1, 'Mosh']
user.push(1) // one issue with tuples is that we can actually push other items to it, since at a base level its just an array
console.log(user)
//tuples are using regular javascript arrays

//Enum
// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {Small = 1, Medium, Large} // by default it will be 0 1 2, could also set as string values like s, m, l, if we set small =1 , rest will be 2 and 3
// const enum makes more efficient code

let mySize: Size = Size.Medium;
console.log(mySize)

function calculateTax(income: number, taxYear = 2022): number { //? makes it optional (ie taxYear?:number), we can also give it a default value
    
    if(taxYear < 2022)
        return income*1.2
    return income*1.3
    // undefined will be returned automatically, so we should add noImplicit returns in tsconfig and noUnusedParameters
     //typescript can infer what return value is, but best practice both input and return are annotated
}

calculateTax(10_000, 2022)

type Employee = {
    readonly id:number,
    name:string,
    retire: (date: Date) => void
    
}
let employee: Employee= {
    id: 1, 
    name:'',
    retire: (date:Date)=>{
        console.log(date)
    }
};
employee.name = 'Mosh'
//unionnnnn
function kgToLbs(weight: number | string): number {
    if(typeof weight === 'number'){
        return weight*2.2
    }
    else
        return parseInt(weight)*2.2
}

kgToLbs(10);
kgToLbs('10kg');

//intersection
type Draggable = {
    drag: ()=> void    
}
type Resizable = {
    resize: ()=> void    
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: ()=>{},
    resize: ()=>{}
}

//literal type
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = 'cm' | 'inch'

function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!')
}

greet(null);

//optional chaining

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0)
// if (customer !== null && customer !== undefined) {
//     console.log(customer.birthday)
// }

//optional property access operator
console.log(customer?.birthday?.getFullYear)

//optional element access operator
//cusomter?.[0]

//optional call operator
let log:any = null;
log?.('a')


const url = new URL('...')

interface Person {
    first: string;
    last: string;
    // [key:string]: any
    //thsi can be added so you can add any other properties but 
    //_first and last name are required

}

const person: Person = {
    first: 'hello',
    last: 'bro'
}
const person2: Person = {
    first: 'hello',
    last: 'bro',
}

type MyList = [number?, string?, boolean?]

const arr: MyList = []

arr.push(1)
arr.push('23')
arr.push(false)

//Generics

class Observable<T> {
    constructor(public value: T){
        
    }
}