

export function productTab(plants) {
    let whatsnew = document.querySelector("#whatsnew");
    let bestseller = document.querySelector("#bestseller");
    let customerfavorities = document.querySelector("#customerfavorities");
    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    let btn3 = document.querySelector("#btn3");
    let productdetails = document.querySelector(".product-details");

    function renderProducts(container, start, end) {

        container.innerHTML = "";

        plants.slice(start, end).forEach(elem => {
            container.innerHTML += `<div class="productBox">
                        <div class="productImg">
                            <img src="${elem.image_url}" alt="img loading...">
                        </div>
                        <div class="productPrice">
                            <h4>${elem.common_name}</h4>
                            <h5>$${elem.year}</h5>
                        </div>
                    </div>`
        })

    }




    // default render

    renderProducts(whatsnew, 0, 6)


    btn1.addEventListener("click", () => {
        whatsnew.style.display = "flex";
        customerfavorities.style.display = "none";
        bestseller.style.display = "none";
        btn1.style.backgroundColor = "#0b3423";
        btn1.style.color = "white";
        btn2.style.backgroundColor = "";
        btn2.style.color = "";
        btn3.style.backgroundColor = "";
        btn3.style.color = "";



        renderProducts(whatsnew, 0, 6)

    })

    btn2.addEventListener("click", () => {
        bestseller.style.display = "flex";
        whatsnew.style.display = "none";
        customerfavorities.style.display = "none";
        btn2.style.backgroundColor = "#0b3423";
        btn2.style.color = "white";
        btn1.style.backgroundColor = "";
        btn1.style.color = "";
        btn3.style.backgroundColor = "";
        btn3.style.color = "";

        renderProducts(bestseller, 7, 13)
    })

    btn3.addEventListener("click", () => {
        customerfavorities.style.display = "flex";
        bestseller.style.display = "none";
        whatsnew.style.display = "none";
        btn3.style.backgroundColor = "#0b3423";
        btn3.style.color = "white";

        btn1.style.backgroundColor = "";
        btn1.style.color = "";
        btn2.style.backgroundColor = "";
        btn2.style.color = "";


        renderProducts(customerfavorities, 14, 19)

    })


}