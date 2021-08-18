import React from 'react';
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SignUp} from '../src/SignUp';
import { Form } from 'react-bootstrap';
import { Field } from 'react-bootstrap';
import { Formik } from 'formik';

configure({ adapter: new Adapter() });
let wrapper;

describe('signup component tests', ()=> {
    wrapper = shallow(<SignUp />);


   const w1=shallow(<Form />);

   it('has a login button', () => {
    const wrapper = shallow(<SignUp/>);
    expect(wrapper.containsMatchingElement(<button type="submit">SignUp</button>)).toEqual(false);
  });

  it('has a email input field', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.containsMatchingElement(<input type="email" name='email'/>)).toEqual(false);
  });

  it('has a password input field', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.containsMatchingElement(<input type="password"  name="password"/>)).toEqual(false);
  });
 
  
 


    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    
    it('displays correct heading for Users', () => {
        const w2 = shallow(<SignUp />);
    expect(w2.equals(<div className="signup" />)).toEqual(false);
    })

    // it('displays correct heading for Users', () => {
    //     expect(wrapper.find("button")).simulate('click');
    // })
    
});