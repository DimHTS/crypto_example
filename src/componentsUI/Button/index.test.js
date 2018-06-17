import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'


describe('CompponentsUI => Button', () => {

  const mockOnClick = jest.fn();
  const props = {
    loading: false,
    text: 'Get trade history',
    error: false,
    errorText: 'Error occurred try again!',
    onClick: mockOnClick
  }


  describe('loading', () => {
    const nextProps = {
      ...props,
      loading: true
    }
    const renderedComponent = shallow(<Button {...nextProps} />)

    it('render component', () => {
      expect(renderedComponent.find('button').text()).toEqual('Get trade history')
      expect(renderedComponent.find('button').prop('disabled')).toEqual(true)
      expect(renderedComponent.find('Spinner')).toHaveLength(1)
    })

    it('click simulate', () => {
      renderedComponent.find('button').at(0).simulate('click')
      expect(mockOnClick).not.toHaveBeenCalled()
    })
  })


  describe('error', () => {
    const nextProps = {
      ...props,
      error: true
    }
    const renderedComponent = shallow(<Button {...nextProps} />)

    it('render component', () => {
      expect(renderedComponent.find('button').text()).toEqual('Get trade history')
      expect(renderedComponent.find('button').prop('disabled')).toEqual(undefined)
      expect(renderedComponent.find('span').text()).toEqual('Error occurred try again!')
    })

    it('click simulate', () => {
      renderedComponent.find('button').at(0).simulate('click')
      expect(mockOnClick).toHaveBeenCalled()
    })
  })


  describe('default', () => {
    const renderedComponent = shallow(<Button {...props} />)

    it('render component', () => {
      expect(renderedComponent.find('button').text()).toEqual('Get trade history')
      expect(renderedComponent.find('button').prop('disabled')).toEqual(undefined)
    })

    it('click simulate', () => {
      renderedComponent.find('button').at(0).simulate('click')
      expect(mockOnClick).toHaveBeenCalled()
    })
  })
})