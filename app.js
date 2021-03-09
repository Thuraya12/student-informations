'use strict'


function Students (id,name,email,mobile, age,tuition ){
    this.id=id;
    this.name=name;
    this.email=email;
    this.mobile=mobile;
    this.age=age;
    this.tuition=tuition;
}

Students.prototype.id=function(){
       
}

let table=document.getElementById('parent');
let tableRow=document.createElement('tr');
table.appendChild(tableRow);
let tableHead=document.createElement('th');
tableRow.appendChild(tableHead);
tableHead.textContent='id';

let tableHead2=document.createElement('th');
tableRow.appendChild(tableHead2);
tableHead2.textContent='Name';

let tableHead3=document.createElement('th');
tableRow.appendChild(tableHead3);
tableHead3.textContent='Email';

let tableHead4=document.createElement('th');
tableRow.appendChild(tableHead4);
tableHead4.textContent='Mobile';

let tableHead5=document.createElement('th');
tableRow.appendChild(tableHead5);
tableHead5.textContent='age';

let tableHead6=document.createElement('th');
tableRow.appendChild(tableHead6);
tableHead6.textContent='tuition';



let ahmad=new Students(1, 'Ahmad')
let ali=new Students(2, 'Ali')


