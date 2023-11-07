let emp = [
    {
    name: 'abc',
    age: 30,
},
{
    name: 'bde',
    age: 23,
},
{
    name: 'jedy',
    age: 20,
},
{
    name: 'kgj',
    age: 35,
},
];

const result = emp.filter((value)=>{
    return value.age<26;
});