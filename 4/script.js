document.forms.myform.onsubmit = function () {

  if (document.forms.myform.myinput.value === '') {
    alert('empty');
  }
}