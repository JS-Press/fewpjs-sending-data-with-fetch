// Add your code here

// function fetchy(){
// fetch('http://localhost:3000/dogs')
// .then (r => r.json())
// .then (j => console.log(j));
// }


function submitData(userName, userEmail){

    const formData = {
        'name': userName,
        'email' : userEmail
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
        .then(function(response) {
          return response.json();
        })
        .then(data => document.body.innerHTML = data.id)
        .catch(obj => document.body.innerHTML = obj.message)


}





document.addEventListener('DOMContentLoaded', () => 
   submitData()
)
