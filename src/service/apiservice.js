import axios from 'axios'
import qs from 'qs'

// 解决开发环境下的跨域问题
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = '/dev'
} else {
  axios.defaults.baseURL = 'http://198.13.50.56'
}

function apiUnpack(promise) {
  /** 封装请求，如果http status 为200，则解析code是否200，是则数据正常，否则返回reject
   * 当http status 不为 200， 直接返回reject */
  return promise.then(response => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data.data)
    } else {
      return Promise.reject(response.data)
    }
  }, promise.reject)
}

const ApiService = {
  user: {
    /** 登陆 */
    login(login, password, role = 'user') {
      return apiUnpack(axios.post('/user/login', qs.stringify({login: login, password: password, role: role})))
    },

    /** 注册 */
    register(login, nickname, password, email = '') {
      return apiUnpack(axios.post('/user/register', qs.stringify({
        login: login,
        password: password,
        email: email,
        nickname: nickname
      })))
    },
  },

  post: {
    /** 获取失物招领文章 */
    get_lost_post(page = 1, per_page = 20) {
      return apiUnpack(axios.get('/post', {params: {page: page, per_page: per_page, type: 'lost'}}))
    },

    /** 获取寻物启事文章 */
    get_found_post(page = 1, per_page = 20) {
      return apiUnpack(axios.get('/post', {params: {page: page, per_page: per_page, type: 'found'}}))
    },

    /** 获取寻人启事文章 */
    get_people_post(page = 1, per_page = 20) {
      return apiUnpack(axios.get('/post', {params: {page: page, per_page: per_page, type: 'people'}}))
    },

    /** 获取某文章 */
    get_post(pid) {
      return apiUnpack(axios.get('/post/' + pid))
    },

    /** 删除某文章 */
    delete_post(pid) {
      return apiUnpack(axios.delete('/post/' + pid))
    }
  },

  notice: {
    /** 获取所有公告 */
    get_all_notice(page = 1, per_page = 20) {
      return apiUnpack(axios.get('/notice'))
    },

    /** 获取某公告 */
    get_notice(nid) {
      return apiUnpack(axios.get('/notice' + nid))
    },

    /** 删除某公告 */
    delete_notice(nid) {
      return apiUnpack(axios.delete('/notice/' + nid))
    },

    /** 发布公告 */
    post_notice(title, content) {
      return apiUnpack(axios.post('/notice', {title: title, content: content}))
    }
  }
};

export default ApiService
