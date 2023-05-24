const SKETCH_WINDOW = document.getElementById('sketch-window');
const SKETCH_SETTINGS = document.getElementById('sketch-settings');

let gridSize = 16;

function createWindowTiles() {
    removeAllChildNodes(SKETCH_WINDOW);

    checkGridSize();

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < gridSize; i++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.width = 480 / gridSize + 'px';
            tile.style.height = 480 / gridSize + 'px';
            row.appendChild(tile);
        }

        SKETCH_WINDOW.appendChild(row);
    }

    createTileListeners();

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createTileListeners() {
    const tiles = document.getElementsByClassName('tile');

    for (let index = 0; index < tiles.length; index++) {
        tiles[index].addEventListener('mouseover', () => {
            tiles[index].classList.add('tile-red')
        });
        
    }
}

function createSliderListener() {
    const SLIDER = document.getElementById('myRange');
    const SLIDER_NUMBER = document.getElementById('slider-number');

    SLIDER.addEventListener('input', () => {
        gridSize = SLIDER.value;
        
        SLIDER_NUMBER.textContent = gridSize + 'x' + gridSize;
        createWindowTiles();
    });
}

function checkGridSize() {
    if (gridSize > 32) {
        gridSize = 32;
    } else if (gridSize < 8) {
        gridSize = 8;
    }
}

createWindowTiles();
createSliderListener();