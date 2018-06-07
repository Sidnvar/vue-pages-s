# vue-pages-s

> 这是一个vue的翻页组件

## Build Setup

``` bash
# 基于vue2开发的翻页组件 
# 我知道各位最讨厌的是代码冗余
# 所以我把样式这一块留出来大家自己写吧

# 安装依赖
npm i vue-pages-s -s

#名字很难起 索性就在后面多加一个s

# 使用方法 在main.js文件下引入并使用

import vuePagesS from 'vue-pages-s'

Vue.use(vuePagesS)
# 在*.vue文件下使用
<vue-pages-s 
    :total="101" 
    :count="11"
    :pageNo="pageNo" 
    :pageCount="10" 
    :pageShow="5" 
    @spageEvent="pages"></vue-pages-s>
```

可传属性

属性 | 备注
---|---
:total | 数据总条数
:count | 数据总页数(条数页数二选一)
:pageNo | 当前页码
:pageCount | 每页条数
:pageShow | 翻页标签显示个数
@spageEvent | 翻页事件



