const app = getApp()

Page({
    onShareAppMessage() {
        return {
            title: '小程序官方组件展示',
            path: 'page/component/index'
        }
    },
    onLoad() {
        // this.setData({
        //     hasLogin: app.globalData.hasLogin
        // })
        // const self = this;
        this.setData({
            billDatas: [
                {
                    'id': '0',
                    'name': 'gq',
                    'value': '1-3-4',
                    'money': '6',
                    'clear': false
                },
                {
                    'id': '1',
                    'name': 'mf',
                    'value': '2-5-7',
                    'money': '7',
                    'clear': false
                },
            ]
        })
    },
    data: {
        billDatas: [],
        listData:[
            {"code":"01","text":"text1","type":"type1"},
            {"code":"02","text":"text2","type":"type2"},
            {"code":"03","text":"text3","type":"type3"},
            {"code":"04","text":"text4","type":"type4"},
            {"code":"05","text":"text5","type":"type5"},
            {"code":"06","text":"text6","type":"type6"},
            {"code":"07","text":"text7","type":"type7"}
        ]
    },

    kindToggle(e) {
        const id = e.currentTarget.id
        let billDatas = this.data.billDatas;
        for (let i = 0, len = billDatas.length; i < len; ++i) {
            if (billDatas[i].id === id) {
                billDatas[i].clear = !billDatas[i].clear
            }
        }
        app.globalData.billDatas = billDatas
        this.setData({
            billDatas
        })
    },
    getDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let finalDate = `${year}年${month}月${day}日${h}时${m}分${s}秒`;
        return finalDate;
    },
    getTotalMoney(billDatas) {
        let dolor = 0;
        billDatas.forEach(function (data) {
            dolor += parseInt(data.money);
        });
        return dolor
    },
    clearData() {
        var _this=this;
        // wx.clearStorage
        wx.getStorage({key: 'allMessage',
            success:function (res) {
                let datas = res.data;
                let newBillDatas = [];
                let clearBillDatas = [];
                _this.data.billDatas.forEach(val=>{
                    if (val.clear==false) {
                        newBillDatas.push(val)
                    } else {
                        clearBillDatas.push(val)
                    }
                });
                datas.push({
                    "date": _this.getDate(),
                    "billDatas":clearBillDatas,
                    "total": _this.getTotalMoney(clearBillDatas)
                });

                if (clearBillDatas.length>0) {
                    wx.setStorage({
                        key: 'allMessage',
                        data: datas
                    });
                }
                _this.setData({
                    billDatas : newBillDatas
                })
            },
            fail: function() {
                wx.setStorage({
                    key: 'allMessage',
                    data: []
                });
            }
        });
    }
})
