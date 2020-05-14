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
                { path: '/form2', component: page('nav1/Form'), name: '提交表格' },
                { path: '/User', component: page('nav1/User'), name: 'User' }]
        },
        {
            path: '/Head',
            component: Home,
            name: '导航二',
            iconCls: 'el-icon-cpu',//图标样式class
            children: [
                { path: '/form3', component: page('nav2/Form'), name: 'Form3' }
            ]
        },
        {
            path: '/Head2',
            component: Home,
            name: '导航三',
            iconCls: 'el-icon-message',//图标样式class
            children: [
                { path: '/User', component: page('nav1/User'), name: 'User' }
            ]
        },
        {
            path: '/Head3',
            component: Home,
            name: '导航四',
            iconCls: 'el-icon-message',//图标样式class
            children: [
                { path: '/form3', component: page('nav2/Form'), name: 'Form3' }
            ]
        },
        {
            path: '/Head4',
            component: Home,
            name: '导航五',
            iconCls: 'el-icon-message',//图标样式class
            children: [
                { path: '/form3', component: page('nav2/Form'), name: 'Form3' }
            ]
        },
        {
            path: '*',
            hidden: true,
            redirect: { path: '/404' }  //重定向
        }
    ]
})
