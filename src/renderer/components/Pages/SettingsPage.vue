<template>
  <div>
    <ContentBlock v-for="(setting, k) in Settings" :key="k" :title="setting.title">
      <SettingItem v-for="(item, k) in setting.items" :key="k"
                   @callback="item.callback" :tag="item.tag"
                   :regexp="item.regexp" :addon-verification="item.addonVerification"
                   :title="item.title" :detail="item.detail" :type="item.type" :default-val="item.defaultVal"/>
    </ContentBlock>
    <ContentBlock title="关于">
      Todo
    </ContentBlock>
  </div>
</template>

<script>
const {app} = require('electron').remote
import ContentBlock from "../ContentBlock";
import SettingItem from "./SettingsPage/SettingItem";

export default {
  name: "SettingsPage",
  components: {SettingItem, ContentBlock},
  data() {
    return {
      Settings: [
        {
          title: '软件设置',
          items: [
            {
              title: '开机自启动',
              tag: 'openAtBoot',
              detail: '登录到系统时自动开启守护',
              type: 'checkbox',
              defaultVal: app.getLoginItemSettings().openAtLogin,
              callback: this.callbackHandler,
            },
            {
              title: '自动更新',
              tag: 'autoUpdate',
              detail: '软件启动时自动检查新版本，并自动下载安装',
              type: 'checkbox',
              defaultVal: true,
              callback: this.callbackHandler,
            }
          ]
        },
        {
          title: '守护设置',
          items: [
            {
              title: '拉起进程延时',
              tag: 'pullUpDelay',
              detail: '受监控进程异常停止后，重新拉起进程之前的延时(秒)',
              type: 'input',
              defaultVal: 3,
              regexp: /^(0|[1-9][0-9]*)$/,
              addonVerification: (val) => {
                val = Number.parseInt(val)
                let res = {
                  pass: true,
                  tip: null
                }
                if (val > 60) {
                  res.pass = false;
                  res.tip = '值必须小于60'
                }
                if (val < 0) {
                  res.pass = false;
                  res.tip = '值必须大于0'
                }
                return res
              },
              callback: this.callbackHandler,
            },
            {
              title: '进程检查频率',
              tag: 'checkFreq',
              detail: '检查进程是否存活的时间间隔(秒)',
              type: 'input',
              defaultVal: 60,
              callback: this.callbackHandler,
            }
          ]
        }
      ]
    }
  },
  methods: {
    callbackHandler: (value) => {
      console.log(value);
    }
  }
}
</script>

<style scoped>

</style>