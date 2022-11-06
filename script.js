'strict'


const billInput = document.querySelector('.top-input')
const percent = document.querySelectorAll('.percent-num')
const reset = document.querySelector(".reset")
const amount = document.querySelector(".amount-value")
const bottomInput = document.querySelector(".bottom-input")
const total = document.querySelector('.total-value')
const error = document.querySelector(".zero")
const costumPercent = document.querySelector(".custume-input")

const screenWidth = screen.width





// billInput.addEventListener("keypress", (e) => {


//   let num = 8
//   if (billInput.value.length === 8) {

//     e.preventDefault()
//     console.log(10)
//   }


// })




percent.forEach((el) => {


  el.addEventListener("click", () => {

    costumPercent.value = "";

    let totalValue = (parseInt(billInput.value.replace("", "0")) * (parseInt(el.innerHTML.replace("%", "")) / 100))

    let amountValue = ((parseInt(billInput.value.replace("", "0")) * (parseInt(el.innerHTML.replace("%", "")) / 100)) / Number(bottomInput.value))

    if (bottomInput.value === "0" || bottomInput.value === "") {

      error.style.display = "block"
  
      bottomInput.style.border="1px solid #E17457"



      return




    } else {
      error.style.display = "none"
     


      total.innerHTML = `$${(totalValue.toFixed(2))}`;

      amount.innerHTML = `$${(amountValue.toFixed(2))}`

    }



     




  })

})
















costumPercent.addEventListener('input', () => {




  let totalPercent = (Number(billInput.value.replace("", "0")) * (parseInt(costumPercent.value.replace("", "0")) / 100))

  let amountValue = ((parseInt(billInput.value.replace("", "0")) * (parseInt(costumPercent.value.replace("", "0")) / 100) / Math.max(Number(bottomInput.value), 1)))




  if (bottomInput.value === "0" || bottomInput.value === "") {

    error.style.display = "block"
    bottomInput.style.border="1px solid #E17457"

    return





  } else {
    error.style.display = "none"
    bottomInput.style.border="none"


    total.innerHTML = `$${(totalPercent.toFixed(2))}`;

    amount.innerHTML = `$${(amountValue.toFixed(2))}`;

  }






})





reset.addEventListener('click', () => {


  total.innerHTML = `$${(0.00.toFixed(2))}`;

  amount.innerHTML = `$${(0.00.toFixed(2))}`;
  billInput.value = "";
  bottomInput.value = "";
  costumPercent.value = "";

})





bottomInput.addEventListener('input', () => {

  let amountValue = ((parseInt(billInput.value.replace("", "0")) * ((parseInt(costumPercent.value.replace("", "0")) / 100)) / Math.max(Number(bottomInput.value), 1)))

  let totalPercent = (Number(billInput.value.replace("", "0")) * (parseInt(costumPercent.value.replace("", "0")) / 100))


  if (bottomInput.value === "") {
    bottomInput.style.border="1px solid #E17457"

    error.style.display = "block"
    amount.innerHTML = `$${(0.00.toFixed(2))}`;

    total.innerHTML = `$${(0.00.toFixed(2))}`;



  } else {

    amount.innerHTML = `$${(amountValue.toFixed(2))}`;
    total.innerHTML = `$${(totalPercent.toFixed(2))}`;

    error.style.display = "none"

    bottomInput.style.border="none"

  }

})



billInput.addEventListener('input', () => {

  let amountValue = ((parseInt(billInput.value.replace("", "0")) * ((parseInt(costumPercent.value.replace("", "0")) / 100)) / Math.max(Number(bottomInput.value), 1)))

  let totalPercent = (Number(billInput.value.replace("", "0")) * (parseInt(costumPercent.value.replace("", "0")) / 100))
  

  console.log(costumPercent.value!=="")
  
  if(costumPercent.value!==""){


  amount.innerHTML = `$${(amountValue.toFixed(2))}`;
    total.innerHTML = `$${(totalPercent.toFixed(2))}`;

  }else{
    return
  }


})