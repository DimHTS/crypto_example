import React from 'react'
import { shallow, mount } from 'enzyme'
import FormSelect from './index'


describe('Compponents > TradeHistory => FormSelect', () => {

  const props = {
    loading_TradeHistory: false,
    error_TradeHistory: false,
    currencies: []
  }


  describe('start rendering component', () => {
    const component = shallow(<FormSelect {...props} />)

    it('render component', () => {
      expect(component.find('Select')).toHaveLength(2)
      expect(component.find('Button')).toHaveLength(1)
    })


    it('render component state', () => {
      expect(component.state('seletedCurrencie')).toBe('')
      expect(component.state('seletedCoin')).toBe('')
    })
  })

})