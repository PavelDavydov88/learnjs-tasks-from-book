const number = +prompt('Input a number from 0 to 3', '');
switch (number) {
  case 0:
    alert('You input 0');
    break;

  case 1:
    alert('You input 1');
    break;

  case 2:
  case 3:
    alert( 'You input 2 or 3' );
    break;
}