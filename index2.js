
document.getElementById("click").addEventListener("click", function(){

    axios.get('http://api.bryanuniversity.edu/ursula1/list/11c15c28-bb28-4ea6-be1f-e42156bb52b7')
    .then(response => {
        console.log(response.data)
       h1.textContent = response.data[i].name
        document.body.appendChild(h1)
     }
    )
    
    .catch(error => (error))  
    
})
