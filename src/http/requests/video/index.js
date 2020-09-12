import axios from "../../axios"

export default {
  getVideos(filters) {
    return axios.get(`videos${filters}`)
  },
  getVideo(id) {
    return axios.get(`videos/${id}`)
  },
}
