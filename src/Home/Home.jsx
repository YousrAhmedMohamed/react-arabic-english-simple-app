import React from "react";
import { useSelector } from 'react-redux';
 
const Home = () => {
  const number = useSelector((state) => state.list.basedNumber);
  const allList = useSelector((state) => state.list.list);
  const language = useSelector((state) => state.list.rabic);
    return (
      <div>
        <h2>{allList?.length?language? allList[number].ar : allList[number].en:'hello'}</h2>
      </div>
    );
}
 
export default Home;