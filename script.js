const create = document.getElementById('create');
const speeds = [];
const fighters = [];

const fighterValues = [  { id: 'fighterName', label: 'Name', type: 'text' },  { id: 'fighterSpeed', label: 'Speed', type: 'number', min: 0, step: 0.1 }];

function addFighter() {
  const container = document.getElementById('fightersContainer');
  const wrap = document.createElement('div');
  wrap.classList.add('container');
  const fighterInfo = document.createElement('div');
  fighterInfo.classList.add('fighter-container');
  const modifiers = document.createElement('div');
  modifiers.classList.add('modifiers');

  const fighter = {
    name: document.getElementById('fighterName').value,
    speed: parseFloat(document.getElementById('fighterSpeed').value)
  };
  
  fighters.push(fighter);

  const nameValue = document.createElement('p');
  nameValue.classList.add('fighter-name', fighter.name);
  nameValue.innerText = fighter.name;
  fighterInfo.append(nameValue);

  const speedValue = document.createElement('p');
  speedValue.classList.add('fighter-speed', fighter.name);
  speedValue.innerText = fighter.speed;
  fighterInfo.append(speedValue);

  const decreaseButton = document.createElement('button');
  decreaseButton.classList.add('decrease-button', fighter.name, fighter.speed);
  decreaseButton.innerText = '-';
  decreaseButton.addEventListener('click', decrease);
  modifiers.append(decreaseButton);

  const increaseButton = document.createElement('button');
  increaseButton.classList.add('increase-button', fighter.name, fighter.speed);
  increaseButton.innerText = '+';
  increaseButton.addEventListener('click', increase);
  modifiers.append(increaseButton);

  container.append(wrap);
  wrap.append(fighterInfo);
  wrap.append(modifiers);

  sortFighters();
}

function sortFighters() {
  fighters.sort((a, b) => b.speed - a.speed);
  speeds.length = 0;
  speeds.push(...fighters);
  updateDOM();
}

function updateDOM() {
  const container = document.getElementById('fightersContainer');
  container.innerHTML = '';
  fighters.forEach((fighter) => {
    const wrap = document.createElement('div');
    wrap.classList.add('container');
    const fighterInfo = document.createElement('div');
    fighterInfo.classList.add('fighter-container');
    const modifiers = document.createElement('div');
    modifiers.classList.add('modifiers');

    const nameValue = document.createElement('p');
    nameValue.classList.add('fighter-name', fighter.name);
    nameValue.innerText = fighter.name;
    fighterInfo.append(nameValue);

    const speedValue = document.createElement('p');
    speedValue.classList.add('fighter-speed', fighter.name);
    speedValue.innerText = fighter.speed;
    fighterInfo.append(speedValue);

    const decreaseButton = document.createElement('button');
    decreaseButton.classList.add('decrease-button', fighter.name, fighter.speed);
    decreaseButton.innerText = '-';
    decreaseButton.addEventListener('click', decrease);
    modifiers.append(decreaseButton);

    const increaseButton = document.createElement('button');
    increaseButton.classList.add('increase-button', fighter.name, fighter.speed);
    increaseButton.innerText = '+';
    increaseButton.addEventListener('click', increase);
    modifiers.append(increaseButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button', fighter.name);
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteFighter);
    modifiers.append(deleteButton);


    container.append(wrap);
    wrap.append(fighterInfo);
    wrap.append(modifiers);
  });
}

function deleteFighter(event) {
  const fighterName = event.target.classList[1];
  const fighterIndex = fighters.findIndex((fighter) => fighter.name === fighterName);
  if (fighterIndex !== -1) {
    fighters.splice(fighterIndex, 1);
    sortFighters();
  }
}


function decrease(event) {
  const fighterName = event.target.classList[1];
  const fighter = fighters.find((f) => f.name === fighterName);

  if (fighter.speed > 0) {
    fighter.speed -= 1;
  }
  sortFighters();
}

function increase() {
  const name = this.classList[1];
  const speed = parseFloat(this.classList[2]);

  const fighterIndex = fighters.findIndex(fighter => fighter.name === name && fighter.speed === speed);

  if (fighterIndex !== -1) {
    fighters[fighterIndex].speed += 1;
  }
  sortFighters();
}

create.addEventListener('click', addFighter);

// const fighterValues = [document.getElementById('fighterName'), document.getElementById('fighterSpeed')];


// function addFighter() {
//     const container = document.getElementById('fightersContainer');
//     const wrap = document.createElement('div')
//     wrap.classList.add('container')
//     const fighterInfo = document.createElement('div');
//     fighterInfo.classList.add('fighter-container');
//     const modifiers = document.createElement('div')
    

//     fighterValues.forEach( Element => {
//         const value = document.createElement('p');
//         value.classList.add(fighterValues[0].value, Element.value)
//         value.innerText = Element.value;
//         fighterInfo.append(value);
//         modifiers.classList.add('modifiers')

//         modifiers.innerHTML = `
//             <button id="decrease" onclick="decrease()" class="${fighterValues[0].value} ${Element.value}">-</button>
//             <button id="increase" onclick="increase()" class="${fighterValues[0].value} ${Element.value}">+</button>
//         `
//     });

//     container.append(wrap)
//     wrap.append(fighterInfo);
//     wrap.append(modifiers);
// }