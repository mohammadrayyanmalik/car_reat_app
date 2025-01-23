
const API_LINK="http://localhost:8080/vehicles"

export const getVehicles=()=>{
    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data._embedded.vehicles)
}