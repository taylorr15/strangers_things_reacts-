fetch('https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'superman27',
      password: 'krypt0n0rbust'
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);

  fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: 'superman27',
        password: 'krypt0n0rbust'
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

    
