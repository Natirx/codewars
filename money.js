function calculateYears(principal, interest, tax, desired) {
   var year = 0;
   var currentInterest = principal * interest;
   var currentTax = currentInterest * tax;
   while (principal < desired){
    principal = principal + currentInterest - currentTax;
    year++;
    console.log("afret:"+year);
    console.log(principal);
   }
   console.log(principal);
   console.log(year);
}
calculateYears(1000,0.01625,0.18,1200);