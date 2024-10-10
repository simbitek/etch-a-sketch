const divContainer = document.getElementById('container');
const gridSizeBtn = document.querySelector('#grid-size-btn');
const inputText = document.querySelector('#input-text');

function createGrid() {
    const divGrid = document.createElement('div');
    divGrid.style.height = '16px';
    divGrid.style.width = '16px';
    // divGrid.style.backgroundColor ='blue';
    divGrid.classList.add('square');
    divContainer.appendChild(divGrid);

}


gridSizeBtn.addEventListener('click', () => {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild);
      }
    let gridSize = inputText.value.toString();
    console.log('grid size: ' +gridSize)
    if (gridSize > 100) gridSize = 100;
    if (gridSize < 1) gridSize = 1;

    for (let index = 0; index < gridSize; index++) {
        
        createGrid();
    }
    


});








