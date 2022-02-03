// gets the grid container
let gridContainer = document.getElementById('gridContainer');
// gets all divs with class grid
let gridDivs = document.getElementsByClassName('grid');
// creates 1 div with class grid
let grid = document.createElement('div');
// default grid size
let gridSize = 16;
let rainbow;
let blackScale;

/**
 * loop to create grid divs for default on page load
 */
for (x = 0; x < gridSize * gridSize; x++) {
  let grid = document.createElement('div');
  grid.style.height = 560 / gridSize + 'px';
  grid.style.width = 560 / gridSize + 'px';
  grid.className = 'grid';
  grid.id = 'grid';
  document.getElementById('gridContainer').appendChild(grid);
}
if (gridSize > 0) {
  etch();
}
if (rainbow) {
  rainbowMode();
}
if (blackScale) {
  blackScaleMode();
}

/**
 * Method to prompt user for box size and create new grid
 */
function resizeGrid() {
  gridContainer.innerHTML = '';
  let promptInput = prompt(
    'Please enter new grid size. (Just height or width)',
    '10'
  );
  let promptSize = parseInt(promptInput);
  if (promptSize < 100 && promptSize != 1) {
    let newGridArea = promptSize * promptSize;
    for (x = 0; x < newGridArea; x++) {
      let grid = document.createElement('div');
      grid.style.height = 560 / promptSize + 'px';
      grid.style.width = 560 / promptSize + 'px';
      grid.className = 'grid';
      grid.id = 'grid';
      document.getElementById('gridContainer').appendChild(grid);
    }
    etch();
  }
  if (promptSize > 100) {
    alert('Number must be less than 100');
    resizeGrid();
  }
  if (promptSize === 1) {
    alert('Number must be greater than 1');
    resizeGrid();
  }
}

/**
 * loop to add event listener and function to all gridDivs
 * function changes background
 */
function etch() {
  for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'black';
    });
  }
}
/**
 * Method to clear grid
 */
function clearGrid() {
  for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].style.backgroundColor = 'white';
  }
  resizeGrid();
}

function rainbowMode() {
  rainbow = true;
  for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].addEventListener('mouseover', function (e) {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    });
  }
}

function blackScaleMode() {
  blackScale = true;
  let opacity = 0.1;
  for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].addEventListener('mouseover', function (e) {
      opacity = opacity > 1 ? 0.1 : opacity + 0.1;
      // short for if (opacity==1) opacity=0.1 else opacity=opacity+0.1
      e.target.style.backgroundColor = 'black';
      e.target.style.opacity = opacity;
    });
  }
}
