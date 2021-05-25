'use strict';

const h1 = document.getElementById('heading');
h1.innerText = 'Toppings';

const burger = document.getElementById('burger');
burger.className = 'list-item';

const pickles = document.createElement('li')
pickles.innerText = 'Pickles'
pickles.id = "pickles"
pickles.className = 'list-item'

const list = document.getElementById('list')
list.append(pickles)