import axios from 'axios'
let apiUrl = 'http://localhost:3001/graphql'

let ajax = function (url, method, params, fn, errFn) {
  return axios({
    url: url,
    method: method,
    headers: { 'Content-Type': 'application/json' },
    data: params
  }).then((res) => {
    if (res.status) {
      fn(res.data)
    } else {
      if (errFn) {
        errFn(res)
      } else {
        console.log(res)
      }
    }
  }, (error) => {
    if (errFn) {
      errFn(error)
    } else {
      console.log(error)
    }
  })
}

export default {
  public: {
  },
  posts: {
    getPostCates (params, fn) {
      ajax.call(this, apiUrl, 'post', params, fn)
    },
  }
}
