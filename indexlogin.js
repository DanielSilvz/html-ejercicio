const btnSend = document.getElementById("register")

btnSend?.addEventListener("click",async () => {
    console.log("enviando peticion....")
    const correoInput = document.getElementById("correo")
    const contraseñaInput = document.getElementById("contraseña")



    if (correoInput.value === "" || contraseñaInput.value === "") {
            Swal.fire({
                
                title: `Inicio de seccion fallida
                        Volviendo.....`,
                color: '#4FEEFE' ,
                background: '#fff url(https://pixeljoint.com/files/icons/full/cavebackground_w.gif',
                backdrop:`
                rgba(0,0,123,0.6)
                url("https://i.pinimg.com/originals/12/2d/1c/122d1cb1eaee7e19e9b5b7cec6a751e1.gif")
                no-repeat
                `
                
                
              })
            
        return
    }

const dataToSend = {
    email: correoInput.value,
    password: contraseñaInput.value
}



try {

    const response = await fetch("https://graco-task-list.herokuapp.com/login", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(dataToSend)

    })
            

    const data = await response.json()
    console.log(response.status)


    if (response.status === 200) {
        
        const token = data.token


    Swal.fire({
                
        title: `Inicio de seccion Completada
                Entrando....`,
        color: '#15FBFF' ,
        background: '#fff url(https://pixeljoint.com/files/icons/full/cavebackground_w.gif',
        backdrop:`
                rgba(0,0,123,0.6)
                url("https://i.pinimg.com/originals/12/2d/1c/122d1cb1eaee7e19e9b5b7cec6a751e1.gif")
                no-repeat
                `
      })
      
    correoInput.value = ""
    contraseñaInput.value= ""
    localStorage.setItem('token',token)
    location.href = '/indexTareas.html'

} else {
    Swal.fire({
                
        title: `Inicio de seccion fallida
                Volviendo.....`,
        color: '#4FEEFE' ,
        background: '#fff url(https://pixeljoint.com/files/icons/full/cavebackground_w.gif',
        backdrop:`
        rgba(0,0,123,0.6)
        url("https://i.pinimg.com/originals/12/2d/1c/122d1cb1eaee7e19e9b5b7cec6a751e1.gif")
        no-repeat
        `
        
        
      })
    }

    

} catch(error) {
    alert(error)
}
})