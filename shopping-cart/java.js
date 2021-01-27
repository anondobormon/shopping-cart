



const plusSign = document.getElementById("plusIcon");
plusSign.addEventListener("click", function(){ 
    console.log("welcome");
    const mobileInput = document.getElementById("mobileQuantity").value;
    const mobileQty = parseFloat(mobileInput);
    // console.log(mobileQty);
    const totalMobile = mobileQty + 1;
    document.getElementById("mobileQuantity").value = totalMobile;

    const subTotal = document.getElementById("totalTaka").innerText;
    const total = parseFloat(subTotal);
    const mainTotal = total + 1219;
    document.getElementById("totalTaka").innerText = mainTotal;
    
    updateTotalCost("totalAmount", totalMobile);


    
    document.getElementById("taxAmount").innerText = mainTotal * 0.01;
})


// ********minus-btn***********


const minusSign = document.getElementById("minusIcon");
minusSign.addEventListener("click", function(){
    // console.log("welcome");
    const mobileInput = document.getElementById("mobileQuantity").value;
    const mobileQty = parseFloat(mobileInput);
    console.log(mobileQty);
    const totalMobile = mobileQty - 1;
    if(mobileQty <= 0){
        totalMobile = 0;
    }  
    document.getElementById("mobileQuantity").value = totalMobile;

    const subTotal = document.getElementById("totalTaka").innerText;
    const total = parseFloat(subTotal);
    const mainTotal = total - 1219;
    document.getElementById("totalTaka").innerText = mainTotal;
    updateTotalCost("totalAmount", totalMobile);

    document.getElementById("taxAmount").innerText = mainTotal * 0.01;
})

// totalcost***********

function updateTotalCost(id, totalMobile){
    const totalCost = 1219 * totalMobile;
    // console.log(totalCost);
    document.getElementById(id).innerText = totalCost;

}






// ***********mobile case************


const casingPlusSign = document.getElementById("plusButton");
casingPlusSign.addEventListener("click", function(){ 
    console.log("welcome");
    const mobileInput = document.getElementById("casingQuantity").value;
    const mobileQty = parseFloat(mobileInput);
    // console.log(mobileQty);
    const totalMobile = mobileQty + 1;
    document.getElementById("casingQuantity").value = totalMobile; 

    const subTotal = document.getElementById("totalTaka").innerText;
    const total = parseFloat(subTotal);
    const mainTotal = total + 59;
    document.getElementById("totalTaka").innerText = mainTotal;

    casingTotalCost("casingAmount", totalMobile);
    document.getElementById("taxAmount").innerText = mainTotal * 0.01;
})

const casingMinusSign = document.getElementById("minusButton");
casingMinusSign.addEventListener("click", function(){
    console.log("welcome");
    const casingInput = document.getElementById("casingQuantity").value;
    const casingQty = parseFloat(casingInput);
    const totalMobile = casingQty - 1;
    if(casingQty <= 0){
        totalMobile = 0;
    }
    document.getElementById("casingQuantity").value = totalMobile;

    const subTotal = document.getElementById("totalTaka").innerText;
    const total = parseFloat(subTotal);
    const mainTotal = total - 59;
    document.getElementById("totalTaka").innerText = mainTotal;
    casingTotalCost("casingAmount", totalMobile);
    document.getElementById("taxAmount").innerText = mainTotal * 0.01;
})



function casingTotalCost(id, totalMobile){
    const totalCosting = 59 * totalMobile;
    // console.log(totalCost);
    document.getElementById(id).innerText = totalCosting;

}




