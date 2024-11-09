import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serviceApi } from "../../Service/ServiceApiUser";
import { Card, Popover } from "antd";
import Meta from "antd/es/card/Meta";
import SelectMovie from "./SelectMovie";

export default function ListMovie() {
  let navigate = useNavigate();
  const [listMovie, setListMovie] = useState([]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    serviceApi
      .layDanhSachPhim()
      .then((result) => {
        // console.log(result);
        setListMovie(result.data.content);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="relative">
      <div>
        <SelectMovie />
      </div>
      <div className="container grid grid-cols-6 gap-3 mt-20">
        {listMovie.map((item) => {
          return (
            <Card
              onClick={() => {
                navigate(`/detail/${item.maPhim}`);
              }}
              className="hover:bg-pink-200 hover:scale-90 duration-300 transition-all"
              key={item.maPhim}
              hoverable
              cover={<img className="h-40 object-cover" src={item.hinhAnh} />}
            >
              <Meta
                title={<Popover content={item.tenPhim}>{item.tenPhim}</Popover>}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
