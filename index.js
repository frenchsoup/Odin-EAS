let gridDiv = document.getElementsByClassName('grid');

/**
 * loop to create grid divs
 */
for (x = 0; x < 256; x++) {
  let grid = document.createElement('div');
  grid.style.height = '35px';
  grid.style.width = '35px';
  grid.className = 'grid';
  grid.id = 'grid';
  document.getElementById('gridContainer').appendChild(grid);
}

/**
 * loop to add event listener anf function to all gridDivs
 * function changes background
 */
for (let i = 0; i < gridDiv.length; i++) {
  gridDiv[i].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
  });
}
