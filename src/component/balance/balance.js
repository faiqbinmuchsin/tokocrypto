import React from 'react';
import './balance.css';
import {
    Table
} from 'reactstrap';

const RowData = ({data}) => (
    data.map((item) => (
        <tr key={item.id}>
            <td>{item.symbol}</td>
            <td>{item.balance}</td>
            <td>{item.estimated}</td>
        </tr>
    ))
);

const TableBalance = () => (
    <div>
        <Table responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Estimated</th>
                </tr>
            </thead>
            <tbody>
                <RowData data={Data} />
            </tbody>
        </Table>
    </div>
);

export default TableBalance;

const Data = [
    {
        id:"1-b",
        name:"Rupiah",
        symbol:"IDR",
        balance:"10,000,000",
        estimated:"1200000"
    },
    {
        id:"2-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"3-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"4-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"5-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"6-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"7-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"8-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"9-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"10-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"11-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"12-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"13-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"14-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"15-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"16-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
    {
        id:"17-b",
        name:"Bitcoin",
        symbol:"BTC",
        balance:"0.0001",
        estimated:"1200000"
    },
];