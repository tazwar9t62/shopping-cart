 //product 1
 //increasing items number

 document.getElementById("product1Plus").addEventListener("click", function () {
     quantityHandle("product1Number", "product1Price", 1, 1199);

     //adding product1 price in subtotal
     updateValue("subtotalAmount", 1199);
     //adding tax for product 
     updateValue("taxAmount", 59.95);
     //Adding total 
     updateValue("totalAmount", 1258.95); //1199 + 59.95
 })
 //decreasing items number 
 document.getElementById("product1Minus").addEventListener("click", function () {
     quantityHandle("product1Number", "product1Price", -1, 1199);

     //adding product1 price in subtotal
     updateValue("subtotalAmount", -1199);
     //adding tax for product 
     updateValue("taxAmount", -59.95);
     //Adding total 
     updateValue("totalAmount", -1258.95);


 })

 //removing cart 1
 document.getElementById("product1Remove").addEventListener("click", function () {
     document.getElementById("product1Cart").style.display = "none";
     const numberTest = document.getElementById("product1Number").value;
     const numberFloatTest = parseFloat(numberTest);
     //adding product1 price in subtotal
     updateValue("subtotalAmount", numberFloatTest * -1199);
     //adding tax for product 
     updateValue("taxAmount", numberFloatTest * -59.95);
     //Adding total 
     updateValue("totalAmount", numberFloatTest * -1258.95);

 })

 //Product 2
 //increasing items number

 document.getElementById("product2Plus").addEventListener("click", function () {
     quantityHandle("product2Number", "product2Price", 1, 10);

     //adding product1 price in subtotal
     updateValue("subtotalAmount", 10);
     //adding tax for product 
     updateValue("taxAmount", 0.5);
     //Adding total 
     updateValue("totalAmount", 10.5); //10 + .5
 })
 //decreasing items number 
 document.getElementById("product2Minus").addEventListener("click", function () {
     quantityHandle("product2Number", "product2Price", -1, 10);

     //adding product1 price in subtotal
     updateValue("subtotalAmount", -10);
     //adding tax for product 
     updateValue("taxAmount", -0.5);
     //Adding total 
     updateValue("totalAmount", -10.5);


 })

 //removing cart 2
 document.getElementById("product2Remove").addEventListener("click", function () {
     document.getElementById("product2Cart").style.display = "none";
     const numberTest2 = document.getElementById("product2Number").value;
     const numberFloatTest2 = parseFloat(numberTest2);
     //adding product1 price in subtotal
     updateValue("subtotalAmount", numberFloatTest2 * -10);
     //adding tax for product 
     updateValue("taxAmount", numberFloatTest2 * -0.5);
     //Adding total 
     updateValue("totalAmount", numberFloatTest2 * -10.5);

 })


 //Functions

 //Function for updating values
 function updateValue(id, value) {
     const inputValue = document.getElementById(id).innerText;
     const inputValueFloat = parseFloat(inputValue);
     const total = inputValueFloat + value;
     document.getElementById(id).innerText = total.toFixed(2);
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