'use strict';

let container = document.getElementById('container');

let tabelEl = document.createElement('table');

container.appendChild(tabelEl);

let carImg = ['bm.jpg', 'ford.jpg', 'kis.jpg'];
let cars =[];

function Car(name , model, price){

  this.Name = name;
  this.model = model;
  this.price = price;


  cars.push(this);
}

function saveToLocalStorage(){
  let data = JSON.stringify(cars);
  localStorage.setItem('cars', data);
}

function readFromLocalStorage(){
  let obj = localStorage.getItem('cars');
  let obj1 = JSON.parse(obj);

  if(obj1){
    cars = obj1;
  }
}
readFromLocalStorage();
Car.prototype.render = function(){
  let trEl = document.createElement('tr');
  tabelEl.appendChild(trEl);

  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = this.Name;

  let tdEl2 = document.createElement('td');
  trEl.appendChild(tdEl2);
  tdEl2.textContent = this.model;

  let tdEl3 = document.createElement('td');
  trEl.appendChild(tdEl3);
  tdEl3.textContent = this.price;
};


function createTableHeader(){
  let trEl = document.createElement('tr');
  tabelEl.appendChild(trEl);

  let thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = ' ';
}

function createTableFooter(){
  let trEl = document.createElement('tr');
  tabelEl.appendChild(trEl);

  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = 'name';

  let tdEl2 = document.createElement('td');
  trEl.appendChild(tdEl2);
  tdEl2.textContent = 'model';

  let tdEl3 = document.createElement('td');
  trEl.appendChild(tdEl3);
  tdEl3.textContent = 'price';
}
createTableHeader();
let myForm = document.getElementById('myForm');

myForm.addEventListener('submit' , addCar);

function addCar(event){
  event.preventDefault();
  let name = event.target.name.value;

  let newCar = new Car(name);

  newCar.render();
  createTableFooter();
  saveToLocalStorage();
}

let kia = new Car('fadi' , 2022358 , 'kia');
kia.render();

let ford = new Car('thabet', 427552 , 'ford');
ford.render();

let bm = new Car('razan' , 355522448, 'bmw');
bm.render();

