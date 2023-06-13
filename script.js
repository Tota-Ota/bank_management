const newAccountBtn = document.getElementById('new-account-btn');
const accountForm = document.getElementById('account-form');
const accountList = document.getElementById('account-list');
const newAccountForm = document.getElementById('new-account-form');

let users = [];

newAccountBtn.addEventListener('click', function() {
  accountForm.style.display = 'block';
});

newAccountForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const accountNumber = document.getElementById('account-number').value;
  const balance = document.getElementById('balance').value;
  const dob = document.getElementById('dob').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  const user = {
    firstName: firstName,
    lastName: lastName,
    accountNumber: accountNumber,
    balance: balance,
    dob: dob,
    phone: phone,
    address: address
  };

  users.push(user);

  displayAccounts();

  newAccountForm.reset();
  accountForm.style.display = 'none';
});

function displayAccounts() {
  accountList.innerHTML = '';

  for (let i = 0; i < users.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>Name: ${users[i].firstName} ${users[i].lastName}</span>
      <span>Account Number: ${users[i].accountNumber}</span>
      <span>Balance: ${users[i].balance}</span>
      <span>DOB: ${users[i].dob}</span>
      <span>Phone: ${users[i].phone}</span>
      <span>Address: ${users[i].address}</span>
      <button class="edit-btn" onclick="editAccount(${i})">Edit</button>
      <button class="delete-btn" onclick="deleteAccount(${i})">Delete</button>
    `;
    accountList.appendChild(listItem);
  }
}

function editAccount(index) {
  const user = users[index];
  const { firstName, lastName, accountNumber, balance, dob, phone, address } = user;

  document.getElementById('first-name').value = firstName;
  document.getElementById('last-name').value = lastName;
  document.getElementById('account-number').value = accountNumber;
  document.getElementById('balance').value = balance;
  document.getElementById('dob').value = dob;
  document.getElementById('phone').value = phone;
  document.getElementById('address').value = address;

  users.splice(index, 1);
  displayAccounts();
  accountForm.style.display = 'block';
}

function deleteAccount(index) {
  users.splice(index, 1);
  displayAccounts();
}
