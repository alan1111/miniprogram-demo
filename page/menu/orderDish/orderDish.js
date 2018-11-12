const app = getApp()

Page({
    onShareAppMessage() {
        return {
            title: '云南过桥米线',
            path: 'page/menu/orderDish/orderDish'
        }
    },
    data: {
        additionalData: '',
        additionalMoney: 0,
        items: [
            {id: '1', name: '豆芽'},
            {id: '2', name: '豆腐皮'},
            {id: '3', name: '青菜'},
            {id: '4', name: '鹌鹑蛋'},
            {id: '5', name: '甜不辣'},
            {id: '6', name: '鱼豆腐'},
            {id: '7', name: '亲亲肠'},
            {id: '8', name: '火腿'},
            {id: '9', name: '鱼丸'},
            {id: '10', name: '牛肉丸'},
            {id: '11', name: '牛百叶'},
            {id: '12', name: '蟹棒'},
            {id: '13', name: '鸡胸肉'},
            {id: '14', name: '鱼皮脆'},
            {id: '15', name: '肥牛'},
            {id: '16', name: '肥羊'},
            {id: '17', name: '鱿鱼'}
        ],
        mfItems: [
            {id: '1', name: '腊汁肉夹馍'},
            {id: '2', name: '加肉一份'},
            {id: '3', name: '香肠'},
            {id: '4', name: '麻花'}
        ],
        qty: 1,
        name: '',
        hot: false,
        size: false,
        showSize: false,
        listName: '',
        money: '',
        totalMoney: ''
    },
    onLoad(options) {
        this.setData({
            name: options.name,
            showSize: options.showSize,
            listName: options.listName,
            money: options.money,
            totalMoney: options.money
        })
    },
    addMenu(e) {
        let id = e.currentTarget.id;
        let addtionalMoney = parseFloat(this.data.additionalMoney);
        let currentMoney = 0;
        if (id > 4) {
            currentMoney += 4;
        } else {
            currentMoney += 3;
        }
        let currentName = this.data.additionalData;
        for (let i = 0, len = this.data.items.length; i < len; ++i) {
            if (this.data.items[i].id == id) {
                currentName += '-' + this.data.items[i].name;
            }
        }
        addtionalMoney += currentMoney;
        let total = parseFloat(this.data.totalMoney) + currentMoney;
        this.setData({
            additionalData: currentName,
            totalMoney: total,
            additionalMoney:addtionalMoney
        })
    },
    mfAddMenu(e) {
        let id = e.currentTarget.id;
        let addtionalMoney = parseFloat(this.data.additionalMoney);
        let currentMoney = 0;
        if (id == 1) {
            currentMoney += 4;
        } else if (id == 2 || id == 4) {
            currentMoney += 2;
        } else {
            currentMoney += 1.5;
        }
        let currentName = this.data.additionalData;
        for (let i = 0, len = this.data.mfItems.length; i < len; ++i) {
            if (this.data.mfItems[i].id == id) {
                currentName += '-' + this.data.mfItems[i].name;
            }
        }
        addtionalMoney += currentMoney;
        let total = parseFloat(this.data.totalMoney) + currentMoney;
        this.setData({
            additionalData: currentName,
            totalMoney: total,
            additionalMoney:addtionalMoney
        })
    },
    formSubmit(e) {
        wx.reLaunch({url: `../index?listName=${this.data.listName}&name=${this.data.name}&hot=${this.data.hot}&size=${this.data.size}&qty=${this.data.qty}&money=${this.data.money}&totalMoney=${this.data.totalMoney}&showSize=${this.data.showSize}&additionalData=${this.data.additionalData}`})
    },

    formReset(e) {
        let _this = this;
        this.setData({
            qty: 1,
            hot: false,
            size: false,
            totalMoney: _this.data.money,
            additionalData:'',
            additionalMoney: 0
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
            currentMoney = currentMoney - 1;
        }
        let additionVal = this.data.additionalMoney;
        let totalVal = currentMoney * this.data.qty + additionVal;
        this.setData({
            money: currentMoney,
            totalMoney: totalVal,
            size: e.detail.value
        })
    },
    addQty() {
        let qty = this.data.qty;
        qty++;
        let additionVal = this.data.additionalMoney;
        let total = parseFloat(this.data.money) * parseFloat(qty) + additionVal;
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
