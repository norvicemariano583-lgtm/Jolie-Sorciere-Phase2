const boutonMagie = document.getElementById("enterMagic");

boutonMagie.addEventListener("click", () => {

    document.body.classList.add("magic-start");

    setTimeout(() => {

        window.location.href = "page2.html";

    }, 800);

});