const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 6
      break;
    case 'Wednesday':
      return 7
      break;
    case 'Thursday':
      return 6
      break;
    case 'Friday':
      return 9
      break;
    case 'Saturday':
      return 10
      break;
    case 'Sunday':
      return 5
      break;
    default: 
      return 'Error!'
  }
}

const getActualSleepHours = () => 
  8 + 
  6 + 
  7 + 
  6 + 
  9 + 
  10 + 
  5;
  

const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(3);
  
  if (actualSleepHours === idealSleepHours) {
      console.log('You achieved the perfect amount of sleep! Congrats!'); 
         } else if (actualSleepHours > idealSleepHours) {
           console.log(`You got more sleep than needed, sleepy head! You slept ${actualSleepHours - idealSleepHours} hours over your ideal weekly amount.`);
          } else if (actualSleepHours < idealSleepHours) {
            console.log(`Go get some rest! You still need ${idealSleepHours - actualSleepHours} more hours of sleep for the week!`);
          } else {
            console.log('Error! Something is amiss.')
          }
};
  
calculateSleepDebt();












