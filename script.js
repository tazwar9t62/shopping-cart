 //product 1
 //increasing items number

 document.getElementById("product1Plus").addEventListener("click", function () {
     quantityHandle("product1Number", "product1Price", 1, 1199);
     //removing product1 price from subtotal , tax and total
     updateValue("subtotalAmount", "taxAmount", "totalAmount", 1199);
 })
 //decreasing product1 quantity 
 document.getElementById("product1Minus").addEventListener("click", function () {
     quantityHandle("product1Number", "product1Price", -1, 1199);
     //removing product1 price from subtotal , tax and total
     updateValue("subtotalAmount", "taxAmount", "totalAmount", -1199);
 })

 //removing cart 1
 document.getElementById("product1Remove").addEventListener("click", function () {
     document.getElementById("product1Cart").style.display = "none";
     const numberTest = document.getElementById("product1Number").value;
     const numberFloatTest = parseFloat(numberTest);
     //removing total price for product1 in subtotal , tax and total
     updateValue("subtotalAmount", "taxAmount", "totalAmount", numberFloatTest * -1199);
 })

 //Product 2
 //increasing product2 quantity 
 document.getElementById("product2Plus").addEventListener("click", function () {
     quantityHandle("product2Number", "product2Price", 1, 10);
     //adding product 2 price in subtotal,tax and total
     updateValue("subtotalAmount", "taxAmount", "totalAmount", 10);
 })

 //decreasing product2 quantity 
 document.getElementById("product2Minus").addEventListener("click", function () {
     quantityHandle("product2Number", "product2Price", -1, 10);

     //removing product2 price from subtotal , tax and total
     updateValue("subtotalAmount", "taxAmount", "totalAmount", -10);
 })

 //removing cart 2
 document.getElementById("product2Remove").addEventListener("click", function () {
     document.getElementById("product2Cart").style.display = "none";
     const numberTest2 = document.getElementById("product2Number").value;
     const numberFloatTest2 = parseFloat(numberTest2);
     //removing total price for product2 in subtotal , tax and total
     updateValue("subtotalAmount", "taxAmount", "totalAmount", numberFloatTest2 * -10);
 })

 //Functions
 //Function for updating values
 function updateValue(subTotal, tax, total, value) {
     const inputValue1 = document.getElementById(subTotal).innerText;
     const inputValueFloat1 = parseFloat(inputValue1);
     const total1 = inputValueFloat1 + value;
     document.getElementById(subTotal).innerText = total1.toFixed(2);

     const inputValue2 = document.getElementById(tax).innerText;
     const inputValueFloat2 = parseFloat(inputValue2);
     const total2 = ((5 / 100) * value) + inputValueFloat2;
     document.getElementById(tax).innerText = total2.toFixed(2);

     const inputValue3 = document.getElementById(total).innerText;
     const inputValueFloat3 = parseFloat(inputValue3);
     const total3 = ((5 / 100) * value) + value + inputValueFloat3;
     document.getElementById(total).innerText = total3.toFixed(2);
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