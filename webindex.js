document.getElementById("click").addEventListener("click", function(){

    axios.get('http://api.bryanuniversity.edu/ursula1/list/')

    .then(response => {
        console.log(response.data)
    for( let i= 0; i<response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)
    }
    })
    .catch(error => (error))  
    
} )
