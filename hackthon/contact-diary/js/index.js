// Write the JavaScript code here to make Contact App functional

const url = "  http://localhost:3000/contacts";


// Code to show the persisted data

function fetchdata(url){const getPromise = axios.get(url);
    let placeholder=document.getElementById('contactData');
     getPromise.then((response) => {
      response.data.forEach(contacts => {
       placeholder.innerHTML +=`
       <tr>
       <td>${contacts.firstName}${contacts.lastName}</td>
       <td>${contacts.email}</td>
       <td>${contacts.contactNo}</td>
       <td>${contacts.jobTitle}</td>
       </tr>
       `
})
});
}
// function sorting() {
//     const newArr = []
//     return fetchData().then(data => {
//       const sortedData = data.sort(); 
//       newArr.push(sortedData)
//     })
//   }
fetchdata(url);