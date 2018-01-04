let nb = [];
let note = 0;
let questions = 5;
let questionsTot = questions;

function newCalcul() {
  $('#quest').text('Question ' + (questionsTot - questions + 1) + ' sur ' + questionsTot);

  range = 10000;
  nb[0] = Math.round(Math.random()*range);
  nb[1] = Math.round(Math.random()*range);

  if(nb[0] > nb[1]) {
    operator = '-';
  }
  else {
    operator = '+';
  }

  $('#number1').text(nb[0]);
  $('#number2').text(nb[1]);
  $('#operator').text(operator);
}

function check() {
  if(checkResult()) {
    note++;
  }
  else {
    alert('Mauvaise réponse!');
  }
  questions--;
  if(questions > 0) {
    newCalcul();
  } else {
    $('.btn').attr('disabled', 'True');
    $('#number2').text('');
    $('#operator').text('');
    $('#number1').text(note + ' / ' + questionsTot);
    $('#number1').css('font-size', '100px');
    $('#number1').css('transition', '3s');
  }
}

function checkResult() {
  a = nb[0];
  b = nb[1];
  op = operator;
  rep = $('#ans').val();

  if(op == '+') {
    return rep == a + b;
  }
  else if(op == '-') {
    return rep == a - b;
  }
}

newCalcul();
