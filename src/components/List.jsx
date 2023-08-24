import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { checkActive } from "../redux/pointSlice";
import { DoubleRightOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const List = () => {
    const {points} = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleGet = (id) => {
        const pointString = points[id].point.map(item => [item.geocode[1], item.geocode[0]]).join(';');
        dispatch(checkActive({pointString, id}))
    } 
 
    return (
        <Menu
          theme="dark"
          mode="inline"
          items={[DoubleRightOutlined, DoubleRightOutlined, DoubleRightOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `Маршрут ${index + 1}`,
              onClick: () => handleGet(index),
            }),
          )}
        />
    )
}
export default List