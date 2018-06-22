import React, { Component } from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import TradeHistory from './index'
import { onGetTiker } from '../../actions/TradeHistory/tiker'


describe('TradeHistory container', () => {

  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  const props = {
    TradeHistory: {
      tiker: {
        loading: false,
        error: false,
        currencies: []
      },
      tradeHistory: {
        loading: false,
        error: false,
        data: []
      }
    }
  }
  let store, wrapper, container, nextProps;

  beforeEach(() => {
    store = mockStore(props)
    wrapper = mount(
      <Provider store={store}>
        <TradeHistory />
      </Provider>
    )
    container = wrapper.find(TradeHistory)
  })


  it('render container', () => {
    expect(container).toHaveLength(1)
  })


  it('render components in container', () => {
    expect(container.find('FormSelect')).toHaveLength(1)
    expect(container.find('Table')).toHaveLength(1)
  })


  it('render container Loading', () => {
    nextProps = {
      ...props,
      TradeHistory: {
        ...props.TradeHistory,
        tiker: {
          ...props.TradeHistory.tiker,
          loading: true
        }
      }
    }
    store = mockStore(nextProps)
    wrapper = mount(
      <Provider store={store}>
        <TradeHistory />
      </Provider>
    )
    container = wrapper.find(TradeHistory)

    expect(container).toHaveLength(1)
    expect(container.find('Loading')).toHaveLength(1)
  })


  it('render container Error', () => {
    nextProps = {
      ...props,
      TradeHistory: {
        ...props.TradeHistory,
        tiker: {
          ...props.TradeHistory.tiker,
          error: true
        }
      }
    }
    store = mockStore(nextProps)
    wrapper = mount(
      <Provider store={store}>
        <TradeHistory />
      </Provider>
    )
    container = wrapper.find(TradeHistory)

    expect(container).toHaveLength(1)
    expect(container.find('Error')).toHaveLength(1)
  })

})