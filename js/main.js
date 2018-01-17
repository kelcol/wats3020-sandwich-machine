/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)
//


// Create a function to "decimalate numbers"
function decimalate(x) {
  return Number.parseFloat(x).toFixed(2);
};


// TODO: Prompt the user for what kind of bread they would like.
// Ideally, that would look something like: "What kind of bread (white, wheat, flat)?"
let bread = prompt("What kind of bread would you like?");

// TODO: Prompt the user for what kind of meat(s) they would like.
// Indicate they should separate multiple items with a comma:
// "What kind of meat? (Separate meats with a comma if you would like more than one.)"
let meatString =  prompt("What sorts of meat would you like? You can have more than one, just separate with commas so our meat guy doesn't spend all day looking for 'chicken head cheese'.");


// TODO: Prompt the user for what kind of toppings they would like.
// We expect this to be multiple, so ask them to provide you with a
// comma-separated list using a user friendly prompt.
let toppingString =  prompt("What sorts of toppings would you like? You can have more than one, just separate with commas so our topping gal doesn't spend all day looking for 'anchovy tomatoes'.");


// TODO: Prompt the user for what kind of condiments they would like.
// Again, we should expect a comma-separated list if items here.
let condimentString =  prompt("What sorts of condiments would you like? You can have more than one, just separate with commas so the condiment folk don't spend all day looking for 'banana pepper oil'.");


// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let sandwichCost = decimalate(prices.sandwich);

// TODO: Convert order information from Strings to Arrays.

let meatArray = meatString.split(',');
let toppingArray = toppingString.split(',');
let condimentArray = condimentString.split(',');

// TODO: Calculate cost for meat, toppings, and condiments.
// This requires you to determine the length of each Array you just made
// and multiply out the costs. You will need to refer to the attributes of the
// `prices` object in order to calculate these costs.

let meatCost = decimalate(meatArray.length * prices.meat);
let toppingCost = decimalate(toppingArray.length * prices.topping);
let condimentCost = decimalate(condimentArray.length * prices.condiment);

// TODO: Combine the costs of each part of the sandwich to get the subtotal.
let subTotal = decimalate(sandwichCost + meatCost + toppingCost + condimentCost);

// TODO: Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = decimalate(subTotal * waStateTaxRate);

// TODO: Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = decimalate(subTotal + orderTax);

// Step Three //////////////////////////////////////////////////////////
//
// TODO: Now that we've calculated all the values, insert them into this
// template literal using proper expression tags. Note that we must provide
// all of the info the user gave us to confirm the order, and then we must also
// provide the cost information so the user understands their bill.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meatArray}</p>
    <p>Toppings: ${toppingArray}</p>
    <p>Condiments: ${condimentArray}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${sandwichCost}</p>
    <p class="text-right">Meat: $${meatCost}</p>
    <p class="text-right">Toppings: $${toppingCost}</p>
    <p class="text-right">Condiments: $${condimentCost}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subTotal}</p>
    <p class="text-right">Tax: $${orderTax}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
