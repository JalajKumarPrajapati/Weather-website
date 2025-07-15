const request=require('request')

const forecast=(lat,long,callback)=>{
    const url='https://api.weatherstack.com/current?access_key=d48da0f4f98dfb1835b747ab4f22026d&query='+lat+','+long
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Please check internet connection',undefined)
        }else if(body.error){
            callback('Enter correct latitude and longitude')
        }
        else{
            const curtemp=body.current.temperature
      const feeltemp=body.current.feelslike
      callback(undefined,{
        temp:curtemp,
        realtemp:feeltemp
      })
        }
      
    })
}
module.exports=forecast