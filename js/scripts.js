const botoes = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#product-image")


botoes.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)

        botoes.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        }); 
        
        const botao = e.target;
        const id = botao.getAttribute("id");

        botao.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() =>{
            image.classList.toggle("changing");
        }, 200);
    });
});
