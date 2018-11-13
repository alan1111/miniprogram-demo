Page({
    onShareAppMessage() {
        return {
            title: '阿丽家米线店',
            path: 'page/menu/index'
        }
    },
    onLoad(options) {
        console.log('options : ', options);
        let _this=this;
        wx.getStorage({key: 'noClearData',
            success:function (res) {
                let storageData = res.data;
                _this.setData({
                    billDatas : storageData
                });
                if (Object.keys(options).length>0) {
                    let data=_this.data.billDatas;
                    let additionalMess = '';
                    if (options.showSize=='true') {
                        additionalMess =  options.size=='true' ? '-大碗' : '-小碗';
                    }
                    if (options.listName != 'yp') {
                        additionalMess += options.hot=='true' ? '-辣' : '-不辣';
                    }
                    if (options.additionalData !='') {
                        additionalMess += options.additionalData
                    }
                    data.unshift({
                        'id': data.length,
                        'listName': options.listName,
                        'name': options.name,
                        'request': `${options.qty}份${additionalMess}`,
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
            }
        });
        wx.getStorage({key: 'hasClear',
            success:function (res) {
                _this.setData({
                    hasClear:res.data
                })
            }
        });
    },
    data: {
        hasClear:0,
        billDatas: [],
    },
    toGq(){
        wx.navigateTo({url: 'gq/gq'})
    },
    toMf(){
        wx.navigateTo({url: 'mf/mf'})
    },
    toYp(){
        wx.navigateTo({url: 'yp/yp'})
    },
    toHistory(){
        wx.navigateTo({url: 'history/history'})
    },
    deleteItem(e) {
        const id = e.currentTarget.id;
        let billDatas = this.data.billDatas;
        let hasClear = 0;
        for (let i = 0, len = billDatas.length; i < len; ++i) {
            if (billDatas[i] && billDatas[i].id == id) {
                billDatas.splice(i,1);
            } else {
                if (billDatas[i] && billDatas[i].clear) {
                    hasClear += parseFloat(billDatas[i].totalMoney);
                }
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
    kindToggle(e) {
        const id = e.currentTarget.id;
        let billDatas = this.data.billDatas;
        let hasClear = 0;
        for (let i = 0, len = billDatas.length; i < len; ++i) {
            if (billDatas[i].id == id) {
                billDatas[i].clear = !billDatas[i].clear;
            }
            if (billDatas[i].clear) {
                hasClear += parseFloat(billDatas[i].totalMoney);
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
            dolor += parseFloat(data.money);
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
                        newBillDatas.unshift(val)
                    } else {
                        clearBillDatas.unshift(val)
                    }
                });
                datas.unshift({
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
            }
        });
    }
})
