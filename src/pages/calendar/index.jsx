// import { View } from "@tarojs/components";
// import URL from "../tool/url";
// import Taro, { Component } from "@tarojs/taro";
// import { useState, useEffect,useRef } from "react";
// import "./index.scss";
// import Top from "./compontent/Top";
// import Content from "./compontent/Content";
// import NavBar from "../NavBar";
// import { Picker } from "@tarojs/components";
// import { AtList, AtListItem } from "taro-ui";

function theWeek() {
  var totalDays = 0;
  var now = new Date();
  let years = now.getYear();
  if (years < 1000) years += 1900;
  var days = new Array(12);
  days[0] = 31;
  days[2] = 31;
  days[3] = 30;
  days[4] = 31;
  days[5] = 30;
  days[6] = 31;
  days[7] = 31;
  days[8] = 30;
  days[9] = 31;
  days[10] = 30;
  days[11] = 31;
  //判断是否为闰年，针对2月的天数进行计算
  if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
    days[1] = 29;
  } else {
    days[1] = 28;
  }
  if (now.getMonth() == 0) {
    totalDays = totalDays + now.getDate();
  } else {
    var curMonth = now.getMonth();
    for (var count = 1; count <= curMonth; count++) {
      totalDays = totalDays + days[count - 1];
    }
    totalDays = totalDays + now.getDate();
  }
  //得到第几周
  // var week = Math.round(totalDays / 7);
  // console.log(week);
  var Tiweek = now.getDay();
  var SurDays = (totalDays % 7) - Tiweek;
  var week2 = (totalDays - SurDays) / 7 + 1;
  var str = week2.toString();
  // let result = str.match(/(\S*)\./)[1];
  let result = 7;
  console.log(result);
  return result;
}

import { View } from "@tarojs/components";
import URL from "../tool/url";
import Taro from "@tarojs/taro";
import "./index.scss";
import Top from "./compontent/Top";
import Content from "./compontent/Content";
import NavBar from "../NavBar";
import { Picker } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";

import React, { Component } from "react";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      courseDate: {},
      selector: [
        "第1周",
        "第2周",
        "第3周",
        "第4周",
        "第5周",
        "第6周",
        "第7周",
        "第8周",
        "第9周",
        "第10周",
        "第11周",
        "第12周",
        "第13周",
        "第14周",
        "第15周",
        "第16周",
        "第17周",
        "第18周",
        "第19周",
        "第20周",
        "第21周",
        "第22周",
        "第23周",
        "第24周",
        "第25周",
        "假期中"
      ],
      selectorChecked: `第${theWeek()}周`
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = e => {
    clearInterval(timeGetWeek);  
    console.log(this.state.selector[e.detail.value]);
    let timeGetWeek =  setTimeout(() => {
      this.setState({ selectorChecked:this.state.selector[e.detail.value] },()=>{
        console.log(this.state.selectorChecked);
        fetchData(selectorChecked)
      });
      console.log(this.state.selectorChecked);
    }, 0);
  };
  getCourse = async () => {
    let rtoken = "";
    await Taro.getStorage({
      key: "course",
      success: function(res) {
        console.log(res);
        setCourseDate(res.data);
      },
      fail: function() {
        Taro.getStorage({
          key: "token",
          success: function(res) {
            console.log(res.data);
            rtoken = res.data;
            Taro.request({
              url: URL + `/user/schedule?year=2021&grade=1`,
              method: "GET",
              header: {
                "content-type": "application/json",
                token: rtoken
              },
              success: function(res) {
                setCourseDate(res.data.data);
                Taro.setStorage({
                  key: "course",
                  data: res.data.data
                });
                console.log(res.data.data);
              },
              fail: function(err) {
                console.log(111);
                console.log(err);
              }
            });
          }
        });
      }
    });
  };
  render() {
    return (
      <View>
        <NavBar
          background="#54cdc8"
          color="white"
          iconTheme="white"
          back
          renderCenter={
            <View className="trace-rowAlignCenter">
              <View>
                <Picker
                  mode="selector"
                  range={this.state.selector}
                  onChange={this.handleChange}
                >
                  <AtList className="at-list" hasBorder={false}>
                    <AtListItem
                      extraText={this.state.selectorChecked}
                      hasBorder={false}
                    />
                  </AtList>
                </Picker>
              </View>
            </View>
          }
        />
        <View className="context-back">
          <View className="context">
            <Top />
            <Content
              courseDate={this.state.courseDate}
              thisWeek={this.state.selectorChecked.replace(/[^\d]/g, " ")}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default function() {
  return <App />;
}

// export default function() {
//   const dataRef = useRef(false)
//   const [courseDate, setCourseDate] = useState([]);
//   const [selector, setSelector] = useState([
//     "第1周",
//     "第2周",
//     "第3周",
//     "第4周",
//     "第5周",
//     "第6周",
//     "第7周",
//     "第8周",
//     "第9周",
//     "第10周",
//     "第11周",
//     "第12周",
//     "第13周",
//     "第14周",
//     "第15周",
//     "第16周",
//     "第17周",
//     "第18周",
//     "第19周",
//     "第20周",
//     "第21周",
//     "第22周",
//     "第23周",
//     "第24周",
//     "第25周",
//     "假期中"
//   ]);
//   const [selectorChecked, setSelectorChecked] = useState(`第${theWeek()}周`);
//   // let data = [];
//   // Taro.clearStorage()
//   let onChange = (e) => {
//     // setTest("test");
//     console.log(selector[e.detail.value]);
//     setSelectorChecked(selector[e.detail.value]);
//     setSelectorChecked(prevFoo => {
//       console.log('read foo state in setFoo function', prevFoo);
//       return prevFoo;
//   })
//   console.log(selector[e.detail.value]);
//   return selector[e.detail.value]
//   };

//   async function getCourse() {
//     let rtoken = "";
//     await Taro.getStorage({
//       key: "course",
//       success: function(res) {
//         console.log(res);
//         setCourseDate(res.data);
//       },
//       fail: function() {
//         Taro.getStorage({
//           key: "token",
//           success: function(res) {
//             console.log(res.data);
//             rtoken = res.data;
//             Taro.request({
//               url: URL + `/user/schedule?year=2021&grade=1`,
//               method: "GET",
//               header: {
//                 "content-type": "application/json",
//                 token: rtoken
//               },
//               success: function(res) {
//                 setCourseDate(res.data.data);
//                 Taro.setStorage({
//                   key: "course",
//                   data: res.data.data
//                 });
//                 console.log(res.data.data);
//               },
//               fail: function(err) {
//                 console.log(111);
//                 console.log(err);
//               }
//             });
//           }
//         });
//       }
//     });
//   }

//   useEffect(() => {
//     // getCourse();
//     // dataRef.current =   selectorChecked
//     // if ( !dataRef.current ) {
//     //   return dataRef.current = true;
//     // }
//     console.log(selectorChecked);
//   }, []);
//   return (
//     <View>
//       <NavBar
//         background="#54cdc8"
//         color="white"
//         iconTheme="white"
//         back
//         renderCenter={
//           <View className="trace-rowAlignCenter">
//             <View>
//               <Picker mode="selector" range={selector} onChange={onChange}>
//                 <AtList className="at-list" hasBorder={false}>
//                   <AtListItem extraText={selectorChecked} hasBorder={false} />
//                 </AtList>
//               </Picker>
//             </View>
//           </View>
//         }
//       />
//       <View className="context-back">
//         <View className="context">
//           <Top />
//           <Content
//             courseDate={courseDate}
//             thisWeek={selectorChecked.replace(/[^\d]/g, " ")}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }
