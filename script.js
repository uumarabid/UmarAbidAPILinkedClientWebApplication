// fetch() method is used 
// This will return promise 
// Promise (JS) will either fullfilled or rejected .

fetch("https://data.police.uk/api/crime-categories?date=2011-08").then((data)=>{
    console.log(data);
})