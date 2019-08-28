<template>
  <div>
    嵌套路由测试
    <nuxt-child></nuxt-child>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: 'Tom', id: 1 }, { name: 'JerrY', id: 2 }])
    }, 1500)
  })
}
export default {
  layout: 'users',
  head: {
    title: '用户列表'
  },
  async asyncData() {
    console.log(process.server)
    // 使用async/await
    const users = await getUsers()
    // return的数据最终会和data的数据合并
    return { users }
  }
}
</script>

<style lang="scss" scoped></style>
