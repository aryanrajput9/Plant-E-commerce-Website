import { slideBar } from "./mobileNav.js";
import { productTab } from "./producttab.js";
import { getData } from "../data/Api.js";


slideBar();


async function init() {

    const plants = await getData();

    productTab(plants);

}

init()
