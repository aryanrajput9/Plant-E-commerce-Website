
export function slideBar() {
    let menuControl = document.querySelector(".menuControl");
    let closeBtn = document.querySelector(".closeBtn")
    let menu = document.querySelector(".menu")


    menuControl.addEventListener("click", () => {

        menu.style.display = "flex";

        setTimeout(() => {
            menu.style.right = "0px";
        }, 10);
    });
    closeBtn.addEventListener("click", () => {
        menu.style.right = "-100%";

        setTimeout(() => {
            menu.style.display = "none";
        }, 500); // same as CSS transition
    });


}

