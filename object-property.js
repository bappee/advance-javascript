const student = [
    {id:21, name:"omar Sunny"},
    {id:31, name:"Manna"},
    {id:41, name:"Moyouri"},
    {id:71, name:"Deepjol"}
];

// for( let i=0; i<student.length; i++);

// const element=student(i);
// const result= element+i;

// console.log(result);

const nam= student.map( s=> s.name);
const ids= student.map(s=>s.id);
const bigger=student.filter(s=> s.id<25);
const imSmall=student.find(s=>s.id>21);
console.log(imSmall);

