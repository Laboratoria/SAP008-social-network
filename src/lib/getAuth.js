// aqui exportaras las funciones que necesites

  const nameUser = document.getElementById("input-name")
  const nameProfile = document.getElementById("profile-name")
  const email = document.getElementById ("input-email-registration")
  const password = document.getElementById ("password")

  //
    getAuth()
    console.log(getAuth)
    .createUser({
      email: email.value,
      password: password,
      displayName: nameProfile,
      disabled: false,
    })
    .then(() => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord.uid);
    })
    .catch((error) => {
      console.log('Error creating new user:', error);
    });
  console.log(createUser)
      
  
    console.log(container)
    return container
  //}