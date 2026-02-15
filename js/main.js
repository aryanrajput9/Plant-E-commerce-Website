import { slideBar } from "./mobileNav.js";
import { productTab } from "./producttab.js";
import { getData } from "../data/Api.js";

slideBar();

const plants = await getData();

if (!plants || plants.length === 0) {
    console.log("No plants received");
} else {
    productTab(plants);
}
