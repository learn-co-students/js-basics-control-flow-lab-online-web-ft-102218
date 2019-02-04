function scuberGreetingForFeet(num) {
  if (num <= 400) {
    return 'This one is on me!';
  } else if (num > 2500) {
    return 'No can do.';
  } else if (num > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  let result;
  city === 'NYC' ? (result = 'Ok, sounds good.') : (result = 'No go.');
  return result;
}

function switchOnCharmFromTip(tip) {
  let result;
  switch(tip) {
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    case 'thanks for everything':
      result = 'Bye.'
      break;
  }
  return result;
}