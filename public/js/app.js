const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    messageone.textContent='Loading Please Wait'
    messagetwo.textContent=''
    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            
            messageone.textContent=data.error;
        }
        else{
            
            messageone.textContent=data.location
            messagetwo.textContent=`Temperature is  ${data.forecast.temp} And Feels Like ${data.forecast.realtemp}`
        }
    })
})
   
    
})