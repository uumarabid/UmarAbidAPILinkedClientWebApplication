let policeForces = null;

function fetchPoliceForcesData() {
  fetch("https://data.police.uk/api/forces")
    .then((data) => {
      return data.json();
    })
    .then((policeForcesData) => {
      policeForces = policeForcesData;
      loadPoliceForces(policeForcesData);
    });
}

function loadPoliceForces(getData) {
  let data = "";
  getData?.map((values) => {
    // template literals are used
    data += `
         <div class="col-lg-4 col-sm-6 col-md-4 col-xs-2 mb-3 sizeFix">
          <div class="bg-body rounded mx-1 shadow p-4 list" onclick="loadPoliceForceDetail('${values.id}','${values.name}')"  data-bs-toggle="modal" data-bs-target="#policeForceDetail">
              <h4 class="policeForceHeading">${values.name}</h4>
           </div>
         </div>
         `;
  });

  // display on the browser
  document.getElementById("dispaly").innerHTML = data;
}

function loadPoliceForceDetail(id, name) {
  document.getElementById("policeForceDetailLabel").innerHTML = name;
  fetch(`https://data.police.uk/api/forces/${id}`)
    .then((data) => {
      return data.json();
    })
    .then((policeForceDetail) => {
      // "url", "description", "title"
    });
}

// this method will be called on page load
window.onload = function () {
  fetchPoliceForcesData();
};
