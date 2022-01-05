import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers and return result', () => {
    const firstNumber = container.find('#number1');
    const secondNumber = container.find('#number4');
    const addOperator = container.find('#operator_add');
    const equalOperator = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    firstNumber.simulate('click');
    addOperator.simulate('click');
    secondNumber.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract two numbers and return result', () => {
    const firstNumber = container.find('#number7');
    const secondNumber = container.find('#number4');
    const subtractOperator = container.find('#operator-subtract');
    const equalOperator = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    firstNumber.simulate('click');
    subtractOperator.simulate('click');
    secondNumber.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply two numbers and return result', () => {
    const firstNumber = container.find('#number3');
    const secondNumber = container.find('#number5');
    const multiplyOperator = container.find('#operator-multiply');
    const equalOperator = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    firstNumber.simulate('click');
    multiplyOperator.simulate('click');
    secondNumber.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide two numbers and return result', () => {
    const firstNumber = container.find('#number2');
    const secondNumber = container.find('#number1');
    const thirdNumber = container.find('#number7')
    const divideOperator = container.find('#operator-divide');
    const equalOperator = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    firstNumber.simulate('click');
    secondNumber.simulate('click');
    divideOperator.simulate('click');
    thirdNumber.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate two number button clicks', () => {
    const firstNumber = container.find('#number2');
    const secondNumber = container.find('#number1');
    const runningTotal = container.find('#running-total');
    firstNumber.simulate('click');
    secondNumber.simulate('click');
    expect(runningTotal.text()).toEqual('21');
  })

  it('should chain multiple operations together', () => {
    const firstNumber = container.find('#number1');
    const secondNumber = container.find('#number4');
    const thirdNumber = container.find('#number7')
    const addOperator = container.find('#operator_add');
    const subractOperator = container.find('#operator-subtract');
    const equalOperator = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    firstNumber.simulate('click');
    addOperator.simulate('click');
    secondNumber.simulate('click');
    subractOperator.simulate('click');
    thirdNumber.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('-2');
  })

})

