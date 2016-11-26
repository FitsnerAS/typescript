
let lat: Number;
let lon: Number;
let map: Object;

navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    fetch('http://api.openweathermap.org/data/2.5/find?&lat=' + lat + '&lon='
        + lon + '&cnt=50&lang=Ru_ru&units=metric&APPID=1a014cc9a9db908fdb5647f07bc8e0e6'
    ).then(function(data) {
        return data.json();
    }).then(function(data) {
        console.log(data.list)
        template(data.list)
    })
    initMap();
});

function initMap(): void {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: lat, lng: lon },
        zoom: 8
    });
}


function template(arr: Object): void {
    for (var i = 0; i < arr.length; i++) {
        $("tbody").append(
            `<tr>
                <td>`+ (i + 1) + `</td>
                <td>`+ arr[i].name + `</td>
                <td>`+ arr[i].main.temp + `</td>
                <td>`+ arr[i].main.pressure + `</td>
                <td>`+ arr[i].wind.speed + `</td>
            </tr>`
        )
    }
}

