<template>
  <div class="content">
    <h1 class="title" v-if="title">{{ title }}</h1>
    <div class="block" :class="{'blank': blank}">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",
  props: {
    title: String,
    blank: Boolean
  }
}
</script>

<style scoped>
.content {
  margin: 10px 10px 20px 10px;
}

.content h1.title {
  font-size: 24px;
  font-weight: lighter;
  color: #c7c7c7;
}

.content .block {
  width: 100%;
  padding: 15px 10px;
  margin: 10px 0;
  background-color: #181818;
  color: #cccccc;
}

.content .block.blank {
  padding: 0;
  margin: 10px 0;
  background-color: rgba(0, 0, 0, 0);
}
</style>