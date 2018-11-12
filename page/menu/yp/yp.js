const app = getApp()

Page({
    onShareAppMessage() {
        return {
            title: '饮品',
            path: 'page/menu/yp/yp'
        }
    },
    data: {
        qty:1,
        menuData: [
            {
                'id': '0',
                'listName':'yp',
                'name': '崂山',
                'money': '3',
                'showSize':false
            },
            {
                'id': '1',
                'listName':'yp',
                'name': '汉斯小木屋',
                'money': '3',
                'showSize':false
            },
            {
                'id': '2',
                'listName':'yp',
                'name': '青梅绿茶',
                'money': '3',
                'showSize':false
            },
            {
                'id': '3',
                'listName':'yp',
                'name': '冰红茶',
                'money': '3',
                'showSize':false
            },
            {
                'id': '4',
                'listName':'yp',
                'name': '冰糖雪梨',
                'money': '3',
                'showSize':false
            },
            {
                'id': '5',
                'listName':'yp',
                'name': '山楂红',
                'money': '3',
                'showSize':false
            },
            {
                'id': '6',
                'listName':'yp',
                'name': '健力宝',
                'money': '3',
                'showSize':false
            },
            {
                'id': '7',
                'listName':'yp',
                'name': '矿泉水',
                'money': '1',
                'showSize':false
            },
            {
                'id': '8',
                'listName':'yp',
                'name': '尚品学梨',
                'money': '5',
                'showSize':false
            },
            {
                'id': '9',
                'listName':'yp',
                'name': '雪碧',
                'money': '2',
                'showSize':false
            },
            {
                'id': '10',
                'listName':'yp',
                'name': '芬达',
                'money': '2',
                'showSize':false
            },
            {
                'id': '11',
                'listName':'yp',
                'name': '可乐',
                'money': '2',
                'showSize':false
            }
        ]
    },
    onLoad(options) {
    },
})
