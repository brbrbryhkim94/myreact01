import { useEffect, useState } from "react";

import ListPageComponent from "../common/ListPageComponent";
import { getList } from "../../api/productAPI";


const initState = {
  dtoList: [],
  end: 0,
  start: 0,
  next: false,
  prev: false,
  pageNums: [],
  page: 0,
  size: 0,
  requestDTO: null
}


const ListComponent = ({ queryObj, movePage, moveRead }) => {

  const [listData, setListData] = useState(initState)


  useEffect(() => {

    getList(queryObj).then(data => {
      console.log(data)
      setListData(data)
    })

  }, [queryObj])



  return (
    <div className="m-2 p-2 border-2 bg-sky-300">
    <div className="flex justify-center">
      <ul className="flex flex-wrap container justify-center">
        {listData.dtoList.map(dto =>
          <li className="w-2/5 h-[300px] bg-sky-800 m-2 p-2 rounded-md shadow-lg"
            key={dto.pno}
            onClick={() => moveRead(dto.pno)}
          >
            <div className="">
              <div className="text-white font-extrabold">{dto.pno}</div>
            </div>
            <div className="flex flex-wrap items-center">
              <img src={`http://localhost/s_${dto.fname}`} alt="add"></img>
              <div className="text-center text-white font-extrabold">{dto.pname} - {dto.price}</div>
            </div>
          </li>)}
      </ul>
    </div>
  
    <div className="flex justify-center m-4 p-2">
      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
    </div>
  </div>
  );
}

export default ListComponent;