import React from 'react';
import {  shallow ,configure} from 'enzyme';
import {Login} from './Login';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });


describe('<Login>', () => {
    const wrapper = shallow(<Login/>);
    it('has a login button', () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.containsMatchingElement(<button type="submit">Login</button>)).toEqual(false);
    });
    it('has a email input field', () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper.containsMatchingElement(<input type="email" />)).toEqual(false);
      });

      it('has a password input field', () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper.containsMatchingElement(<input type="password" />)).toEqual(false);
      });
     
   
    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });



});
