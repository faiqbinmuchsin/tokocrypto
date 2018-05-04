import React, { Component } from 'react';
import './home.css';

import TableCrypto from '../../component/crypto-table';
import TableBalance from '../../component/balance';
import Order from '../../component/order';
import TableHistory from '../../component/history';

import { connect } from "react-redux";
import { homeActions, homeSelectors } from "../../redux/page/home";

class Home extends Component{
    componentDidMount() {
        const {
            isCryptosFetched,
            isBalanceFetched,
            isHistoryFetched,
            onPageEnter
        } = this.props;

        if (onPageEnter) {
            onPageEnter(isCryptosFetched, isBalanceFetched, isHistoryFetched);
        }
    }
    render(){
        const {cryptos, balance, history} = this.props;
        // console.log(cryptos.length)
        return(
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12 table__crypto">
                            <TableCrypto cryptos={cryptos} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 order__part">
                            <Order />
                        </div>
                        <div className="col-md-6 history__part">
                            <TableHistory history={history} />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12 table__balance">
                            <TableBalance balance={balance} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cryptos: homeSelectors.selectCryptosData(state),
    balance: homeSelectors.selectBalanceData(state),
    history: homeSelectors.selectHistoryData(state),
    isCryptosFetched: homeSelectors.isCryptosFetched(state),
    isBalanceFetched: homeSelectors.isBalanceFetched(state),
    isHistoryFetched: homeSelectors.isHistoryFetched(state)
});

const mapDispatchToProps = dispatch => ({
    onPageEnter: (isCryptosFetched, isBalanceFetched, isHistoryFetched) => {
        if (!isCryptosFetched) {
            dispatch(homeActions.getCryptos());
        }
        if (!isBalanceFetched) {
            dispatch(homeActions.getBalance());
        }
        if (!isHistoryFetched) {
            dispatch(homeActions.getHistory());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);