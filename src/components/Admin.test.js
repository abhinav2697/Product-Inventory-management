import React from 'react';
import { shallow ,configure} from 'enzyme';
import {Admin } from '../components/Admin';
import Adapter from 'enzyme-adapter-react-16';
import { Button, Table } from 'react-bootstrap';
import {EditIcon} from '@material-ui/icons/Edit';
import { TableRow } from '@material-ui/core';

configure({ adapter: new Adapter() });


describe('Login component tests', ()=> {
    const wrapper = shallow(<Table />);

    it('should have a btn component', ()=> {

        expect(wrapper.find('Button'));
     });

    describe('Login component tests', ()=> {
        it('should have a Table component', ()=> {
        const wrapper = shallow(<Table />);
        expect(wrapper.find('Table'));

    });
    describe('Login component tests', ()=> {
        it('should have a table row component', ()=> {
        const wrapper = shallow(<TableRow />);
        expect(wrapper.find('TableRow'));

    });
});

});
});