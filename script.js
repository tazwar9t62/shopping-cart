 //product 1
 //increasing items number

 document.getElementById("product1Plus").addEventListener("click", function () {
     quantityHandle("product1Number", "product1Price", 1, 1199);
     //removing product1 price from subtotal , tax and total
     updateValue();
 })
 //decreasing product1 quantity 
 document.getElementById("product1Minus").addEventListener("click", function () {
     quantityHandle("product1Number", "product1Price", -1, 1199);
     //removing product1 price from subtotal , tax and total
     updateValue();
 })

 //removing cart 1
 document.getElementById("product1Remove").addEventListener("click", function () {
     removeCart("product1Number", "product1Cart");


 })

 //Product 2
 //increasing product2 quantity 
 document.getElementById("product2Plus").addEventListener("click", function () {
     quantityHandle("product2Number", "product2Price", 1, 10);
     //adding product 2 price in subtotal,tax and total
     updateValue();

 })

 //decreasing product2 quantity 
 document.getElementById("product2Minus").addEventListener("click", function () {
     quantityHandle("product2Number", "product2Price", -1, 10);

     //removing product2 price from subtotal , tax and total
     updateValue();

 })

 //removing cart 2
 document.getElementById("product2Remove").addEventListener("click", function () {
     removeCart("product2Number", "product2Cart");

 })

 //Functions
 //Function for updating values
 function updateValue(tax, total) {
     const inputValue1 = document.getElementById("product1Number").value;
     const inputValueFloat1 = parseInt(inputValue1);
     const inputValue2 = document.getElementById("product2Number").value;
     const inputValueFloat2 = parseInt(inputValue2);
     const total1 = (inputValueFloat1 * 1199) + (inputValueFloat2 * 10);
     document.getElementById("subtotalAmount").innerText = total1.toFixed(2);


     const total2 = (5 / 100) * total1;
     document.getElementById("taxAmount").innerText = total2.toFixed(2);


     const total3 = total1 + total2;
     document.getElementById("totalAmount").innerText = total3.toFixed(2);
 }

 //Function for quantity handle
 function quantityHandle(id, id2, IncreaseOrDecrease, productPrice) {
     const number = document.getElementById(id).value;
     const numberFloat = parseFloat(number);

     //Increasing or decreasing the product  quantity
     const totalNumber = numberFloat + IncreaseOrDecrease;
     document.getElementById(id).value = totalNumber;
     if (totalNumber < 0) {
         return document.getElementById(id).value = 0;
     }

     //increasing or decreasing product price
     const priceTotal = totalNumber * productPrice;
     document.getElementById(id2).innerText = priceTotal;
 }

 //function to remove cart
 function removeCart(id, idRemove) {
     document.getElementById(id).value = 0;
     updateValue();
     document.getElementById(idRemove).style.display = "none";
 }