/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Prompt the user for what kind of bread they would like.
let bread = prompt("What kind of bread would you like?");

// Prompt the user for what kind of meat(s) they would like.
let meatString =  prompt("What sorts of meat would you like? You can have more than one, just separate with commas so our meat guy doesn't spend all day looking for 'chicken head cheese'.");

// Prompt the user for what kind of toppings they would like.
let toppingString =  prompt("What sorts of toppings would you like? You can have more than one, just separate with commas so our topping gal doesn't spend all day looking for 'anchovy tomatoes'.");

// Prompt the user for what kind of condiments they would like.
let condimentString =  prompt("What sorts of condiments would you like? You can have more than one, just separate with commas so the condiment folk don't spend all day looking for 'banana pepper oil'.");

// Set base pricing for sandwich and additions
let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// Convert order information from Strings to Arrays.
let meatArray = meatString.split(',');
let toppingArray = toppingString.split(',');
let condimentArray = condimentString.split(',');

// Calculate cost for meat, toppings, and condiments.
// Convert strings to numbers using the unary + operators
// http://xkr.us/articles/javascript/unary-add/)
let sandwichCost = +prices.sandwich.toFixed(2);
let meatCost = (+meatArray.length * +prices.meat).toFixed(2);
let toppingCost = (+toppingArray.length * +prices.topping).toFixed(2);
let condimentCost = (+condimentArray.length * +prices.condiment).toFixed(2);

// Combine the costs of each part of the sandwich to get the subtotal.
let subTotal = (+sandwichCost + +meatCost + +toppingCost + +condimentCost).toFixed(2);

// Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = (+subTotal * +waStateTaxRate).toFixed(2);

// Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = (+subTotal + +orderTax).toFixed(2);

// Calculate gratuity
let okay = (+subTotal * .10).toFixed(2);
let good = (+subTotal * .15).toFixed(2);
let great = (+subTotal * .20).toFixed(2);

// Insert variables created into template literal
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
	<p>---------------------</p>
	GRATUITY:
	<p>Okay (10%): $${okay}</p>
	<p>Good (15%): $${good}</p>
	<p>Great (20%): $${great}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
