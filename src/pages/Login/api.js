import request from "../../utils/request";

// export const saveAccount = (params) => request({url: '/Students', method: 'POST', data: params});

// export const saveAccount = (params) => axios.post('https://ericeric.bsite.net/api/Students', params,{
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

// export const saveAccount = (params) => fetch('https://ericeric.bsite.net/api/Students', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json', 
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
//     },
//     body: JSON.stringify(params)
// })

export const saveAccount = (params) => request({url: '/students.json', method: 'POST', data: params});
export const getAllAccount = () => request({url: '/students.json', method: 'GET'});
