/*//1.Json iterate using loop: 
let keys=['Tamil','Varman','Raj','Vel','Muthu Pandi']
let values=[1,2,3,4,5]
let person={}
for(let i=0; i<keys.length;i++)
{
    person[keys[i]]=values[i]
}
console.log(person);

//Json iterate using for in:
const data={
    name:'Tamil',
    age :24,
    Education :'Mca'
}
for(let keys in data)
{
 console.log(keys+":" ,data[keys])
}

//Json iterate using foreach:
let fav=['video','book','java','year'];
let items=['play','reader','script',2000];
let solution={}
fav.forEach((fav,i)=>{
    solution[fav]=items[i]
});
console.log(solution);

//JSON ITERAITON USING FOR OF
let cars={'ford':1,'toyota':2,'honda':3,'volkswagen':'fav'}
let k= Object.keys(cars)
for(let i of k)
{
    console.log(`${i} : ${cars[i]}`);
}*/

//2.Json format Resume:
let resume={ 
    name         :'Tamilselvan Selvaraj',
    DOB          : '04.06.1999',
    gender       :'male',
    nationality  :'Indian',
    maried_status:'single',
    languages_known:['tamil','english'],
    degree        :'Mca',
    university_board:'Bharathidasan University',
    percentage_CGPA : '81%',
    year_of_passing :2021,
}
console.log(resume);
