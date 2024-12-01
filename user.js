let cont=document.querySelector("main")

fetch('https://dummyjson.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    let users= data.users;
    users.map(function(user){
        cont.innerHTML+=`
        <div class="user-card">
     <div>${ user.firstName}</div>  
     <div>${ user.lastName}</div> 
       <div>${ user.email}</div> 
        <div>${ user.phone}</div>
       <div>${ user.password}</div> 
        </div>
        `
      
      }) 
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

 
