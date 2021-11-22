// 1
let h1 = document.querySelector("h1");
h1.addEventListener("click",()=>{
    // h1.className("text-blue");
    // utiliser classlist parce + performant
    h1.classList.add("text-blue");

})

// 2
let h3 = document.querySelector("h3");
h3.addEventListener("dblclick", ()=>{
    // h3.className("text-error");
    // utiliser classlist parce + performant
    h3.classList.add("text-error");

})

// 3
let trois = document.querySelector("p");
trois.addEventListener("click",()=>{
    trois.classList.toggle("text-style")
})
// 4
let quatre = Array.from(document.querySelectorAll("p")[1].children)
console.log(quatre);

quatre.forEach(element => {
    element.classList.toggle("bolder-red");
});


// 5
let cinque = Array.from(document.querySelectorAll("p")[2].children)

console.log(cinque);
cinque.forEach(element => {
    element.addEventListener("click",()=>{
        element.classList.add("bolder-red");
    });
    element.classList.remove("bolder-red");
});

