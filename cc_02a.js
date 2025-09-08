//Variables 
const productName = "Lululemon Leggings";
let costPerUnit = 12;
let basePrice = 98;
let discountRate = 0.10;
let salesTaxRate = 0.06;
let fixedMonthlyCosts = 10000; //rent, utilities, platform fees

// Calculations
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnit = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0; //boolean


//Print to Console
console.log(
    `The Product Name = \ ${productName} \n
    The Discounted Price (before tax) =\ ${discountedPrice} \n
    The Final Price with Tax =\ ${finalPriceWithTax} \n
    The Profit Per Unit =\ ${profitPerUnit} \n
    The Break-even units (integer) =\ ${breakEvenUnit} \n
    The Per-unit Profitability (true/false) =\ ${isProfitablePerUnit}
    `)