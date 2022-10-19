// fetch() method is used 
// This will return promise 
// Promise (JS) will either fullfilled or rejected .

fetch("https://data.police.uk/api/crime-categories?date=2011-08").then((data)=>{
    console.log(data);
    // convert the data into  JS object 
    return data.json();
    // pass the data to check in the console, assuming the promise has fullfilled
}).then((getData)=> {
    console.log(getData[1].name);
    document.getElementById("dispaly").innerText = getData[1].name;
});