<template>
    <div id="app">
        <ToolBar>
            <DrawerBar>
                <router-view/>
            </DrawerBar>
        </ToolBar>
    </div>
</template>

<script>
    import DrawerBar from "./components/DrawerBar";
    import ToolBar from "./components/ToolBar";

    export default {
        name: 'eternal-process-daemon',
        components: {ToolBar, DrawerBar}
    }
</script>

<style>

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        height: 100%;
        background-color: #1E1E1E;
    }

    .RGB-ON {
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        color: #fff;
        background-size: 1800% 1800%;
        -webkit-animation: rainbow 15s ease infinite;
        -z-animation: rainbow 15s ease infinite;
        -o-animation: rainbow 15s ease infinite;
        animation: rainbow 15s ease infinite;
    }

    @-webkit-keyframes rainbow {
        0% {
            background-position: 0% 82%
        }
        50% {
            background-position: 100% 19%
        }
        100% {
            background-position: 0% 82%
        }
    }

    @-moz-keyframes rainbow {
        0% {
            background-position: 0% 82%
        }
        50% {
            background-position: 100% 19%
        }
        100% {
            background-position: 0% 82%
        }
    }

    @-o-keyframes rainbow {
        0% {
            background-position: 0% 82%
        }
        50% {
            background-position: 100% 19%
        }
        100% {
            background-position: 0% 82%
        }
    }

    @keyframes rainbow {
        0% {
            background-position: 0% 82%
        }
        50% {
            background-position: 100% 19%
        }
        100% {
            background-position: 0% 82%
        }
    }
</style>
