const fs = require('fs');

const data = fs.readFileSync('elements.json', 'utf8');

const jsonData = JSON.parse(data);


const brands = jsonData.reduce((info, brand)=>{

    const brandName = brand.mobile_device_brand
    
    if(!info[brandName]){
        info[brandName] = []
    }

    info[brandName].push(brand)
    return info

},{})
 
console.log(brands)