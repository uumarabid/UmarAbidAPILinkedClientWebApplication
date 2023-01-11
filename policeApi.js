let globalData = null;
function fetchPoliceForcesData() {
  fetch("https://data.police.uk/api/forces")
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((policeForcesData) => {
      //console.log(policeForcesData);
      globalData = policeForcesData;
      loadPoliceForces(policeForcesData);
    })
    .catch(() => {
      console.error("There was an error getting the data from Police API");
    });
}

function loadPoliceForces(getData) {
  let data = "";
  getData.map((values) => {
    // template literals are used
    data += `
         <div class="col-lg-4 col-sm-6 col-md-4 col-xs-2 mb-3 sizeFix" tabindex="0">
          <div class="bg-body rounded mx-1 shadow p-4 list" onclick="loadPoliceForceDetail(this, '${values.id}')"
            data-bs-toggle="modal" data-bs-target="#policeForceDetail">
            <h4>${values.name}</h4>
           </div>
         </div>
         `;
  });

  // display on the browser
  document.getElementById("dispaly").innerHTML = data;
}

function loadPoliceForceDetail(id) {
  fetch(`https://data.police.uk/api/forces/${id}`)
    .then((data) => {
      return data.json();
    })
    .then((policeForceDetail) => {
      loadPoliceForcesDetail(policeForceDetail);
    })
    .catch(() => {
      console.error("There was an error getting the data from Police API");
    });
}

function loadPoliceForcesDetail(getData) {
  document.getElementById("policeForceDetailLabel").innerHTML = getData.name;
  document.getElementById("policeTelephone").value = getData.telephone;
  document.getElementById("policeUrl").value = getData.url;
  let data = "";
  getData.engagement_methods.map((values) => {
    data += `
             <div class="col-lg-6 col-sm-12 col-md-6 col-xs-12 mb-3 sizeFix">
              <div class="bg-body rounded mx-1 shadow p-4 list">
                  <b><a href="${values.url ?? ""}" target="_blank">${values.title ?? ""}</a></b>
                  <p>${values.description ?? ""}</p>
               </div>
             </div>
             `;
  });

  // display on the browser
  document.getElementById("forceDetail").innerHTML = data;
}

// Add search feature
const search = () => {
  const value = document.getElementById("searchData").value;
  const getData = globalData.filter((x) => x.name.toLowerCase().includes(value.toLowerCase()));
  loadPoliceForces(getData);
};

// this method will be called on page load
function apiOnLoadEvent() {
  let searchButton = document.getElementById("searchData");
  searchButton.onkeyup = function (evt) {
    search();
  };
  // added this on search to clear the search option when the x button is pressed in search textbox.
  searchButton.onsearch = function (evt) {
    search();
  };

  fetchPoliceForcesData();
}
addLoadEvent(apiOnLoadEvent);
