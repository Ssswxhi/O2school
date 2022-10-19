import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";
import { useEffect } from "react";
import { AtFab } from "taro-ui";
const courses = [
  {
    name: "数据库",
    position: "长安校区东区ff203",
    time: [11, 12, 13, 14, 31, 32]
  },
  {
    name: "数据结构",
    position: "长安校区东区ff203",
    time: [21, 22, 41, 42]
  },
  {
    name: "毛泽东思想",
    position: "长安校区东区ff203",
    time: [23, 24, 55, 56]
  },
  {
    name: "概率论",
    position: "长安校区东区ff203",
    time: [15, 16, 35, 36]
  },
  {
    name: "大学物理",
    position: "长安校区东区ff203",
    time: [33, 34, 53, 54]
  },
  {
    name: "大学英语",
    position: "长安校区东区ff203",
    time: [51]
  }
];
const course2 = [
  {
    campus:'长安校区东区',
    className:'数据库原理和应用',
    courseID:'JS100491',
    courseLogID:2,
    courseRoom:"FF207",
    courseSection:'1-2节',
    courseTitle:'数据库原理和应用',
    courseWeek:'1-18周'

  }
]
const colours = [
  "#e54d42",
  "#f37b1d",
  "#fbbd08",
  "#8dc63f",
  "#39b54a",
  "#1cbbb4",
  "#0081ff",
  "#6739b6",
  "#9c26b0",
  "#e03997",
  "#a5673f",
  "#8799a3"
];
function DataChangeCourse(courses) {
  var arr = new Array();
  var allCourse = new Array();
  var selectCourse = new Array();
  for (var i = 1; i <= 10; i++) {
    arr[i] = new Array(i);
    for (var j = 1; j <= 7; j++) {
      arr[i][j] = "";
    }
  }
  // [timedata][weekdata]
  // [11, 12, 13, 14, 31, 32]
  var headArr = new Array();
  var bottomArr = new Array();
  console.log(courses);
  for (var m in courses) {
    let data = courses[m].time;
    let seltimearr = new Array();
    let selweekarr = new Array();
    selectCourse.push(courses[m].name);
    for (var n in data) {
      // console.log(n);
      let timedata = data[n] % 10;
      seltimearr.push(timedata);
      let weekdata = parseInt(data[n] / 10);
      selweekarr.push(weekdata);
      arr[timedata][weekdata] = courses[m].name;
      // console.log(arr[timedata][weekdata]);
    }
    for (var i = 0; i < selweekarr.length; i++) {
      if ((selweekarr[i] = selweekarr[i + 1])) {
      }
    }
  }
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 7; j++) {
      allCourse.push(arr[i][j]);
    }
  }
  return {
    allCourse: allCourse,
    selectCourse: selectCourse
  };
}
const obj = DataChangeCourse(courses);

function Item(props) {
  // console.log(props.course);
  const checkCourse = () => {
    console.log(props.course);
  };
  return (
    <View className="coursebox" onClick={checkCourse}>
      <View className="course-bottombox" style={{ backgroundColor: props.bgc }}>
        {props.course}
      </View>
    </View>
  );
}

export default function() {
  let classN = "coursebox";
  // let isFinish = false;
  let bgc = "none";
  // useEffect(()=>{
  //   Taro.request({
  //     url: URL + "/user/schedule",
  //     method: "GET",
  //     success: function(res) {
  //       console.log(res);
  //   })
  // },[])
  return (
    <View className="right">
      {obj.allCourse.map(item => {
        if (item == "") {
          classN = "coursenullbox";
          bgc = "none";
        } else {
          for (var selc in obj.selectCourse) {
            if (item == obj.selectCourse[selc]) {
              bgc = colours[selc];
            }
          }
        }
        return <Item course={item} bgc={bgc} />;
      })}
    </View>
  );
}
