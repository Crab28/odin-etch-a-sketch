const SKETCH_WINDOW = document.getElementById('sketch-window');
const SKETCH_SETTINGS = document.getElementById('sketch-settings');

let gridSize = 16;

function createWindowTiles() {
    removeAllChildNodes(SKETCH_WINDOW);

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < gridSize; i++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.classList.add('tile-' + gridSize);
            row.appendChild(tile);
        }

        SKETCH_WINDOW.appendChild(row);
    }

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

createWindowTiles();
createTileListeners();