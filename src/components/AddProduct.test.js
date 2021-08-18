import React from 'react';
import {AddProduct} from './AddProduct';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Add Product Page Snapshot ", () => {
    let mountWrapper;
    beforeEach(() => {
        mountWrapper = shallow(<AddProduct />);
    })

    it('has a ADD PRODUCT button', () => {
        const wrapper = shallow(<AddProduct/>);
        expect(wrapper.containsMatchingElement(<button type="submit">ADD PRODUCT</button>)).toEqual(false);
      });
      it('has a productdescription input field', () => {
          const wrapper = shallow(<AddProduct/>);
          expect(wrapper.containsMatchingElement(<input type="text"  name="ProductDescription"/>)).toEqual(false);
        });
  
        it('has a productname  input field', () => {
          const wrapper = shallow(<AddProduct />);
          expect(wrapper.containsMatchingElement(<input type="text" name="ProductName" />)).toEqual(false);
        });

        it('has a Quantity input field', () => {
            const wrapper = shallow(<AddProduct />);
            expect(wrapper.containsMatchingElement(<input type="text" name="Quantity" />)).toEqual(false);
        });
        it('has a price input field', () => {
            const wrapper = shallow(<AddProduct />);
            expect(wrapper.containsMatchingElement(<input type="text" name="Price" />)).toEqual(false);
        });
       

    afterEach(() => {
        mountWrapper.unmount();
    })

    
});