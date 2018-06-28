// components/icon-title/icon-title.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        classifies:{
            type: Array,
            value: [{
                title: "用户中心",
                openType: 'switchTab',
                src: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                url: "/pages/user/user"
            },{
                title: "test",
                src: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                url: "/pages/test/test"
            },{
                title: "redirect",
                src: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                url: "http://www.baidu.com"
            },{
                title: "标题",
                src: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                url: "/pages/index/index"
            },{
                title: "标题",
                src: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                url: "/pages/index/index"
            },{
                title: "标题",
                src: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
                url: "/pages/index/index"
            }]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {}
});
