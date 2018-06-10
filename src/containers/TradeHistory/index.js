import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { onGetTiker } from '../../actions/TradeHistory/tiker'
import { onGetTradeHistory } from '../../actions/TradeHistory/tradeHistory'
//Components
import FormSelect from '../../components/TradeHistory/FormSelect'
//ComponentsUI
import Loading from '../../componentsUI/Loading'
import Error from '../../componentsUI/Error'
import Table from '../../componentsUI/Table'

import './index.css';


class TradeHistory extends Component {

  componentDidMount() {
    this.handleStartContainer();
  }

  handleStartContainer = () => {
    this.props.onGetTiker();
  }

  render() {
    const {
      loading_Tiker,
      error_Tiker,
      currencies,
      loading_TradeHistory,
      error_TradeHistory,
      tradeHistory
    } = this.props;

    if (loading_Tiker) return <Loading />
    if (error_Tiker) return <Error onClick={() => this.handleStartContainer()} />


    return (
      <div>
        <br />
        <FormSelect
          loading_Tiker={loading_Tiker}
          error_Tiker={error_Tiker}
          currencies={currencies}
          loading_TradeHistory={loading_TradeHistory}
          error_TradeHistory={error_TradeHistory}
          tradeHistory={tradeHistory}
          onGetTradeHistory={this.props.onGetTradeHistory}
        />

        <br />

        <Table
          data={tradeHistory}
          counterText='Count of trades:'
          columns={{
            "Date": "date",
            "Type": "type",
            "Rate": "rate",
            "Amount": "amount",
            "Total": "total"
          }}
        />
      </div >
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
  loading_Tiker: state.TradeHistory.tiker.loading,
  error_Tiker: state.TradeHistory.tiker.error,
  currencies: state.TradeHistory.tiker.currencies,

  loading_TradeHistory: state.TradeHistory.tradeHistory.loading,
  error_TradeHistory: state.TradeHistory.tradeHistory.error,
  tradeHistory: state.TradeHistory.tradeHistory.data,
})

const mapDispatchToProps = ({
  onGetTradeHistory,
  onGetTiker
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistory);
