// FOR EMMA MODAL -------------------------------------------------------
// modal 1 variable to call
var modal1 = document.getElementById("modal1");

// modal 1 open button variable to call
var modal1Btn = document.getElementById("emma");

// closeBtn variable to call
var closeBtn1 = document.getElementById("closeBtn1");

// event listener for modal 1 click/open
modal1Btn.addEventListener('click', openModal1);

// event lsitener to for close btn to close
closeBtn1.addEventListener('click', closeModal1);

// event listener fore click outside modal
window.addEventListener('click', outsideModal1);

// opens modal 1 on screen
function openModal1() {
  modal1.style.display = "block";
}

// hides modal 1 on screen when x button is clicked
function closeModal1() {
  modal1.style.display = "none";
}

// hides modal 1 on screen when there is click outside of modal
function outsideModal1(clickLocation) {
  if (clickLocation.target == modal1) {
    modal1.style.display = "none";
  }
}


// FOR MARI MODAL --------------------------------------------------------
// modal variable to call
var modal2 = document.getElementById("modal2");

// modal open button variable to call
var modal2Btn = document.getElementById("mari");

// closeBtn variable to call
var closeBtn2 = document.getElementById("closeBtn2");

// event listener for modal click/open
modal2Btn.addEventListener('click', openModal2);

// event lsitener to for close btn to close
closeBtn2.addEventListener('click', closeModal2);

// event listener fore click outside modal
window.addEventListener('click', outsideModal2);

// opens modal  on screen
function openModal2() {
  modal2.style.display = "block";
}

// hides modal on screen when x button is clicked
function closeModal2() {
  modal2.style.display = "none";
}

// hides modal on screen when there is click outside of modal
function outsideModal2(clickLocation) {
  if (clickLocation.target == modal2) {
    modal2.style.display = "none";
  }
}