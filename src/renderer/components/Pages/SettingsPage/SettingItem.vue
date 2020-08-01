<template>
  <div class="setting-item">
    <h2 v-if="title">{{ title }}</h2>

    <div v-if="type === 'checkbox'" class="checkbox">
      <label>
        <input :id="id || 'checkbox-' + randomId" type="checkbox">
        <label :for="id || 'checkbox-' + randomId">
          <i class="iconfont icon-check checkbox-icon"></i>
        </label>
        <span class="detail">{{ detail || '没有描述' }}</span>
      </label>
    </div>

    <div v-if="type==='input'" class="input-field">
      <p class="detail">{{ detail || '没有描述' }}</p>
      <label>
        <input type="text">
      </label>
    </div>

    <div v-if="type==='description'" class="input-field">
      <p class="detail">{{ detail || '没有描述' }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "SettingItem",
  props: {
    id: String,
    title: String,
    detail: String,
    type: String
  },
  data() {
    return {
      randomId: 'A'
    }
  },
  mounted() {
    this.randomId = Math.random().toString(36).slice(-8);
  },
  watch: {
    'buf': (v) => {

    }
  }
}
</script>

<style scoped>
.setting-item:not(:last-child) {
  margin-bottom: 20px;
}

.setting-item h2 {
  color: #e7e7e7;
  font-weight: 600;
  font-size: small;
}

.setting-item .checkbox span.detail,
.setting-item .input-field p.detail {
  color: #e7e7e7;
  font-weight: 300;
  font-size: small;
}

.setting-item .input-field p.detail {
  margin: 10px 0;
}

.setting-item .checkbox input[type=checkbox] {
  display: none;
}

.setting-item .checkbox input[type=checkbox] + label {
  width: 18px;
  height: 18px;
  top: 4px;
  background-color: #333333;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.setting-item .checkbox input[type=checkbox]:hover + label,
.setting-item .checkbox input[type=checkbox]:checked + label {
  background-color: #3c3c3c;
}

.setting-item .checkbox .checkbox-icon {
  visibility: hidden;
  position: relative;
  bottom: 2px;
}

.setting-item .checkbox input[type=checkbox]:checked + label .checkbox-icon {
  visibility: visible;
}

.setting-item .input-field input[type=text] {
  width: 200px;
  margin: 0;
  padding: 5px;
  outline: none;
  border: #292929 solid 1px;
  background-color: #292929;
  color: #cccccc;
}

.setting-item .input-field input[type=text]:focus {
  border: #007fd4 solid 1px;
}
</style>