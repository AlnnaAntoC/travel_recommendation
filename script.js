// ==============================
// RECOMMENDATION FUNCTIONS
// ==============================

// 🌊 Function 1 — Beach Recommendations
function getBeachRecommendations() {
  const beaches = travelData.beaches || [];
  displayResults(beaches.slice(0, 2));
}

// 🛕 Function 2 — Temple Recommendations
function getTempleRecommendations() {
  const temples = travelData.temples || [];
  displayResults(temples.slice(0, 2));
}

// 🌍 Function 3 — Country Recommendations
function getCountryRecommendations() {
  let cities = [];
  if (travelData.countries) {
    travelData.countries.forEach(country => {
      cities = cities.concat(country.cities);
    });
  }
  displayResults(cities.slice(0, 2));
}

// ==============================
// HELPER FUNCTION TO DISPLAY RESULTS
// ==============================
function displayResults(items) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (items.length === 0) {
    resultsContainer.innerHTML = `<p>No recommendations available.</p>`;
    return;
  }

  items.forEach(item => {
    const card = `
      <div class="card">
        <img src="${item.imageUrl}" alt="${item.name}">
        <div class="card-body">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <button class="visit-btn">Visit</button>
        </div>
      </div>
    `;
    resultsContainer.innerHTML += card;
  });
}
