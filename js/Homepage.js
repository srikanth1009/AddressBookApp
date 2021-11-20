window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
});

const createInnerHtml = () => {
    if (contactList.length == 0) {
        return;
    }
    const headerHtml = `<tr>
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
        innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="../assets/delete.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="../assets/edit.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
};

let contactList = [{
        _id: 1,
        _name: "Prashanth",
        _phoneNumber: "91 9874563210",
        _address: "yelahanka old town",
        _city: "Bangalore",
        _state: "Karnataka",
        _zip: "560064",
    },
    {
        _id: 2,
        _name: "Yash",
        _phoneNumber: "91 9756678676",
        _address: "Bhuvanahalli",
        _city: "Hassana",
        _state: "Karnataka",
        _zip: "65231",
    },
    {
        _id: 3,
        _name: "Prabhas",
        _phoneNumber: "91 999999999",
        _address: "hyderabad",
        _city: "hyderabad",
        _state: "Telangana",
        _zip: "1234561",
    },
];