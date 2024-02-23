import { Gify } from "./models/Gify.js";
import { Amazon } from "./models/specificBrands/Amazon.js";
import { Apple } from "./models/specificBrands/Apple.js";
import { Starbucks } from "./models/specificBrands/Starbucks.js";

const apple = new Apple();
const starbucks = new Starbucks();
const amazon = new Amazon();

const gify = new Gify([apple, starbucks], []);
// const meow = new Meow();

// gify.addNewCustomer(meow)

// meow.requestGiftCards(apple, 3)
// gify.checkCustomer("meow")