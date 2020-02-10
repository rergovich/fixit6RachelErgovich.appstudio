let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vino', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];

let withMarmaduke = Array.from(petNames)
withMarmaduke.push('Marmaduke');

console.log(withMarmaduke);
console.log(petNames);

let withoutDarcy = petNames.shift();

console.log(petNames);

let userOption = prompt('Which of these commands would you like to do?: Remove Vinny, Remove Marty, Add Nancy, Enter Your Name, Find the location of Riley, Find the location of Cindy, See the Marmaduke data')

switch (userOption) {
case 'Remove Vinny':
  let removedVinny = petNames.splice(4,1);
  console.log(`The action taken was: Remove Vinny \nThe remaining data are: \n${petNames}`);
  break;
case 'Remove Marty':
  let removedMarty = petNames.splice(2,1);
  console.log(`The action taken was: Remove Marty \nThe remaining data are: \n${petNames}`);
  break; 
case 'Add Nancy':
  let addNancy = petNames.unshift('Nancy');
  console.log(`The action taken was: Add Nancy \nThe remaining data are: \n${petNames}`);
  break;
case 'Enter Your Name':
  let yourName = prompt('What is your name?');
  let withYourName = petNames.push(yourName);
  console.log(`The action taken was: Enter Your Name \nThe remaining data are: \n${petNames}`);
  break;
case 'Find the location of Riley':
  console.log(`Riley is located at position ${petNames.indexOf('Riley')}`);
  console.log(`The action taken was: Find the location of Riley \nThe remaining data are: \n${petNames}`);
  break;
case 'Find the location of Cindy':
  console.log(`Cindy is located at position ${petNames.indexOf('Cindy')}`);
  console.log(`The action taken was: Find the location of Cindy \nThe remaining data are: \n${petNames}`);
case 'See the Marmaduke data':
  console.log(withMarmaduke);
  console.log(`The action taken was: See the Marmaduke data \nThe remaining data are: \n${petNames}`);
  break;
default:
  alert('You did not correctly enter an option');
  break;
  }

petNames.shift();
console.log(petNames);

petNames.unshift('Barney');
console.log(petNames);

let allPets = Array.from(petNames)
allPets = allPets.push('Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed');

console.log(allPets);
console.log(petNames);

let stringPets = petNames.join();
console.log(stringPets);

petNames.unshift('Agnes'); 
console.log(petNames)