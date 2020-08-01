<template>
  <div>
    <ContentBlock title="软件设置">
      <SettingItem title="开机自启动" detail="登录到系统时自动开启守护" type="checkbox"/>
      <SettingItem title="自动更新" detail="软件启动时自动检查新版本，并自动下载安装" type="checkbox"/>
    </ContentBlock>
    <ContentBlock title="守护设置">
      <SettingItem title="拉起进程延时" detail="受监控进程异常停止后，重新拉起进程之前的延时(秒)" type="input"/>
      <SettingItem title="进程检查频率" detail="检查进程是否存活的时间间隔(秒)" type="input"/>
    </ContentBlock>
    <ContentBlock title="外观设置">
      <SettingItem title="应用主题" detail="没有，也不会有，除非你PR" type="description"/>
    </ContentBlock>
    <ContentBlock title="关于">
      Content block
    </ContentBlock>
    <ContentBlock>
      Content block [with no title]
    </ContentBlock>
  </div>
</template>

<script>
import ContentBlock from "../ContentBlock";
import SettingItem from "./SettingsPage/SettingItem";

export default {
  name: "SettingsPage",
  components: {SettingItem, ContentBlock},
  data() {
    return {
      buf: false,
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>