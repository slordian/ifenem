let certa1 = document.getElementById("certa1");
let revelador1 = document.getElementById("revelador1");
revelador1.addEventListener("click", () =>{
    if (revelador1.textContent === "Revelar"){
        certa1.style.color = "green";
        revelador1.textContent = "Esconder";
    } else {
        revelador1.textContent = "Revelar";
        certa1.style.color = "black";
    };    
});

let certa2 = document.getElementById("certa2");
let revelador2 = document.getElementById("revelador2");
revelador2.addEventListener("click", () =>{
    if (revelador2.textContent === "Revelar"){
        certa2.style.color = "green";
        revelador2.textContent = "Esconder";
    } else {
        revelador2.textContent = "Revelar";
        certa2.style.color = "black";
    };    
});