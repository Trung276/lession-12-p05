let x = [];
let y = "";
let i = j =0;

for (i = 0; i < 5; i++) {
    x[i] = [0, 0, 0, 0, 0];
    y += "<br>";
    for (j = 0; j < 5; j++) {
        y += x[i][j] + "     ";
    }
}
document.getElementById("game").innerHTML = y;
function add() {
    let a = Number(prompt("Nhap vi tri hang"));
    let b = Number(prompt("Nhap vi tri cot"));
    y = "";
    x[a][b] = "x";
    for (i = 0; i < 5; i++) {
        y += "<br>";
        for (j = 0; j < 5; j++) {
            y += x[i][j] + "     ";
        }
    }
    document.getElementById("game").innerHTML = y;
}
