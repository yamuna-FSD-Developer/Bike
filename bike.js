var food = fetch("https://api.citybik.es/v2/networks");
food
.then((res) => res.json())
.then((data) => {
    var container = document.createElement("div");
    container.classList.add("container");

    for (let i = 0; i < data.networks.length; i++) {
        if (i % 3 === 0) {
            var row = document.createElement("div");
            row.classList.add("row");
        }

        var card = document.createElement("div");
        card.classList.add("col-lg-4", "d-flex", "col-sm-12");
        card.innerHTML = `
            <div class="card mb-3" style="width: 18rem;">
                <h5 class="card-title pt-2 text-center">${data.networks[i].name}</h5>
                <div class="card-body text-center">
                    <p class="card-text">Country: ${data.networks[i].location.country}</p>
                    <p class="card-text">Latitude: ${data.networks[i].location.latitude}</p>
                    <p class="card-text">Longitude: ${data.networks[i].location.longitude}</p>
                </div>
            </div>
        `;

        row.appendChild(card);

        if (i % 3 === 2 || i === data.networks.length - 1) {
            container.appendChild(row);
        }
    }

    document.body.append(container);
});
