import React from 'react';
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Subtotal} from './Subtotal';
import CurrencyFormat from 'react-currency-format';

configure({ adapter: new Adapter() });

describe("ComponentName", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Subtotal />);
      expect(wrapper.getElements()).toMatchSnapshot();
    });
  });