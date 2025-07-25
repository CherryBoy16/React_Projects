import React from "react";
const NameProp=(props) => {
    const {name,course,fee}=props;
    return(
    <div>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Fee: {fee}</p>
    </div>
    )
}
export default NameProp;