import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import { AtFab } from "taro-ui";
const courses = [
  "数据库",
  "",
  "数据库",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "数据库",
  "",
  "数据库",
  "数据库",
  "",
  "数据库"
  
];
//id
function Item(props) {
  console.log(props.course);
  const checkCourse = () => {
    console.log(props.course);
  };
  return (
    <View
      className="coursebox"
      onClick={checkCourse}
      style={{ backgroundColor: props.bgc }}
    >
      <View>{props.course}</View>
    </View>
  );
}
export default function() {
  let classN = "coursebox";
  let isFinish = false;
  // const checkCourse = e => {};
  return (
    <View className="right">
      {courses.map(item => {
        classN = "coursenullbox";
        let bgc = "#ff0000";
        if (item === "数据库") {
          bgc = "#000000";
          isFinish = !isFinish;
        }
        return (
          <Item
            bgc={bgc}
            course={isFinish ? item.slice(0, 2) : item.slice(2)}
          />
          // <View className={classN} onClick={checkCourse}>
          //   <View className="coursetext"></View>
          // </View>
        );
      })}
    </View>
  );
}
