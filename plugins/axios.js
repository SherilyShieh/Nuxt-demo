export default function({ $axios, redirect }) {
  // onRequest为请求拦截器帮助方法
  $axios.onRequest((config) => {
    if (!process.server) {
      config.headers.token = localStorage.getItem("token")
    }
  })
}
