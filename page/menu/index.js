Page({
    onShareAppMessage() {
        return {
            title: '阿丽家米线店',
            path: 'page/menu/index'
        }
    },
    onLoad(options) {
        let _this=this;
        wx.getStorage({key: 'noClearData',
            success:function (res) {
                let storageData = res.data;
                _this.setData({
                    billDatas : storageData
                });
                if (Object.keys(options).length>0) {
                    let data=_this.data.billDatas;
                    let sizeMess = options.showSize ? (options.size ? '大碗-' : '小碗-') :'';
                    data.push({
                        'id': data.length,
                        'listName': options.listName,
                        'name': options.name,
                        'request': `${options.qty}份-${sizeMess}${options.hot ? '辣' : '不辣'}`,
                        'totalMoney': options.totalMoney,
                        'clear': false
                    });
                    wx.setStorage({
                        key: 'noClearData',
                        data: data
                    });
                    _this.setData({
                        billDatas:data
                    })
                }
            },
            fail: function() {
                wx.setStorage({
                    key: 'noClearData',
                    data: []
                });
            }
        });
        wx.getStorage({key: 'hasClear',
            success:function (res) {
                _this.setData({
                    hasClear:res.data
                })
            },
            fail: function() {
                wx.setStorage({
                    key: 'hasClear',
                    data: 0
                });
            }
        });
    },
    data: {
        hasClear:0,
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
    toGq(){
        wx.navigateTo({url: 'gq'})
    },
    toMf(){
        wx.navigateTo({url: 'mf'})
    },
    kindToggle(e) {
        const id = e.currentTarget.id;
        let billDatas = this.data.billDatas;
        let hasClear = 0;
        for (let i = 0, len = billDatas.length; i < len; ++i) {
            if (billDatas[i].id == id) {
                billDatas[i].clear = !billDatas[i].clear;
            }
            if (billDatas[i].clear) {
                hasClear += parseInt(billDatas[i].totalMoney);
            }
        }
        wx.setStorage({
            key: 'noClearData',
            data: billDatas
        });
        wx.setStorage({
            key: 'hasClear',
            data: hasClear
        });
        this.setData({
            billDatas : billDatas,
            hasClear:hasClear
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
    putHistory() {
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
                wx.setStorage({
                    key: 'noClearData',
                    data: newBillDatas
                });
                wx.setStorage({
                    key: 'hasClear',
                    data: 0
                });
                _this.setData({
                    billDatas : newBillDatas,
                    hasClear:0
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
