import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import './index.css';
import { onGetTiker } from '../../actions/tiker'
import { onGetTradeHistory } from '../../actions/tradeHistory'
//Components
import TikerSelection from '../../components/TikerSelection'
import TradeHistoryComponent from '../../components/TradeHistory'
import Loading from '../../componentsUI/Loading'
import Error from '../../componentsUI/Error'

class TradeHistory extends Component {
  constructor() {
    super()

    this.state = {
      seletedCurrencie: '',
      seletedCoin: ''
    }
  }

  componentDidMount() {
    this.handleStartContainer();
  }

  handleStartContainer = () => {
    this.props.onGetTiker();
  }


  handleSelectedCurrencie = (currencie) => {
    this.setState({ seletedCurrencie: currencie })
  }

  handleSelectedCoin = (coin) => {
    this.setState({ seletedCoin: coin })
  }

  render() {
    if (this.props.loading_Tiker) return <Loading />
    if (this.props.error_Tiker) { return <Error onClick={() => this.handleStartContainer()} /> }

    return (
      <div>
        <br />
        <TikerSelection
          seletedCurrencie={this.state.seletedCurrencie}
          currencies={this.props.currencies}
          handleSelectedCurrencie={(currencie) => this.handleSelectedCurrencie(currencie)}
          handleSelectedCoin={(coin) => this.handleSelectedCoin(coin)}
          onGetTiker={() => this.props.onGetTiker()} />

        <br />
        =====================================
        <br /> <br />

        <TradeHistoryComponent
          seletedCurrencie={this.state.seletedCurrencie}
          seletedCoin={this.state.seletedCoin}
          loading_TradeHistory={this.props.loading_TradeHistory}
          error_TradeHistory={this.props.error_TradeHistory}
          tradeHistory={this.props.tradeHistory}
          onGetTradeHistory={(currencie, coin) => this.props.onGetTradeHistory(currencie, coin)} />

        <br />
      </div>
    )
  }
}


TradeHistory.propTypes = {
  loading_Tiker: PropTypes.bool.isRequired,
  error_Tiker: PropTypes.bool.isRequired,
  currencies: PropTypes.array,

  loading_TradeHistory: PropTypes.bool.isRequired,
  error_TradeHistory: PropTypes.bool.isRequired,
  tradeHistory: PropTypes.array,
}


const mapStateToProps = (state) => ({
  loading_Tiker: state.tiker.loading,
  error_Tiker: state.tiker.error,
  currencies: state.tiker.currencies,

  loading_TradeHistory: state.tradeHistory.loading,
  error_TradeHistory: state.tradeHistory.error,
  tradeHistory: state.tradeHistory.data,
})

const mapDispatchToProps = ({
  onGetTradeHistory,
  onGetTiker
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistory);
