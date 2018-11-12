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
        menuData: [
            {
                'id': '0',
                'listName':'gq',
                'name': '混炒',
                'money': '6',
                'showSize':true
            },
            {
                'id': '1',
                'listName':'gq',
                'name': '米皮',
                'money': '6',
                'showSize':true
            },
            {
                'id': '2',
                'listName':'gq',
                'name': '担担面',
                'money': '6',
                'showSize':true
            },
            {
                'id': '3',
                'listName':'gq',
                'name': '凉面皮',
                'money': '6',
                'showSize':true
            },
            {
                'id': '4',
                'listName':'gq',
                'name': '鸡肉米线',
                'money': '7',
                'showSize':true
            },
            {
                'id': '5',
                'listName':'gq',
                'name': '素米线',
                'money': '6',
                'showSize':true
            },
            {
                'id': '6',
                'listName':'gq',
                'name': '砂锅面',
                'money': '7',
                'showSize':false
            },
            {
                'id': '7',
                'listName':'gq',
                'name': '砂锅菜',
                'money': '7',
                'showSize':false
            },
            {
                'id': '8',
                'listName':'gq',
                'name': '砂锅米线',
                'money': '7',
                'showSize':false
            },
            {
                'id': '9',
                'listName':'gq',
                'name': '砂锅麻辣烫',
                'money': '7',
                'showSize':false
            },
            {
                'id': '10',
                'listName':'gq',
                'name': '砂锅酸辣粉',
                'money': '7',
                'showSize':false
            },
            {
                'id': '11',
                'listName':'gq',
                'name': '腊汁肉夹馍',
                'money': '4',
                'showSize':false
            },
            {
                'id': '12',
                'listName':'gq',
                'name': '加肉一份',
                'money': '2',
                'showSize':false
            },
            {
                'id': '13',
                'listName':'gq',
                'name': '香肠',
                'money': '1.5',
                'showSize':false
            },
        ]
    },
    onLoad(options) {
    },
})
