const btnSend = document.getElementById("register")

btnSend?.addEventListener("click",async () => {
    console.log("enviando peticion....")
    const nombreInput = document.getElementById("nombre")
    const apellidoInput = document.getElementById("apellido")
    const correoInput = document.getElementById("correo")
    const contraseñaInput = document.getElementById("contraseña")



    if (nombreInput.value === "" || apellidoInput.value === "" ||
        correoInput.value === "" || contraseñaInput.value === "") {
            Swal.fire({
                
                title: `Registro fallido
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
    name: nombreInput.value,
    lastName: apellidoInput.value,
    email: correoInput.value,
    password: contraseñaInput.value
}



try {

    const response = await fetch("https://graco-task-list.herokuapp.com/register", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(dataToSend)

    })
            

    console.log(response.status)

    const data = await response.json()
    
    Swal.fire({
                
        title: `Registro Completado
                Entrando.....`,
        color: '#15FBFF' ,
        background: '#fff url(https://pixeljoint.com/files/icons/full/cavebackground_w.gif',
        backdrop:`
        rgba(0,0,123,0.6)
        url("https://i.pinimg.com/originals/12/2d/1c/122d1cb1eaee7e19e9b5b7cec6a751e1.gif")
        no-repeat
        `
        
        
      })
    

    nombreInput.value = ""
    apellidoInput.value = ""
    correoInput.value = ""
    contraseñaInput.value= ""
    

} catch(error) {
    alert(error)
}
})