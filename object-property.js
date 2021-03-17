const students =[
    {id: 21, name: 'omar sunny'},
    {id: 12, name: 'Manna'},
    {id: 41, name: 'Mouri'},
    {id: 71, name: 'Dipjol'},
];
const names = students.map( student =>student.name);
const ids = students.map(student =>student.id);
const bigger = students.find(student =>student.id>40);
// console.log(names);
// console.log(ids);
console.log(bigger);
