// button for number of squares per side
const container = document.querySelector('.container');
const sizeBtn = document.querySelector('#grid-size-btn');

let n = 16;
displayGrid(n);

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', () => {
    container.textContent = "";
    displayGrid(n)
});

sizeBtn.addEventListener('click', () => {
    while(true){
        n = +prompt("Enter the size of the grid between 10 and 100 : ", 16);
        if(10<=n && n<=100){
            container.textContent = "";
            displayGrid(n);
            break;
        }
    }
});

// create n x n grid
function displayGrid(){
    for(let i=0; i<n; i++){
        const row = document.createElement('div');
        row.style.display = 'flex';
        for(let j=0; j<n; j++){
            let size = 50/n;
            const grid = document.createElement('div');
            grid.className = 'grid';
            grid.style.width = `${size}vw`;
            grid.style.height = `${size}vh`;
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
    // hover effect using mouse
    const grids = document.querySelectorAll('.grid');
    grids.forEach( grid => {
        grid.addEventListener('mouseover', () =>{
            grid.style.backgroundColor = 'antiquewhite';
        });
    });
}




