import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MemberApplication from './MemberApplication';

configure({adapter: new Adapter()});

describe('<MemberApplication />', () => {

      it('should render without throwing an error', () => {
          expect(shallow(<MemberApplication/>).find('form.Register').exists()).toBe(true)
      })

      it('checks ', () => {
        expect(shallow(<MemberApplication />).find('#radio-button-male').length).toEqual(1)
       })

       it('should respond to change event and change the state of the Gender Component to male', () => {
   
        const wrapper = shallow(<MemberApplication />);
        wrapper.find('#radio-button-male').simulate('change', {target: {name: 'Gender', value: 'Male'}});
        
       expect(wrapper.state('Gender')).toEqual('Male');
       })

       it('should respond to change event and change the state of the Gender Component to female', () => {
   
        const wrapper = shallow(<MemberApplication />);
        wrapper.find('#radio-button-female').simulate('change', {target: {name: 'Gender', value: 'Female'}});
        
       expect(wrapper.state('Gender')).toEqual('Female');
       })
});