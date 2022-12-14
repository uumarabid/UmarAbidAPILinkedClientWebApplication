// fetch() method is used
// This will return promise
// Promise (JS) will either fullfilled or rejected .
// https://data.police.uk/docs/method/crime-categories/

let globalData = null;
fetch("https://api.imgflip.com/get_memes")
  .then((data) => {
    console.log(data);
    // convert the data into  JS object
    return data.json();
    // pass the data to check in the console, assuming the promise has fullfilled
  })
  .then((getData) => {
    // test the data to display on the browser
    // console.log(getData[1].name);
    // document.getElementById("dispaly").innerText = getData[1].name;
    globalData = getData.data.memes;
    loadData(globalData);
    // error hander
  })
  .catch((error) => {
    console.log(error);
  });

function loadData(getData) {
  let data = "";
  getData.map((values) => {
    // template literals are used
    data += `
       <div class="col-lg-6 col-sm-12 col-md-12 col-xs-12 mb-3 sizeFix">
        <div class="bg-body rounded mx-1 shadow p-4 list">
            <h2>${values.name}</h2>
            <img src="${values.url}" alt="${values.name} loading="lazy" style="width: 100%; height: ${values.height}"/>
         </div>
       </div>
       `;
  });

  // display on the browser
  document.getElementById("dispaly").innerHTML = data;

  // add back to top link
  // look at img lazy loading
}
