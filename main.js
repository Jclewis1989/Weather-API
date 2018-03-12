'use strict';

let btn = document.querySelector('.btn');

let getWeather = function() {
  let zip = document.querySelector('.input').value;
  let url = // Your API Key + ZIP Code...
  
  fetch(url)
  .then(function(res) {
    if(!res.ok) {
      throw Error(res);
    }
    return res.json();
  })
  .then(function(data) {
    let world = document.querySelector('.world');
    let condition = document.querySelector('.condition');
    let icon = document.querySelector('.img--icon');
    let name = document.querySelector('.name');
    let temp = document.querySelector('.temp');
    let state = document.querySelector('.state');
    let f = document.querySelector('.f');
    let c = document.querySelector('.c');
    
    name.innerHTML = data.location.name;
    state.innerHTML = data.location.region + "," + " ";
    condition.innerHTML = data.current.condition.text;
    world.innerHTML = data.location.country;
    icon.src = data.current.condition.icon;
    f.innerHTML = data.current.temp_f + ' F';
    c.innerHTML = data.current.temp_c + ' C';
    
    c.classList.add('hidden');
    f.classList.add('show');
    
    temp.addEventListener('click', function() {
      c.classList.toggle('hidden');
      c.classList.toggle('show');
      f.classList.toggle('hidden');
      f.classList.toggle('show');
  })
  .catch(function(err) {
    console.log(err);
  });
})
};

btn.addEventListener('click', function() {
  getWeather();
})