import React, { Component } from 'react';
import './home.css';

import TableCrypto from '../../component/crypto-table';
import TableBalance from '../../component/balance';
import Order from '../../component/order';
import TableHistory from '../../component/history';

import { connect } from "react-redux";
import { homeActions, homeSelectors } from "../../redux/page/home";
import {
    Row,
    Col
} from 'reactstrap';

class Home extends Component{
    componentDidMount() {
        const {
            isCryptosFetched,
            onPageEnter
        } = this.props;

        if (onPageEnter) {
            onPageEnter(isCryptosFetched);
        }
    }
    render(){
        const {cryptos} = this.props;
        return(
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12 table__crypto">
                            <TableCrypto />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 order__part">
                            <Order />
                        </div>
                        <div className="col-md-6 history__part">
                            <TableHistory />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12 table__balance">
                            <TableBalance />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cryptos: homeSelectors.selectCryptosData(state),
    isCryptosFetched: homeSelectors.isCryptosFetched(state)
});

const mapDispatchToProps = dispatch => ({
    onPageEnter: (isCryptosFetched) => {
        if (!isCryptosFetched) {
            dispatch(homeActions.getCryptos());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);