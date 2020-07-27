<template>
    <div id="toolbar">
        <div id="bar">
            <img id="logo" src="~@/assets/logo.png" alt="Eternal logo">
            <div id="title">Eternal Proc-daemon</div>
            <div id="actions">
                <button class="action">M</button>
                <button class="action">M</button>
                <button class="action close">C</button>
            </div>
        </div>
        <div id="content">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToolBar"
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
        background-color: #323233;
        -webkit-app-region: drag;
        color: #ffffff;
        padding-left: 5px;
    }

    #title {
        font-family: 'Source Code Pro', sans-serif;
    }

    #actions {
        display: flex;
    }

    #actions .action {
        border: none;
        outline: none;
        margin: 0;
        padding: 0;
        width: 45px;
        height: 30px;
        background-color: #474747;
        color: #ffffff;
    }

    #actions .action:hover {
        background-color: #ffffff;
    }

    /*#actions .action.close:hover {*/
    /*    background-color: #ff2400;*/
    /*}*/

    #logo {
        height: 90%;
    }

    #content {
        margin: auto auto 0 auto;
        width: 100%;
        height: calc(100vh - 30px);
    }
</style>