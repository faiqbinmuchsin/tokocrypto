import React from 'react';
import './crypto-table.css';
import {
    Table
} from 'reactstrap';

const RowData = ({data}) => (
    data.map((item) => (
        <tr key={item.id}>
            <td>{item.rank}</td>
            <td>{item.name}</td>
            <td>{item.symbol}</td>
            <td>{item.price}</td>
            <td>{item.one_hr}</td>
            <td>{item.one_day}</td>
            <td>{item.one_week}</td>
        </tr>
    ))
);

const TableCrypto = () => (
    <div>
        <Table responsive>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>1hr</th>
                    <th>24hr</th>
                    <th>7d</th>
                </tr>
            </thead>
            <tbody>
                <RowData data={Data} />
            </tbody>
        </Table>
    </div>
);

export default TableCrypto;

const Data = [
    {
        id:"1",
        rank:"1",
        name:"Bitcoin",
        symbol:"BTC",
        price:"120000000",
        one_hr:"0.12",
        one_day:"-1.2",
        one_week:"2.5"
    },
    {
        id:"2",
        rank:"1",
        name:"Bitcoin",
        symbol:"BTC",
        price:"120000000",
        one_hr:"0.12",
        one_day:"-1.2",
        one_week:"2.5"
    },
    {
        id:"3",
        rank:"1",
        name:"Bitcoin",
        symbol:"BTC",
        price:"120000000",
        one_hr:"0.12",
        one_day:"-1.2",
        one_week:"2.5"
    },
    {
        id:"4",
        rank:"1",
        name:"Bitcoin",
        symbol:"BTC",
        price:"120000000",
        one_hr:"0.12",
        one_day:"-1.2",
        one_week:"2.5"
    },
    {
        id:"5",
        rank:"1",
        name:"Bitcoin",
        symbol:"BTC",
        price:"120000000",
        one_hr:"0.12",
        one_day:"-1.2",
        one_week:"2.5"
    },
];