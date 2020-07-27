<template>
    <div id="drawer">
        <div id="bar">
            <button class="item active">守护列表</button>
            <button class="item">唤醒日志</button>
            <button class="item">守护设置</button>
            <button class="item new">新增守护</button>
        </div>
        <div id="content">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DrawerBar"
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
        transition: .3s ease;
        /*margin: 10px 10px 5px 10px;*/
        /*padding: 15px 0 15px 0;*/
        /*background-color: #0e639c;*/
        /*border-radius: 4px;*/
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
        margin: 0;
        padding: 20px 0 20px 0;
        background-color: #1177bb;
        border-radius: 0;
        font-weight: bolder;
    }

    #content {
        width: 100%;
        height: 100%;
        color: #ffffff;
        padding: 10px
    }
</style>
