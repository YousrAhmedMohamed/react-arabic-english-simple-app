import React from "react";
import { useSelector } from 'react-redux';
 
const Third = () => {
  const number = useSelector((state) => state.list.basedNumber);
  const allList = useSelector((state) => state.list.list);
  const language = useSelector((state) => state.list.rabic);
    return (
   <div>
        <h2>{language? allList[number+2].ar : allList[number+2].en}</h2>
      </div>
    );
}
 
export default Third;