export default {
    pages: [
      
        //1783832965swx
        // 'pages/login/index',
       
        'pages/index/index',

        'pages/user/index',
        'pages/login/index',
        'pages/user/components/Me/Information/index',
        'pages/my/Help/index',
        'pages/my/Publish/index',
        'pages/my/Star/index',

        'pages/list/About/index',
        'pages/list/Agreement/index',
        // 'pages/user/components/List/Logout/index',
        'pages/list/Wish/index',

        'pages/bookDetail/index',
        'pages/goodsDetail/index',
        'pages/ownerpage/index',
      
      
        // 'pages/index/goodsDetails',
        // 'pages/index/bookDetails',
        'pages/calendar/index',
        'pages/notification/index',
        // 'pages/index/homePage',
        'pages/add/index',
        // 'pages/user/Publish/publish-show/publish',
        // 'pages/user/Star/star',
        // 'pages/user/Help/help',
        // 'pages/user/Help/contact',
        // 'pages/user/Wish/wish',
        // 'pages/user/About/about',
        // 'pages/user/Agreement/agreement',
        // 'pages/user/Logout/logout',

        // "pages/add/compontent/Otherold/index",
        // "pages/add/compontent/OldBook/index",
        // "pages/add/compontent/Schoolcard/index",


        // "pages/add/compontent/OldBook/compontent/Supbook/index",
        // "pages/add/compontent/OldBook/compontent/Pubbook/index"

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
