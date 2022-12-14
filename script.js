// fetch() method is used
// This will return promise
// Promise (JS) will either fullfilled or rejected .
// https://data.police.uk/docs/method/crime-categories/

// originally adopted from link below but refactored.
// https://www.youtube.com/watch?v=m_vL25vzpiE&list=LL&index=11&t=1191s&ab_channel=StepbyStep

let globalData = null;
fetch("https://data.police.uk/api/crime-categories?date=2011-08")
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
    globalData = getData;
    loadData(getData);
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
       <div class="col-lg-4 col-sm-6 col-md-4 col-xs-2 mb-3 sizeFix">
        <div class="bg-body rounded mx-1 shadow p-4 list">
            <h3>${values.name}</h3>
            <a href="${values.url}">${values.url}</a>
         </div>
       </div>
       `;
  });

  // display on the browser
  document.getElementById("dispaly").innerHTML = data;
}
