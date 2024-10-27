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

    /*let conf = {
      headers: {
        'x-api-key': ''
      },
    };*/

    config.method = 'get'
    config.url = '/dev/test'
    config.headers = {
      'Access-Control-Allow-Origin' : '*',
      'x-api-key': ''
    }
    console.log(config)
    return axios.request(config)
      .then((res) => {
        return res
      })
      .catch(error => { throw error })
    } 
}

