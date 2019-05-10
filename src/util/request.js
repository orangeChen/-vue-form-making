import axios from 'axios'


// window.userInfo = {
//   id:"f5f49ee557cbf21a0157cc02dee60006",
//   token:"40e08d60-cbcd-4d3b-bfdd-fe150ba1fb28",
//   userName:'dszxhr',
//   deviceId:'1111111'
// }


// window.http = axios

// axios.interceptors.request.use(
//   config => {
//     if (!config.headers['Authorization']) {
//       let localtoken = userInfo.token
//       let loginNameCookie = userInfo.userName
//       let deviceIdCookie = userInfo.deviceId
  
//       if (localtoken){
//         config.headers['Authorization'] = `Bearer ${localtoken}`
//         config.headers["loginName"] = loginNameCookie;
//         config.headers["deviceId"] = deviceIdCookie;
//         config.headers["deviceType"] = "web";
//       }
//     }
//     console.log(config)
//     return config
//   },
//   error => {
//     // console.log('error', error)
//     return Promise.reject(new Error(error).message)
//   }
// )

// axios.interceptors.response.use(
//   response => {
//     // console.log('.....', response)
//     return response.data
//   },
//   error => {
//     // console.log('error', error)
//     return Promise.reject(new Error(error).message)
//   }
// )

// export default axios
