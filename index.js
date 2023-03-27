
//Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email
const email = prompt('Zadejte svuj e-mail:');

//Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
const atIndex = email.indexOf('@');

//Pomocí metody slice vyřízněte z e-mailu první část představující jméno a příjmení uživatele.
console.log(email.slice(0, atIndex));

//Dále z e-mailu vyřízněte název domény tedy například gmail.com.
console.log(email.slice(atIndex + 1));

//Ze získaných informací vytvořte objekt
const userEmail = {
  userName: email.slice(0, atIndex),
  domain: email.slice(atIndex + 0),
};

const { userName, domain } = userEmail;
document.body.innerHTML += `
E-mail: ${userName} ${domain}
`









// Reseni original
// const email = prompt('Zadejte e-mail:');
// const atIndex = email.indexOf('@');
// const parsedEmail = {
//   userName: email.slice(0, atIndex),
//   domain: email.slice(atIndex + 1),
// };
// document.body.innerHTML =
//   '<p>Uživatelské jméno: ' + parsedEmail.userName + '</p>';
// document.body.innerHTML += '<p>Doména: ' + parsedEmail.domain + '</p>';
