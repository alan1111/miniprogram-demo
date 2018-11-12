const app = getApp()

Page({
    onShareAppMessage() {
        return {
            title: '云南过桥米线',
            path: 'page/menu/mf/mf'
        }
    },
    data: {
        qty:1,
        menuData: [
            {
                'id': '0',
                'listName':'mf',
                'name': '混炒',
                'money': '6',
                'showSize':true
            },
            {
                'id': '1',
                'listName':'mf',
                'name': '米皮',
                'money': '6',
                'showSize':true
            },
            {
                'id': '2',
                'listName':'mf',
                'name': '担担面',
                'money': '6',
                'showSize':true
            },
            {
                'id': '3',
                'listName':'mf',
                'name': '凉面皮',
                'money': '6',
                'showSize':true
            },
            {
                'id': '4',
                'listName':'mf',
                'name': '鸡肉米线',
                'money': '7',
                'showSize':true
            },
            {
                'id': '5',
                'listName':'mf',
                'name': '素米线',
                'money': '6',
                'showSize':true
            },
            {
                'id': '6',
                'listName':'mf',
                'name': '砂锅面',
                'money': '7',
                'showSize':false
            },
            {
                'id': '7',
                'listName':'mf',
                'name': '砂锅菜',
                'money': '7',
                'showSize':false
            },
            {
                'id': '8',
                'listName':'mf',
                'name': '砂锅米线',
                'money': '7',
                'showSize':false
            },
            {
                'id': '9',
                'listName':'mf',
                'name': '砂锅麻辣烫',
                'money': '7',
                'showSize':false
            },
            {
                'id': '10',
                'listName':'mf',
                'name': '砂锅酸辣粉',
                'money': '7',
                'showSize':false
            }
        ]
    },
    onLoad(options) {
    },
})
