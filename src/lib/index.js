import vuePagesS from './vue-pages-s.vue' // 导入组件 
const vuePages = { 
    install (Vue, options) { 
        Vue.component('vue-pages-s', vuePagesS) // vuePayKeyboard.name 组件的name属性 
        // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已  
        // Vue.prototype.$xxx // 最终可以在任何地方通过 this.$xxx 调用 
        // 虽然没有明确规定用$开头 但是大家都默认遵守这个规定 
    }
} 

// 新增 
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(vuePages); 
}

export default vuePages // 导出..
