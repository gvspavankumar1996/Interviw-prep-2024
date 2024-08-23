const pavan ={
    name:"pavan",
    date: new Date(),
    age:20,
    map: new Map([['key', 'value']]),
    address:{
        city: 'rajahmundry',
        college:{
            name: "SRM"
        }
    }
}

const dad = structuredClone(pavan);
// const dad = JSON.parse(JSON.stringify(pavan));

dad.address.city="palkollu 😊"
dad.address.college.name="distance"
dad.name="sarma"
dad.age=50

console.log(pavan)
console.log(dad)