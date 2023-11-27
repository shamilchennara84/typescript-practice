import * as readlineSync from "readline-sync";

function calculateIncomeTax(annualIncome: number): number {
  if (annualIncome <= 250000) {
    return 0;
  } else if (annualIncome <= 500000) {
    return 0.05 * (annualIncome);
  } else if (annualIncome <= 1000000) {
    return  0.2 * (annualIncome)
  } else {
    return  0.3 * (annualIncome) ;
  }
}

function main() {
  console.log("Enter the annual income:");
  const annualIncome = parseFloat(readlineSync.prompt());

  const incomeTax = calculateIncomeTax(annualIncome);
  console.log(`Income tax amount = ${incomeTax.toFixed(2)}`);
}

main();