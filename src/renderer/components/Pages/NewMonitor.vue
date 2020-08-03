<template>
  <div>
    <ContentBlock title="新建守护项目" blank>
      <SettingItem title="显示名称" detail="在守护列表中显示的标题，便于识别" tag="monitorName" type="input"/>
      <SettingItem title="程序路径" detail="目标进程的可执行文件绝对路径" tag="monitorExecPath" type="input"/>
      <SettingItem title="最短运行时间(ms)" detail="如果目标进程启动后在这个时间之前退出，那么守护进程也将退出" tag="minUptime" type="input"/>
      <SettingItem title="异常重启间隔(ms)" detail="如果进程存活时间小于最短运行时间，重新拉起进程的时间间隔" tag="spinRestartDelay" type="input"/>
      <button class="btn">新建守护</button>
    </ContentBlock>
  </div>
</template>

<script>
import ContentBlock from "../ContentBlock";
import SettingItem from "./SettingsPage/SettingItem";

export default {
  name: "NewMonitor",
  components: {SettingItem, ContentBlock},
  mounted() {
    console.warn(this.generateUUID())
  },
  methods: {
    generateUUID: () => {
      let d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }
  }
}
</script>

<style scoped>
.btn {
  border: none;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  padding: 5px 15px;
  background-color: #0e639c;
}

.btn:hover {
  background-color: #1177bb;
}
</style>