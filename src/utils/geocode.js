const request=require('request')

const geocode=(address,callback)=>{
const url='https://api.mapbox.com/search/geocode/v6/forward?q='+address+'&access_token=pk.eyJ1IjoiamFsYWoxMjMiLCJhIjoiY21iOXUycXVnMGJudDJpczV5bGs5YTdxcyJ9.bo_6Uf0TtZ0b-ohycBd7KQ&limit=1'
request({url:url,json:true},(error,response)=>{
    if (error) {
        callback('Please connect with internet',undefined);
    } else if (response.body.features.length === 0) {
        callback('Plz provide location',undefined)
    } else {
        const latitude = response.body.features[0].properties.coordinates.latitude
        const longitude = response.body.features[0].properties.coordinates.longitude
        callback(undefined,{
            latitude:latitude,
            longitude:longitude,
            location:response.body.features[0].properties.full_address
        })
    }
})
}

module.exports=geocode