var inputs = document.getElementsByClassName('text_nor');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = 80;
}
var textarea = document.getElementsByTagName('textarea')[0];
textarea.value = '讲课认真';
document.getElementById('Button1').click();
