// Variable declaration
const makes = document.querySelector('#makes');
const models = document.querySelector('#models');

// Add event for manufacturer models
makes.addEventListener('change', (event) => {
  event.preventDefault();
  const populate = (makes, models) => {
    model.innerHTML = " ";

    if (makes.value === "toyota") {
      var optionsValues = [
        "rav4|RAV4",
        "camry|Camry",
        "4runner|4Runner",
        "matrix|Matrix"
      ];
    } else if (makes.value === 'nissan') {
      var optionsValues = [
        "sentra|Sentra",
        "maxima|Maxima",
        "urvan|Urvan",
        "x-trail|X-Trail"
      ];
    } else if (makes.value === "mercedez-benz") {
      var optionsValues = [
        "c-200|C-200",
        "glk|GLK",
        "clk|CLK",
        "s650|S650"
      ];
    } else if (makes.value !== "nissan"|| makes.value !== "toyota" || makes.value !== 'mercedez-benz') {
      var optionsValues = ["''|Please Select"];
    }
      for (let options in optionsValues) {
        const pair = optionsValues[options].split("|");
        const newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        model.options.add(newOption);
      }
  };
  populate(makes,models);
});

  // Function: View a single car.
  const viewDetail = (event) => {
    const theTarget = event.target
    const parentDiv = theTarget.parentNode.parentNode.parentNode.id
    const price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
    const model = document.querySelector('#' + parentDiv + ' ' + '.model').innerHTML;
    const manufacturer = document.querySelector('#' + parentDiv + ' ' + '.manufacturer').innerHTML;
    const bodyType = document.querySelector('#' + parentDiv + ' ' + '.bodyType').innerHTML;
    const carState = document.querySelector('#' + parentDiv + ' ' + '.carState').innerHTML;
    
    const src = document.querySelector('#' + parentDiv + ' ' + '.f-img').src;
    const form = document.querySelector('.viewDform').classList.add('viewForm')
    const formPrice = document.querySelector('.detail .price').innerHTML = price;
    const formModel = document.querySelector('.detail .model').innerHTML = model;
    const formBody = document.querySelector('.detail .bodyType').innerHTML = bodyType;
    const formState = document.querySelector('.detail .carState').innerHTML = carState;  
    const formManufacturer = document.querySelector('.detail .manufacturer').innerHTML = manufacturer;
    const formImg = document.querySelector('.detail .f-img').src = src;  
    }

// Function: Close AD button.
const closeAD = () => {
       
  document.querySelector('.viewDform').classList.add('close-modal');

  setTimeout(()=>{
      document.querySelector('.viewDform').classList.remove('viewForm');
      document.querySelector('.viewDform').classList.remove('close-modal');
  },1500)

  (function remInterval(){
  clearTimeout()
})();
}

// Function: Flag a car
const flagAD = (event) => {
  let theTarget = event.target
  let form = document.querySelector('.viewFlag').classList.add('viewForm')
  document.querySelector('.viewDform').classList.remove('viewForm')
  
  }

  // clode flag function
  const closeFlagForm = () => {
      
      document.querySelector('.viewFlag').classList.add('close-modal');

      setTimeout(()=>{
          document.querySelector('.viewFlag').classList.remove('viewForm');
          document.querySelector('.viewFlag').classList.remove('close-modal');
      },1500)
  
      (function remInterval(){
      clearTimeout()
  })();
  }

  // Function Buy A Car
  const orderCar = (event) => {
    const theTarget = event.target;
    const parentDiv = theTarget.parentNode.parentNode.parentNode.id;
    const price = document.querySelector('#' + parentDiv + ' ' + '.price').innerHTML;
    const form = document.querySelector('.viewOrder').classList.add('viewForm')
    const formPrice = document.querySelector('.viewOrder #price').value = price;
    }

  // Function to close order modal
  function closeOrder(){
    
    document.querySelector('.viewOrder').classList.add('close-modal');
  
    setTimeout(()=>{
        document.querySelector('.viewOrder').classList.remove('viewForm');
        document.querySelector('.viewOrder').classList.remove('close-modal');
    },1500)

    (function remInterval(){
    clearTimeout()
})();    
}