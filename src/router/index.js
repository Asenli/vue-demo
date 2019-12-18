import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../views/Home.vue'

const page = name => () => import('@/views/' + name)
export default new Router({
    mode: 'history',
    routes: [
        {path: '/login', component: page('Login'), name: '', hidden: true},
        {
            path: '/404',
            component: page('404'),
            name: '',
            hidden: true
        },
        {
            path: '/',
            component: Home,
            name: '导航一',
            iconCls: 'el-icon-message',//图标样式class
            children: [
                { path: '/form', component: page('nav1/Form'), name: 'Form' },
                { path: '/user', component: page('nav1/User'), name: '用户' },
                {path: '/test', component: page('Test'), name: '测试', hidden: false},
            ]
        },
        {
            path: '*',
            hidden: true,
            redirect: { path: '/404' }
        }
    ]
})
