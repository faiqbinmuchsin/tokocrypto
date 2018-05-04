import React from 'react';
import './history.css';
import {
    Table
} from 'reactstrap';

const RowData = ({data}) => (
    data.map((item) => (
        <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.from}</td>
            <td>{item.to}</td>
            <td>{item.price}</td>
            <td>{item.time}</td>
        </tr>
    ))
);

const TableHistory = () => (
    <div>
        <Table responsive>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Price at</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <RowData data={Data} />
            </tbody>
        </Table>
    </div>
);

export default TableHistory;

const Data = [
    {
        id:"1",
        type:"Buy",
        from:"1,000,000 IDR",
        to:"0.00012 BTC",
        price:"120,000,000",
        time:"20-04-2018 21:30"
    },
    {
        id:"2",
        type:"Sell",
        from:"1,000,000 IDR",
        to:"0.00012 BTC",
        price:"120,000,000",
        time:"20-04-2018 21:30"
    },
    {
        id:"3",
        type:"Buy",
        from:"1,000,000 IDR",
        to:"0.00012 BTC",
        price:"120,000,000",
        time:"20-04-2018 21:30"
    },
    
];