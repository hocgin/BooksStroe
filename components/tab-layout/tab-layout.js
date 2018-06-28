// components/tab-layout/tab-layout.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: {
            type: Array,
            value: ["待付款", "待发货", "待收货", "待评价", "售后"]
        }
    },
    // externalClasses: ['tab-scroll','tab-scroll-0'],
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的初始数据
     */
    data: {
        current: 0,
        height: 0
    },
    ready(){
        const that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    height: res.windowHeight
                });
            }
        });
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //滑动切换
        swiperTab(e) {
            const that = this;
            that.setData({
                current: e.detail.current
            });
        },
        //点击切换
        clickTab(e) {
            const that = this;
            if (this.data.current === e.target.dataset.index) {
                return false;
            } else {
                that.setData({
                    current: e.target.dataset.index
                });
            }
        }
    }
});
