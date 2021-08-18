import React from 'react';
import {EditProduct} from './EditProduct';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import {shallow} from 'enzyme';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<Form/>);
  });
  test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });
  describe('Edit component tests', ()=> {
    it('should have a  component', ()=> {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('Form'));

});
});
});
