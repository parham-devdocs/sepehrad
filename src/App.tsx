import React from 'react';
import './App.css';
// import 'antd/dist/antd.css'; // Ensure Ant Design CSS is imported
import { Table } from "antd";

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function App() {
  return (
    <div >
<Table dataSource={dataSource} columns={columns} />
<div className=' bg-Primary-dark w-96 h-96'></div>
    </div>
  );
}

export default App;
