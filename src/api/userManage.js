import request from '@/utils/request'

export default {
  // 注册
  addUser(user) {
    return request({
      url: 'user/add',
      method: 'put',
      data: user
    })
  },
  saveUser(user) {
    if (user.id == null && user.id === undefined) {
      return this.addUser(user)
    }
    return this.updateUser(user)
  },
  updateUser(user) {
    return request({
      url: '/user',
      method: 'put',
      data: user
    })
  }
}
