let display1 = document.querySelector(".display1");
let display2 = document.querySelector(".display2");
let display3 = document.querySelector(".display3");

let kirish = document.querySelector("#kirish");
let reg = document.querySelector("#reg");
let save = document.querySelector("#save");
let main = document.querySelector("#main");
let main2 = document.querySelector("#main2");

let log = document.querySelector("#log");
let parol = document.querySelector("#parol");

let ism = document.querySelector("#ism");
let fam = document.querySelector("#fam");
let tel = document.querySelector("#tel");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");

let ismd3 = document.querySelector(".ism");
let famd3 = document.querySelector(".fam");
let teld3 = document.querySelector(".tel");
let emaild3 = document.querySelector(".email");
let passd3 = document.querySelector(".pass");

let admin = "jsforever23";
let kalit = "jsforever08";
kirish.addEventListener("click", () => {
    let login = log.value;
    let password = parol.value;

    if (login === admin && password === kalit || login === email && password === pass) {
        display3.style.display = "flex";
        display1.style.display = "none";
    } else {
        reg.style.display = "block";
        kirish.style.display = "none";
        alert("Login Parol noto'g'ri!!!")
    }
});

reg.addEventListener("click", () => {
    display1.style.display = "none";
    display2.style.display = "flex";
    save.style.display = "block";
    // main.style.display = "block";
});

save.addEventListener("click", () => {
    ismd3.textContent = ism.value;
    famd3.textContent = fam.value;
    teld3.textContent = tel.value;
    emaild3.textContent = email.value;
    passd3.textContent = pass.value;
    save.style.display = "none";
    main.style.display = "block";
    alert("Ma'lumotlar saqlandi!")
})

main.addEventListener("click", () => {
    display2.style.display = "none";
    display3.style.display = "none";
    display1.style.display = "flex";
    kirish.style.display = "block";
    reg.style.display = "block";
})

main2.addEventListener("click", () => {
    display3.style.display = "none";
    display1.style.display = "flex"
})