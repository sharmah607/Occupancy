import axios from "axios";

const OCCUPANCY_API_BASE_URL = "http://localhost:8080/OccupancyIsPost";

class OccupancyService{
    saveOccupancy(occupancy){
        return axios.post(OCCUPANCY_API_BASE_URL, occupancy,{headers:{"Content-Type" : "application/json"}});
    }
}

export default new OccupancyService();