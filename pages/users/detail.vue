<template>
  <div>设置详情页-用户id,query传参:{{ $route.params.id }}</div>
</template>

<script>
export default {
  async asyncData({ query, error }) {
    if (query.id) {
      return { user: { name: 'Tom' } }
    }
    await error({ statusCode: 400, message: '请传递用户id' })
  }
}
</script>

<style lang="scss" scoped></style>
