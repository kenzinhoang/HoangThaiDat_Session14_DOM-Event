let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
let target = "";
for (let key in names) {
    target += `<li> ${names[key]}</li>`
}

document.querySelector(".box").innerHTML = target