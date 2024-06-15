function insertR() {
    let table = document.getElementById("tab").
        getElementsByTagName('tbody')[lastindex];
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell();
    for (let i = 0; i <= newRow.length; i++) {
        // let newRow = table.insertRow();
        // let cell1 = newRow.insertCell();
        cell1.innerHTML = `Cell 1 row ${i}`
    }
    //let cell2 = newRow.insertCell(1);
    //cell1.innerHTML = "Cell 1 row 2"
    //cell2.innerHTML = "Cell 2 row 2"

}