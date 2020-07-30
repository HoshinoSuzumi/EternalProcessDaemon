<template>
  <div id="toolbar">
    <div id="bar" :class="{'defocus': !toolbarConfig.inFocus}">
      <img id="logo" src="~@/assets/logo.png" alt="Eternal logo">
      <div id="title">{{ toolbarConfig.title }}</div>
      <div id="actions">
        <button @click="windowMinimize" class="action">
          <i class="iconfont" :class="toolbarConfig.btnIcon_minus"></i>
        </button>
        <button @click="windowClose" class="action close">
          <i class="iconfont" :class="toolbarConfig.btnIcon_close"></i>
        </button>
      </div>
    </div>
    <div id="content">
      <slot/>
    </div>
  </div>
</template>

<script>
const {ipcRenderer: ipc} = require('electron');

export default {
  name: "ToolBar",
  data() {
    return {
      toolbarConfig: {
        title: 'Eternal Proc-daemon',
        btnIcon_minus: 'icon-minus',
        btnIcon_close: 'icon-close1',
        inFocus: true
      }
    }
  },
  mounted() {
    ipc.on('window-focus', (e, msg) => {
      this.toolbarConfig.inFocus = msg;
    });
  },
  methods: {
    windowMinimize() {
      ipc.send('window-minimize');
    },
    windowClose() {
      ipc.send('window-close');
    }
  }
}
</script>

<style scoped>
#toolbar {
  height: 100vh;
}

#bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  background-color: #3c3c3c;
  color: #cccccc;
  padding-left: 5px;
  transition: .1s ease;
}

#bar.defocus {
  background-color: #323233;
  color: #979797;
}

#title {
  -webkit-app-region: drag;
  width: 100%;
  text-align: center;
  font-family: 'Source Code Pro', sans-serif;
}

#actions {
  display: flex;
  height: 100%;
}

#actions .action {
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  width: 45px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0);
  color: inherit;
  transition: 0s;
}

#actions .action:hover {
  background-color: #474747;
}

#actions .action.close:hover {
  background-color: #d71526;
}

#logo {
  -webkit-app-region: drag;
  height: 90%;
}

#content {
  margin: auto auto 0 auto;
  width: 100%;
  height: calc(100vh - 30px);
}
</style>