import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/monitor-list',
            name: 'MonitorList',
            component: require('@/components/Pages/MonitorList').default
        },
        {
            path: '/logs',
            name: 'ReviveLogs',
            component: require('@/components/Pages/ReviveLogs').default
        },
        {
            path: '/settings',
            name: 'SettingsPage',
            component: require('@/components/Pages/SettingsPage').default
        },
        {
            path: '/monitor-new',
            name: 'NewMonitor',
            component: require('@/components/Pages/NewMonitor').default
        },
        {
            path: '*',
            redirect: '/monitor-list'
        }
    ]
})
