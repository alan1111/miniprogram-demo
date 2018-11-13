const app = getApp()

Page({
    onShareAppMessage() {
        return {
            title: '云南过桥米线',
            path: 'page/menu/gq/gq'
        }
    },
    data: {
        qty:1,
        menuData: [
            {
                'id': '12',
                'listName':'gq',
                'name': '荤菜/素菜',
                'money': '0',
                'showSize':false
            },
            {
                'id': '0',
                'listName':'gq',
                'name': '一种荤菜',
                'money': '8',
                'showSize':false
            },
            {
                'id': '1',
                'listName':'gq',
                'name': '二种荤菜',
                'money': '10',
                'showSize':false
            },
            {
                'id': '2',
                'listName':'gq',
                'name': '一种荤菜加菌',
                'money': '13',
                'showSize':false
            },
            {
                'id': '3',
                'listName':'gq',
                'name': '三种荤菜',
                'money': '15',
                'showSize':false
            },
            {
                'id': '4',
                'listName':'gq',
                'name': '四种荤菜',
                'money': '20',
                'showSize':false
            },
            {
                'id': '5',
                'listName':'gq',
                'name': '四种荤菜加菌',
                'money': '25',
                'showSize':false
            },
            {
                'id': '6',
                'listName':'gq',
                'name': '六种荤菜',
                'money': '30',
                'showSize':false
            },
            {
                'id': '7',
                'listName':'gq',
                'name': '六种荤菜加菌',
                'money': '35',
                'showSize':false
            },
            {
                'id': '8',
                'listName':'gq',
                'name': '八种荤菜',
                'money': '40',
                'showSize':false
            },
            {
                'id': '9',
                'listName':'gq',
                'name': '八种荤菜加菌',
                'money': '45',
                'showSize':false
            },
            {
                'id': '10',
                'listName':'gq',
                'name': '一份菌菜',
                'money': '3',
                'showSize':false
            },
            {
                'id': '11',
                'listName':'gq',
                'name': '一份米线',
                'money': '4',
                'showSize':false
            }
        ]
    },
    onLoad(options) {
    },
})
