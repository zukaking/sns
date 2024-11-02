import axios from 'axios'

const headers = {}
headers['Content-type'] = 'application/json'

const config = {
  method: null,
  baseURL: 'https://4c1q1yaqr3.execute-api.ap-northeast-1.amazonaws.com',
  headers,
  data: null
}


export default {
  
  detect_face_lambda: () => {

    config.method = 'get'
    config.url = '/dev/test'
    config.headers = {
      'x-api-key': process.env.VUE_APP_API_KEY
    }
    return axios.request(config)
      .then((res) => {
        console.log(res)
        return res
      })
      .catch(error => { throw error })
    } 
}

