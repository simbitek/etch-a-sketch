// const container = document.getElementById('#container');
// const gridSizeBtn = document.getElementById('#grid-size-btn');

// function createGrid(size) {
//     container.innerHTML = '';
//     container.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
//     container.style.gridTemplateRows = `repeat(${16}, 1fr)`;

//     for (let i = 0; i < 16 * 16; i++) {
//         let square = document.createElement('div');
//         square.classList.add('grid-square');
//         square.style.width  = `$(256 / 16)px`;
//         square.style.height = `$(256 / 16)px`;

//         // hover effect

//         square.addEventListener('mouseover', () => {
//             square.style.backgroundColor = 'red';
//         });

//         container.appendChild(square);
//     }

// }

// gridSizeBtn.addEventListener('click', () => {
//     let gridSize = alert("Enter grid size (max 100): ");
//     if (gridSize > 100) gridSize = 100;
//     if (gridSize < 1) gridSize = 1;
//     createGrid(gridSize);
// });

// createGrid(16);
 

const container = document.querySelector('#container');
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor ='blue';
    container.insertAdjacentElement('beforeend', square);
}



