 // Function: View a single car.
 const viewDetail = (event) => {
  const tgt = event.target
  const parentDiv = tgt.parentNode.parentNode.parentNode.id
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

// Function: Close button.
function closeDetail(){
     
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
function flagAdvert(event){
let tgt = event.target
let form = document.querySelector('.viewFform').classList.add('viewForm')
document.querySelector('.viewDform').classList.remove('viewForm')

}

function closeFlag(){
    
    document.querySelector('.viewFform').classList.add('close-modal');

    setTimeout(()=>{
        document.querySelector('.viewFform').classList.remove('viewForm');
        document.querySelector('.viewFform').classList.remove('close-modal');
    },1500)

    (function remInterval(){
    clearTimeout()
})();
}
