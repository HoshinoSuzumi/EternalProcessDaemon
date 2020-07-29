<template>
  <div id="drawer">
    <div id="bar">
      <button v-for="(item, k) in $store.state.DrawerItems.items" :key="k"
              class="item" :class="{'active': item.path === $route.path}"
              @click="switchToPath(item.path)">
        <i class="iconfont" :class="item.icon"></i>&nbsp;{{ item.title }}
      </button>
    </div>
    <div id="content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrawerBar",
  methods: {
    switchToPath(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
#drawer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

#bar {
  width: 25%;
  height: 100%;
  background-color: #252525;
  display: flex;
  flex-direction: column;
}

#bar .item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  transition: .1s ease;
  margin: 0;
  padding: 20px 0 20px 0;
  background-color: #323233;
  border-radius: 0;
  font-weight: normal;
}

#bar .item:hover {
  background-color: #424242;
}

#bar .item.active {
  background-color: #1177bb;
  font-weight: bolder;
}

#content {
  width: 100%;
  height: 100%;
  color: #ffffff;
  padding: 10px
}
</style>
