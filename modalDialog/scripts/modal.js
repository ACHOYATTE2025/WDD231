const opendialog = document.getElementById('openDialog');
const closemodal = document.getElementById('closeModal');
const textmodal = document.getElementById('textmodal');
opendialog.addEventListener('click',()=>{
  boxDialog.showModal();
  textmodal.innerHTML='<h1>BYE</h1>';

  closemodal.addEventListener('click',()=>{
    boxDialog.close();
  })
})