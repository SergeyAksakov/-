'use strict';

function Singleton() {
  const {instance} = Singleton;
  if (instance) return instance;
  Singleton.instance = this;
}

//использование
const a1 = new Singleton();
Singleton.instance = null;
console.log('delete instance');
const a2 = new Singleton();
if (a1 !== a2 ) console.log('a1! == a2')