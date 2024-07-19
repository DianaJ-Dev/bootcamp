const fs = require('fs');

const data = fs.readFileSync('elements.json', 'utf8');

const jsonData = JSON.parse(data);

const genders = jsonData.map(item => 
    item.gender
)

const result = {}

genders.forEach( gender => {
    const key = gender.toLowerCase().replaceAll('-',''); 
    if(result[key]){
        result[key]++
    }else {
        result[key] = 1;
    }
}

)

console.log(result)



