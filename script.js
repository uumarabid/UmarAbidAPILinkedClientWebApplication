// fetch() method is used 
// This will return promise 
// Promise (JS) will either fullfilled or rejected .
// https://data.police.uk/docs/method/crime-categories/


fetch("https://data.police.uk/api/crime-categories?date=2011-08").then((data)=>{
    console.log(data);
    // convert the data into  JS object 
    return data.json();
    // pass the data to check in the console, assuming the promise has fullfilled
}).then((getData)=> {
    // test the data to display on the browser
    // console.log(getData[1].name);
    // document.getElementById("dispaly").innerText = getData[1].name;

    let data = "";
    //using the array 
    getData.map((values)=>{
        // template literals are used
       data += `
       <div class="col-md-2 shadow p-4 mb-3 bg-body rounded mx-1">
         <h2>${values.name}</h2>
         <a href=${values.url}>${values.url}</a>
       </div>
       ` 
    });

    // display on the browser
    document.getElementById("dispaly").innerHTML = data

    // error hander
}).catch ((error)=>{
    console.log(error);
})