<template>
  <div>
    <ContentBlock blank>
      <div class="list">
        <div class="item" v-for="(item, k) in datalist" :key="k">
          <div class="info">
            <div class="pin" :class="item.status"></div>
            <h1 class="title">{{ item.title }}</h1>
            <p class="path">{{ item.path }}</p>
          </div>
          <div class="action">ab</div>
        </div>
        <div class="item new" @click="$router.push('/monitor-new')">
          <i class="iconfont icon-plus"></i>
          <div class="tip">新建守护</div>
        </div>
      </div>
    </ContentBlock>
  </div>
</template>

<script>
import ContentBlock from "../ContentBlock";

export default {
  name: "MonitorList",
  data() {
    return {
      datalist: [
        {
          title: 'PHP',
          path: 'G:/Code/test/php-fpm.exe',
          status: 'up'
        },
        {
          title: 'Node server',
          path: 'G:/Code/test/node.exe',
          status: 'down'
        },
        {
          title: 'Java',
          path: 'G:/Code/test/java.exe',
          status: 'up'
        },
        {
          title: 'Monitor 4',
          path: 'G:/Code/test/abcdebug.exe',
          status: null
        },
      ]
    }
  },
  components: {ContentBlock}
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list .item {
  display: flex;
  position: relative;
  overflow: hidden;
  width: calc(100% / 2 - 10px);
  height: 135px;
  margin-bottom: 20px;
  padding: 30px;
  background-color: #121212;
  border-radius: 20px;
  transition: .3s ease;
  box-shadow: 0.5rem 0.875rem 2.375rem rgba(0, 0, 0, .36), 0.0625rem 0.1875rem 0.5rem rgba(0, 0, 0, .18);
}

.list .item:hover {
  box-shadow: 0.5rem 0.875rem 2.375rem rgba(0, 0, 0, .48), 0.0625rem 0.1875rem 0.5rem rgba(0, 0, 0, .24);
}

.list .item .info {
  display: flex;
  flex: 3;
  flex-direction: column;
}

.list .item .action {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}

.list .item h1.title {
  font-size: x-large;
  font-weight: bolder;
  color: inherit;
}

.list .item p.path {
  font-size: small;
  font-weight: normal;
  color: inherit;
}

.list .item .pin {
  position: absolute;
  right: -15px;
  top: -15px;
  width: 30px;
  height: 30px;
  background-color: rgba(238, 153, 0, .6);
  transform: rotate(45deg);
}

.list .item .pin.up {
  background-color: rgba(85, 165, 50, .6);
}

.list .item .pin.down {
  background-color: rgba(255, 36, 0, .6);
}

.list .item.new {
  cursor: pointer;
  padding: 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 50px;
  color: rgba(255, 255, 255, .6);
  transition: .3s ease;
}

.list .item.new i.iconfont {
  font-size: 40px;
  color: rgba(255, 255, 255, .6);
}

.list .item.new .tip {
  opacity: 0;
  font-size: 20px;
  transition: .3s ease;
}

.list .item.new:hover {
  color: #c7c7c7;
  padding: 0;
}

.list .item.new:hover .tip {
  opacity: 1;
  margin-top: -5px;
}
</style>