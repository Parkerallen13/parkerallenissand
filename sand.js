function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

let grid;
let w = 10;
let cols, rows;

function setup() {
  createCanvas(1000, 1000);
  cols = width / w;
  rows = height / w;
  grid = make2DArray(cols, rows);

  grid[20][10] = 1;
}

function mouseDragged() {
  let col = floor(mouseX / w);
  let row = floor(mouseY / w);
  grid[col][row] = 1;
}

function draw() {
  background(220);

  let nextGrid = make2DArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];

      if (state === 1) {
        if (j < rows - 1 && grid[i][j + 1] === 0) {
          nextGrid[i][j + 1] = 1;
        } else {
          nextGrid[i][j] = 1;
        }
      }
    }
  }

  grid = nextGrid;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      stroke(255);
      fill(grid[i][j] * 255);
      let x = i * w;
      let y = j * w;
      square(x, y, w);
    }
  }
}
