import React from 'react';
import './balance.css';
import numeral from 'numeral';
import {
    Table
} from 'reactstrap';

const RowData = ({data}) => (
    <tr>
        <td>{data.name}</td>
        <td>{numeral(data.balance).format('0,0')} {data.symbol}</td>
    </tr>
);

const TableBalance = ({balance}) => (
    <div>
        <Table responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
            {
                balance ? 
                Object.keys(balance).map(function(data, index) {
                    return(
                        <RowData data={balance[data]} key={index} />
                    )
                }) : null
            }
            </tbody>
        </Table>
    </div>
);

export default TableBalance;