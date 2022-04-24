// TODO
// * Make sure to print the messages in the good order
// * Feel free to change the showUserInformation if you want or to change the main but the function need to be call before the console in the main

function showUserInformations(informations) {
  setTimeout(function () {
    console.log("Ceci est mon premier message");
  }, 5000);
}

function main() {
  const userInformations = {
    number: "03445929",
    firstName: "Pierre",
    adress: "12 temple bar street upper",
    lastName: "Smith",
  };

  showUserInformations(userInformations);

  console.log("Ceci est le dernier message affiché");
}

main();

// & When you have finish this one tell me
