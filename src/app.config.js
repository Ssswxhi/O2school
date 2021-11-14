export default {
    pages: [
        'pages/index/index',
        'pages/calendar/index',
        'pages/notification/index',
        'pages/user/index',
        'pages/add/index'
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        color: "#555555",
        selectColor: "#169692",
        backgroundColor: '#ffffff',
        list: [{
                pagePath: 'pages/index/index',
                text: '首页',
                iconPath: './assets/icons/home.png',
                selectedIconPath: './assets/icons/home_selected.png'
            },
            {
                pagePath: 'pages/calendar/index',
                text: '课表',
                iconPath: './assets/icons/calendar.png',
                selectedIconPath: './assets/icons/calendar_selected.png'
            },
            {
                pagePath: 'pages/add/index',
                iconPath: './assets/icons/add.png',
                selectedIconPath: './assets/icons/add.png'
            },
            {
                pagePath: 'pages/notification/index',
                text: '通知',
                iconPath: './assets/icons/notification.png',
                selectedIconPath: './assets/icons/notification_selected.png'
            },
            {
                pagePath: 'pages/user/index',
                text: '我',
                iconPath: './assets/icons/user.png',
                selectedIconPath: './assets/icons/user_selected.png'
            }
        ]
    }
}