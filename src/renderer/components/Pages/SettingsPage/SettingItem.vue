<template>
  <div class="setting-item">
    <h2 v-if="title">{{ title }}</h2>

    <div v-if="type === 'checkbox'" class="checkbox">
      <label>
        <input v-model="values.checkbox" :id="'checkbox-' + randomId" type="checkbox">
        <label :for="'checkbox-' + randomId">
          <i class="iconfont icon-check checkbox-icon"></i>
        </label>
        <span class="detail">{{ detail || '没有描述' }}</span>
      </label>
    </div>

    <div v-if="type==='input'" class="input-field" :class="{'fallback': !values.input.pass}">
      <p class="detail">{{ detail || '没有描述' }}</p>
      <label>
        <input v-model="values.input.origin" type="text">
      </label>
      <div class="fallback-tip">{{ fallbackTip || '您的输入不合乎规范' }}</div>
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
    title: String,
    detail: String,
    type: String,
    tag: String,
    regexp: RegExp,
    addonVerification: Function
  },
  data() {
    return {
      randomId: '',
      fallbackTip: null,
      values: {
        checkbox: null,
        input: {
          pass: true,
          origin: null,
          verified: null
        },
      }
    }
  },
  mounted() {
    this.randomId = Math.random().toString(36).slice(-8);
  },
  watch: {
    'values': {
      deep: true,
      handler: function (val, oldVal) {
        const inputVal = val.input.origin;
        let callback = {
          tag: this.tag || null,
          type: this.type || null,
          value: null
        }
        if (this.type === 'input') {
          let regexPass, addonPass, finalPass
          regexPass = this.regexp ? this.regexp.test(inputVal) : true
          addonPass = this.addonVerification ? this.addonVerification(inputVal).pass || false : true
          finalPass = regexPass && addonPass
          this.values.input.pass = finalPass
          this.values.input.verified = finalPass ? inputVal : null
          this.fallbackTip = this.addonVerification ? this.addonVerification(inputVal).tip || null : null
          callback.value = this.values.input.verified
        } else if (this.type === 'checkbox') {
          callback.value = val.checkbox
        }
        if (callback.value !== null) this.$emit('callback', callback);
      }
    }
  }
}
</script>

<style scoped>
.setting-item:not(:last-child) {
  margin-bottom: 25px;
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

.setting-item .input-field {
  position: relative;
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

.setting-item .input-field .fallback-tip {
  display: none;
  z-index: 10;
  position: absolute;
  width: 200px;
  margin-top: -1px;
  padding: 3px 5px;
  background-color: #5a1d1d;
  border: #be1100 solid 1px;
  color: #e7e7e7;
  font-weight: 300;
  font-size: small;
  word-wrap: break-word;
}

.setting-item .input-field.fallback .fallback-tip {
  display: block;
}
</style>