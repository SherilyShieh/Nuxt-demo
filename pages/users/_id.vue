<template>
  <div>动态路由-用户id,params传参:{{ $route.params.id }} {{ user.name }}</div>
</template>

<script>
export default {
  async asyncData({ params, $axios, error }) {
    // 注意返回的就是响应数据
    const data = await $axios.$get(`/api/users/${params.id}`)
    if (data.ok) {
      return { user: data.user }
    }
    error({ statusCode: 400, message: 'id有误，查询失败' })
  }
}
</script>

<style lang="scss" scoped></style>
