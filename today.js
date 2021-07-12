//using spread oprator while adding the items it does not affect original items too
let fruits=['pineapple','apple','mango','grapes','kiwi']
let newsfruits=[...fruits,'orange','custom']
console.log(fruits);
console.log(newsfruits);
//copying the array while adding the items it affect original items too
let f1=['pineapple','apple','mango','grapes','kiwi']
let f2=f1
console.log(f1)
console.log(f2)
f2.push('banana')
console.log(f1)
console.log(f2)
fruits.push('watermelon')
console.log(fruits)
console.log(newsfruits)
//strings
let str1='amudha selvi'
console.log(str1.length);
console.log(str1.startsWith('amu','0'))
let str2="jyothi siva priya"
console.log(str1.concat(str2));
console.log(str2.toUpperCase(str2))
console.log(str1.toLowerCase(str1))
console.log(str1.replace('amudha selvi','gayathri velcheti'))
console.log(str1)
console.log(str1.includes('amu'))
console.log(str1.repeat(10))
//temmplate literals
var x1=`gayathri devi
raja reddy
rose flower`
console.log(x1)
var z1='Apssdc'
var z2="program"
console.log(`Hello guys
welcome to apssdc
${z1} organization ${z2}`)
//destructing 
var d1=['hello','world','2021']
var[dd1,dd2,dd3,j]=d1
console.log(j)
console.log(dd1)
let e1=['a','e','i','o','u']
var[a1, ,a2, ,a3]=e1
console.log(a3)
var rest1=['a','b','c','d','e','f']
var[a,b,...f]=rest1
console.log(a)
console.log(b)
console.log(f)
var x=[100]
var [x2,y=7]=x
console.log(x)
console.log(y)
console.log(x2)
var s3=45;
var s4=47;
[s3,s4]=[s4,s3]
console.log(s3)
//objects
var student={name:"amudha",id:1871002}
console.log(student.name+""+student.id)
var{name,id}=student
console.log(name)
var{x1=2,x3=4}={x1:34}
console.log(x1)
var map=new Map()
map.set('gayathri','trainer')
map.set("raja","trainer")
map.set("suriya","traineer")
console.log(map.size)
map.delete("raja")
console.log(map.size)
console.log(map.keys)
//class
class Employee{
    constructor(name,id){
        this.n1=name
        this.id1=id
    }
}
class User extends Employee{
    User1(){
        console.log(this.n1)
    }
}
var obj=new User('surya')
obj.User1()