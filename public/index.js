let rowAppend = document.getElementById('listofthings');
let travelFind = document.getElementById('travellers');
    const travellers = () => {
      fetch ('/api/travellers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        rowAppend.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          let firstDiv = document.createElement('div');
          firstDiv.setAttribute('class', 'col-sm-4 mt-5');
          let secondDiv = document.createElement('div');
          secondDiv.setAttribute('class', 'card');
          secondDiv.style.width = '22rem';
          let thirdDiv = document.createElement('div');
          thirdDiv.setAttribute('class', 'card-body');
          let h2 = document.createElement('h2');
          h2.setAttribute('class', 'text-center');
          let h4First = document.createElement('h4');
          h4First.setAttribute('class', 'card-title');
          let h4Second = document.createElement('h4');
          h4Second.setAttribute('class', 'card-title');
          /* Appending card */
          rowAppend.appendChild(firstDiv);
          firstDiv.appendChild(secondDiv);
          secondDiv.appendChild(thirdDiv);
          thirdDiv.appendChild(h2);
          thirdDiv.appendChild(h4First);
          thirdDiv.appendChild(h4Second);
          const { id, name, email } = data[i];
          if(data[i]) {
            h2.textContent = data[i].id;
            h4First.textContent = "Name: " + data[i].name;
            h4Second.textContent = "E-mail: " + data[i].email;
          } else {
            pTag.textContent = 'Nothing to show';
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }

    travelFind.addEventListener('click', travellers);

    let travelFind1 = document.getElementById('travellers1');
    const travellers1 = () => {
      fetch ('/api/travellers/1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        rowAppend.innerHTML = "";
          let firstDiv = document.createElement('div');
          firstDiv.setAttribute('class', 'col-sm-4 mt-5');
          let secondDiv = document.createElement('div');
          secondDiv.setAttribute('class', 'card');
          secondDiv.style.width = '22rem';
          let thirdDiv = document.createElement('div');
          thirdDiv.setAttribute('class', 'card-body');
          let h2 = document.createElement('h2');
          h2.setAttribute('class', 'text-center');
          let h4First = document.createElement('h4');
          h4First.setAttribute('class', 'card-title');
          let h4Second = document.createElement('h4');
          h4Second.setAttribute('class', 'card-title');
          /* Appending card */
          rowAppend.appendChild(firstDiv);
          firstDiv.appendChild(secondDiv);
          secondDiv.appendChild(thirdDiv);
          thirdDiv.appendChild(h2);
          thirdDiv.appendChild(h4First);
          thirdDiv.appendChild(h4Second);
          const { id, name, email } = data;
          if(data) {
            h2.textContent = data.id;
            h4First.textContent = "Name: " + data.name;
            h4Second.textContent = "E-mail: " + data.email;
          } else {
            pTag.textContent = 'Nothing to show';
          }
      }).catch((error) => {
        console.log(error);
      });
    }
    travelFind1.addEventListener('click', travellers1);

    let travelFind2 = document.getElementById('travellers2');
    const travellers2 = () => {
      fetch ('/api/travellers/2', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        rowAppend.innerHTML = "";
          let firstDiv = document.createElement('div');
          firstDiv.setAttribute('class', 'col-sm-4 mt-5');
          let secondDiv = document.createElement('div');
          secondDiv.setAttribute('class', 'card');
          secondDiv.style.width = '22rem';
          let thirdDiv = document.createElement('div');
          thirdDiv.setAttribute('class', 'card-body');
          let h2 = document.createElement('h2');
          h2.setAttribute('class', 'text-center');
          let h4First = document.createElement('h4');
          h4First.setAttribute('class', 'card-title');
          let h4Second = document.createElement('h4');
          h4Second.setAttribute('class', 'card-title');
          /* Appending card */
          rowAppend.appendChild(firstDiv);
          firstDiv.appendChild(secondDiv);
          secondDiv.appendChild(thirdDiv);
          thirdDiv.appendChild(h2);
          thirdDiv.appendChild(h4First);
          thirdDiv.appendChild(h4Second);
          const { id, name, email } = data;
          if(data) {
            h2.textContent = data.id;
            h4First.textContent = "Name: " + data.name;
            h4Second.textContent = "E-mail: " + data.email;
          } else {
            pTag.textContent = 'Nothing to show';
          }
      }).catch((error) => {
        console.log(error);
      });
    }
    travelFind2.addEventListener('click', travellers2);

    let travelFind3 = document.getElementById('travellers3');
    const travellers3 = () => {
      fetch ('/api/travellers/3', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        rowAppend.innerHTML = "";
          let firstDiv = document.createElement('div');
          firstDiv.setAttribute('class', 'col-sm-4 mt-5');
          let secondDiv = document.createElement('div');
          secondDiv.setAttribute('class', 'card');
          secondDiv.style.width = '22rem';
          let thirdDiv = document.createElement('div');
          thirdDiv.setAttribute('class', 'card-body');
          let h2 = document.createElement('h2');
          h2.setAttribute('class', 'text-center');
          let h4First = document.createElement('h4');
          h4First.setAttribute('class', 'card-title');
          let h4Second = document.createElement('h4');
          h4Second.setAttribute('class', 'card-title');
          /* Appending card */
          rowAppend.appendChild(firstDiv);
          firstDiv.appendChild(secondDiv);
          secondDiv.appendChild(thirdDiv);
          thirdDiv.appendChild(h2);
          thirdDiv.appendChild(h4First);
          thirdDiv.appendChild(h4Second);
          const { id, name, email } = data;
          if(data) {
            h2.textContent = data.id;
            h4First.textContent = "Name: " + data.name;
            h4Second.textContent = "E-mail: " + data.email;
          } else {
            pTag.textContent = 'Nothing to show';
          }
      }).catch((error) => {
        console.log(error);
      });
    }
    travelFind3.addEventListener('click', travellers3);


    /* Locations Front end code  */

    let locationFind = document.getElementById('locations');
    const locations = () => {
      fetch ('/api/locations', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        rowAppend.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          let firstDiv = document.createElement('div');
          firstDiv.setAttribute('class', 'col-sm-4 mt-5');
          let secondDiv = document.createElement('div');
          secondDiv.setAttribute('class', 'card');
          secondDiv.style.width = '22rem';
          let thirdDiv = document.createElement('div');
          thirdDiv.setAttribute('class', 'card-body');
          let h2 = document.createElement('h2');
          h2.setAttribute('class', 'text-center');
          let h4First = document.createElement('h4');
          h4First.setAttribute('class', 'card-title');
          /* Appending card */
          rowAppend.appendChild(firstDiv);
          firstDiv.appendChild(secondDiv);
          secondDiv.appendChild(thirdDiv);
          thirdDiv.appendChild(h2);
          thirdDiv.appendChild(h4First);
          const { id, name, email } = data[i];
          if(data[i]) {
            h2.textContent = data[i].id;
            h4First.textContent = "Name: " + data[i].location_name;
          } else {
            pTag.textContent = 'Nothing to show';
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }

    locationFind.addEventListener('click', locations);

    /* Trips Front end code */

    let tripFind = document.getElementById('trips');
    const trips = () => {
      fetch ('/api/trips', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        rowAppend.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          let firstDiv = document.createElement('div');
          firstDiv.setAttribute('class', 'col-sm-4 mt-5');
          let secondDiv = document.createElement('div');
          secondDiv.setAttribute('class', 'card');
          secondDiv.style.width = '22rem';
          let thirdDiv = document.createElement('div');
          thirdDiv.setAttribute('class', 'card-body');
          let h2 = document.createElement('h2');
          h2.setAttribute('class', 'text-center');
          let h4First = document.createElement('h4');
          h4First.setAttribute('class', 'card-title');
          let h4Second = document.createElement('h4');
          h4Second.setAttribute('class', 'card-title');
          let h4Third = document.createElement('h4');
          h4Third.setAttribute('class', 'card-title');
          let h4Fifth = document.createElement('h4');
          h4Fifth.setAttribute('class', 'card-title');
          /* Appending card */
          rowAppend.appendChild(firstDiv);
          firstDiv.appendChild(secondDiv);
          secondDiv.appendChild(thirdDiv);
          thirdDiv.appendChild(h2);
          thirdDiv.appendChild(h4First);
          thirdDiv.appendChild(h4Second);
          thirdDiv.appendChild(h4Third);
          thirdDiv.appendChild(h4Fifth);
          const { id, name, email } = data[i];
          if(data[i]) {
            h2.textContent = data[i].id;
            h4First.textContent = "Budget: $" + data[i].trip_budget;
            h4Second.textContent = data[i].traveller_amount + " People";
            h4Third.textContent = "Traveller-id: " + data[i].traveller_id;
            h4Fifth.textContent = "Location-id: " + data[i].location_id;
          } else {
            pTag.textContent = 'Nothing to show';
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }
    tripFind.addEventListener('click', trips);
