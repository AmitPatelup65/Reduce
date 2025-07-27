//Easy Level Map()
//1.- 1. Convert an array of numbers to their squares. Input: [1, 2, 3] -> Output: [1, 4, 9]
const arr=[1,2,3]
const square=arr.map((num)=>num*num)
//console.log(square)

//Easy Level - filter()
//1.- Filter out numbers greater than 10. Input: [4, 12, 8, 20] -> Output: [12, 20]
const arr1=[4,12,8,20]
const grt=arr1.filter((num,value)=>num>10)
//console.log(grt)

//2.- Remove all falsy values from array. Input: [0, "Hello", false, 5, '', null] -> Output: ["Hello", 5]
const arr2=[0,"Hello",false,5,'',null]
const falsy=arr2.filter(Boolean)
//console.log(falsy)

 //3.- Keep only even numbers. Input: [1, 2, 3, 4] -> Output: [2, 4]
 const arr3=[1,2,3,4]
 const even=arr3.filter((num,value)=>num%2==0)
 //console.log(even)

 // 4.- Get only strings from a mixed array. Input: ['hello', 42, true, 'world'] -> Output: ['hello', 'world']
const arr4=['hello', 42, true, 'world'] 
const str=arr4.filter((num,value)=>typeof num=='string')
//console.log(str)

//- 5. Filter names with length > 4. Input: ['Tom', 'Jerry', 'Spike'] -> Output: ['Jerry', 'Spike']
const arr5=['Tom','Jerry','Spike']
const lth=arr5.filter((num ,value)=>num.length>3)
//console.log(lth)

//MEDIUM LEVEL FILTER()
//- 1. Filter students with marks >= 40.
// Input: [{name: 'A', marks: 50}, {name: 'B', marks: 35}] -> Output: [{name: 'A', marks: 50}]
const arr6= [{name: 'A', marks: 50}, {name: 'B', marks: 35}]
const mark=arr6.filter((num,value)=>num.marks>40)
//console.log(mark)

//2.-users with isActive = true.
 //Input: [{user:'Tom', active:true}, {user:'Jerry', active:false}] -> Output: [{user:'Tom', active:true}]
const arr7=[ 
       {user:'Tom', active:true}, 
       {user:'Jerry', active:false}
    ]
 const active=arr7.filter((item,value)=>item.active==true) 
 //console.log(active)  

 //. Filter products with price between 100-500.
 //Input: [{p:'Pen',price:100},{p:'Book',price:700}] -> Output: [{p:'Pen',price:100}]
 const arr8=[{p:'Pen',price:100},{p:'Book',price:700}]
 const prc=arr8.filter((item ,value)=>item.price>99 &&item.price<501)
 //console.log(prc)

 //- 4. Keep names starting with 'S'. Input: ['Sam', 'Alex', 'Steve'] -> Output: ['Sam', 'Steve']
 const arr9=['Sam', 'Alex', 'Steve'] 
 const s=arr9.filter((item,value)=>item[0]=='S')
 //console.log(s)

 //- 5. From array of numbers, filter perfect squares. Input: [1, 2, 4, 7, 9] -> Output: [1, 4, 9]
 const arr10 = [1, 2, 4, 7, 9];

const output = arr10.filter((num) => Number.isInteger(Math.sqrt(num)));

//console.log(output); // [1, 4, 9]

//EASY LEVEL - REDUCE()
//1.-- 1. Sum all numbers in an array. Input: [1, 2, 3] -> Output: 6
const arr11=[1,2,3]
const rd=arr11.reduce((acc,currentvalue)=> {
    return acc+currentvalue
},0)
//console.log(rd)

//- 2. Multiply all numbers. Input: [2, 3, 4] -> Output: 24
const arr12=[2,3,4]
const mul=arr12.reduce((acc,currentvalue)=> {
    return acc*currentvalue
},1)
//console.log(mul)

//- 3. Find the max value. Input: [3, 7, 1] -> Output: 7
const arr13=[,3,7,1,]
const max=arr13.reduce((acc,currentvalue)=>{
   if(acc>currentvalue){
      return acc
   }
   else{
      return currentvalue
   }
})
//console.log(max)

//4.- Concatenate all strings. Input: ['a', 'b', 'c'] -> Output: 'abc'
const arr14=['a','b','c']
const st =arr14.reduce((acc,currentvalue)=>{
  return acc+currentvalue
})
//console.log(st)

//5.- Count how many times true appears. Input: [true, false, true] -> Output: 2
const arr15 = [true, false, true];
const count = arr15.reduce((acc, val) => acc + (val === true ? 1 : 0), 0);
//console.log(count); // Output: 2

//MEDIUM LEVEL REDUCE()
//2. Calculate average age from user list.
 //Input: [{name:'A', age:20}, {name:'B', age:30}] -> Output: 25
   const arr16 = [{ name: 'A', age: 20 }, { name: 'B', age: 30 }]
   const avg = arr16.reduce((acc,currentvalue)=>(acc+currentvalue.age),0)/2
 //  console.log(avg)

 //3. Create object with total income by department.
 //Input: [{dept:'IT', salary:1000}, {dept:'HR', salary:800}, {dept:'IT', salary:1200}] -> Output: {IT: 2200,
//HR: 800}
const arr17=[
   {dept:'IT', salary:1000},
    {dept:'HR', salary:800},
     {dept:'IT', salary:1200}
   ]
   const acm=arr17.reduce((acc,currentvalue)=>{
      acc[currentvalue.dept]=(acc[currentvalue.dept]||0)+currentvalue.salary
      return acc
   },{})
   //console.log(acm)


   //- 4. Group by city.
 //Input: [{city:'Delhi'},{city:'Mumbai'},{city:'Delhi'}] -> Output: {Delhi:2, Mumbai:1}
 const arr18= [{city:'Delhi'},{city:'Mumbai'},{city:'Delhi'}]
 const grp=arr18.reduce((acc,currentvalue)=>{
   acc[currentvalue.city]=(acc[currentvalue.city]||0)+1
   return acc
 },{})
 //console.log(grp)

 //- 5. Chain: filter age > 18 -> map names -> reduce to string.
// Input: [{name:'A',age:19},{name:'B',age:17},{name:'C',age:20}] -> Output: 'A C''
 const users=[
{name:'A',age:19},
 {name:'B',age:17},
 {name:'C',age:20}
]
const chain=users
.filter((item)=> item.age > 18)
.map((num)=>num.name)
.reduce((acc,name)=> acc + ' ' + name)
console.log(chain)

 

