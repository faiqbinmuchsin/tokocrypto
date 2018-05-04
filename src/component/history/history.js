import React from 'react';
import numeral from 'numeral';
import './history.css';
import {
    Table
} from 'reactstrap';

const DataBadge = ({data}) => (
    <div>
        {(data === "sell" ) ?
        <span className="badge badge-danger">{data}</span> :
        <span className="badge badge-success">{data}</span>}
    </div>
)

const DataNumConv = ({data, symbol}) => (
    <div>
        {(symbol === "IDR" ) ?
        <span>Rp. {numeral(data).format('0,0')}</span> :
        <span>{data} {symbol}</span>}
    </div>
)

const RowData = ({data}) => (
    <tr>
        <td><DataBadge data={data.type} /></td>
        <td>
            <DataNumConv data={data.from} symbol={data.from_symbol} />
        </td>
        <td>
            <DataNumConv data={data.to} symbol={data.to_symbol} />
        </td>
        <td>Rp. {numeral(data.price_at).format('0,0')}</td>
        <td>{data.time}</td>
    </tr>
)

const TableHistory = ({history}) => (
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
                {
                    (history) ?
                    (Object.keys(history).map((item, index) => {
                        return(
                            <RowData data={history[item]} key={index} />
                        )
                    })) : (null)
                }
            </tbody>
        </Table>
    </div>
);

export default TableHistory;