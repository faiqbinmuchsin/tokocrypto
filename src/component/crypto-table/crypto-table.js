import React from 'react';
import numeral from 'numeral';
import './crypto-table.css';
import {
    Table
} from 'reactstrap';

const DataBadge = ({data}) => (
    <div>
        {(data < 0 ) ?
        <span className="badge badge-danger">{data}%</span> :
        <span className="badge badge-success">{data}%</span>}
    </div>
)

const RowData = ({data}) => (
    <tr>
        <td>{data.rank}</td>
        <td>{data.name}</td>
        <td>{data.symbol}</td>
        <td>Rp. {numeral(data.quotes.IDR.price).format('0,0')}</td>
        <td>
            <DataBadge data={data.quotes.IDR.percent_change_1h} />
        </td>
        <td>
            <DataBadge data={data.quotes.IDR.percent_change_24h} />
        </td>
        <td>
            <DataBadge data={data.quotes.IDR.percent_change_7d} />
        </td>
    </tr>
)

const TableCrypto = ({cryptos}) => (
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
                {
                    cryptos.data ? 
                    Object.keys(cryptos.data).map(function(crypto, index) {
                        return(
                            <RowData data={cryptos.data[crypto]} key={index} />
                        )
                    }) : null
                }
            </tbody>
        </Table>
    </div>
);

export default TableCrypto;