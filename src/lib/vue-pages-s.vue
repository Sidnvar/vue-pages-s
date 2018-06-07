<template>
    <div class="vue-pages-s" id="vue-pages-s">
        <ul>
            <li @click="pageEvent(1)">首页</li>
            <li @click="pageEvent(pageNo - 1)" :class="{'disabled': pageNo == 1}">上一页</li>
            <li v-for="(item,index) in _pageNoArr" v-if="typeof item !== 'undefined' && item <= _count" :key="index" @click="pageEvent(item)" :class="{'ative': pageNo == item}">{{item}}</li>
            <li @click="pageEvent(pageNo + 1)" :class="{'disabled': pageNo == _count}">下一页</li>
            <li @click="pageEvent(_count)" :class="{'disabled': pageNo == _count}">末页</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'vue-pages-s',
    props: ['total', 'pageNo', 'count', 'pageCount', 'pageShow'],
    data(){
        return{
            _count: 1,
            _deviation: 0,
            _pageNoArr: []
        }
    },
    methods:{
        pageEvent(pageNo){
            if(pageNo < 1 || pageNo > this._count){
                return false
            }

            this.$emit('spageEvent', pageNo)
        },
        // 计算页数
        calPageCount(){
            if(typeof this.total == 'undefined' || this.total > 0){
                this.count = Math.ceil(this.total / this.pageCount);
            }

            return this.count
        },
        createPage(){
            debugger
            this._pageNoArr = [];

            // page enough
            let showNum = Math.ceil((this.pageShow - 1) / 2)
            let start = this.pageNo - (this.pageShow - Math.ceil(showNum)) + 1
            let end = this.pageNo +  Math.ceil(showNum)

            // page not enough
            let notEnoughFun = () => {
                start = 1
                end = this.pageShow
            }

            // page too much
            let tooMuchFun = () => {
                start = this._count - 4;
                end = this._count
            }
          
            if(end > this._count){
                tooMuchFun()
            }

            if(start < 1){
                notEnoughFun()
            }

            for(let i = start; i <= end; i++){
                this.$set(this._pageNoArr, i, i)
            }

        }
    },
    created(){
        this._count = this.calPageCount();
        this.createPage();
    },
    watch:{
        'pageNo': function (newQuestion, oldQuestion) {
            this.createPage()
        }
    }
}
</script>

<style>
    .vue-pages-s ul li {
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #eee;
        padding: 6px;
        font-size: 12px;
    }
    .vue-pages-s ul li:hover, .vue-pages-s ul li.ative{
        background: blue;
        color: white;
        cursor: pointer;
    }
    .vue-pages-s ul li.disabled{
        background: #eee;
        color: #666;
        cursor: not-allowed;
    }
</style>
