import Taro from "@tarojs/taro";
let toOtherPage = (url, data) => {
  Taro.navigateTo({
    url: url,
    events: {
      // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      acceptDataFromOpenedPage: function (data) {
        console.log(data);
      },
      someEvent: function (data) {
        console.log(data);
      }
    },
    success: function (res) {
      // 通过eventChannel向被打开页面传送数据
      res.eventChannel.emit("acceptDataFromOpenerPage", {
        data: data,
      });
    }
  });
};
let reLaunchPage = (url, data) => {
  Taro.reLaunch({
    url: url,
    // events: {
    //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    //   acceptDataFromOpenedPage: function (data) {
    //     console.log(data);
    //   },
    //   someEvent: function (data) {
    //     console.log(data);
    //   }
    // },
    // success: function (res) {
    //   // 通过eventChannel向被打开页面传送数据
    //   res.eventChannel.emit("acceptDataFromOpenerPage", {
    //     data: "test"
    //   });
    // }
  });
};
<<<<<<< HEAD
=======
let useEventTrigger =(eventName, onEvnetChange) =>{
  useEffect(() => {
    function bindChange(data) {
      if (!!onEvnetChange) {
        onEvnetChange(data);
      }
    }
 
    Taro.eventCenter.on(eventName, bindChange.bind(this));
    return () => {
      Taro.eventCenter.off(eventName, bindChange.bind(this));
    };
  }, []);
}
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
export {
  toOtherPage,
  reLaunchPage
};
