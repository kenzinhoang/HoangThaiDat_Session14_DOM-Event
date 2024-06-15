let itemArr = ["item1", "item2"]
function renderItem(arr) {
    let targetStr = "";
    for (const i in arr) {
        targetStr += `<li>${arr[i]}</li>`
    }
    document.querySelector(".ulBox").innerHTML = targetStr
}
renderItem(itemArr)


function addItem() {
    let itemName = document.querySelector(".inputItem").value
    console.log(itemName);
    itemArr.push(itemName)
    renderItem(itemArr)
}

