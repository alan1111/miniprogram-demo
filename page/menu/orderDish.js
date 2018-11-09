const app = getApp()

Page({
    onShareAppMessage() {
        return {
            title: '云南过桥米线',
            path: 'page/menu/gq'
        }
    },
    data: {
        qty:1,
        name:'',
        hot:false,
        size:false,
        showSize:false,
        listName:'',
        money:'',
        totalMoney:''
    },
    onLoad(options) {
        console.log(options)
        this.setData({
            name: options.name,
            showSize: options.showSize,
            listName: options.listName,
            money: options.money,
            totalMoney: options.money
        })
    },

    formSubmit(e) {
        wx.reLaunch({url: `./index?listName=${this.data.listName}&name=${this.data.name}&hot=${this.data.hot}&size=${this.data.size}&qty=${this.data.qty}&money=${this.data.money}&totalMoney=${this.data.totalMoney}&showSize=${this.data.showSize}`})
    },

    formReset(e) {
        let _this=this;
        this.setData({
            qty: 1,
            hot: false,
            size: false,
            totalMoney: _this.data.money
        })
    },
    hotChange(e) {
        this.setData({
            hot: e.detail.value
        })
    },
    sizeChange(e) {
        let currentMoney = this.data.money;
        if (e.detail.value) {
            currentMoney++
        } else {
            currentMoney = currentMoney-1;
        }
        let totalVal = currentMoney*this.data.qty;
        this.setData({
            money: currentMoney,
            totalMoney:totalVal,
            size: e.detail.value
        })
    },
    addQty() {
        let qty = this.data.qty;
        qty++;
        let total = parseInt(this.data.money) * parseInt(qty);
        this.setData({
            qty: qty,
            totalMoney: total
        });
    },
    orderDish(e) {
        const id = e.currentTarget.id
        let billDatas = this.data.menuData;
        for (let i = 0, len = billDatas.length; i < len; ++i) {
            if (billDatas[i].id === id) {
                billDatas[i].clear = !billDatas[i].clear
            }
        }
        this.setData({
            menuData
        })
    },

})
