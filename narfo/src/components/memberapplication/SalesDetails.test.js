// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import SalesDetails from './SalesDetails';

// configure({adapter: new Adapter()});

// describe('<SalesDetails />', () => {

//       it('checks ', () => {
//         expect(shallow(<SalesDetails />).find('#radio-button-Yes').length).toEqual(1)
//        })

//        it('should respond to change event and change the state of the Current_Assciate to YES', () => {
   
//         const wrapper = shallow(<SalesDetails />);
//         wrapper.find('#radio-button-Yes').simulate('change', {target: {name: 'CurrentMember_Associaton', value: 'Yes'}});
        
//        expect(wrapper.state('CurrentMember_Associaton')).toEqual('Yes');
//        })

//        it('should respond to change event and change the state of the Current_Assciate to YES', () => {
   
//         const wrapper = shallow(<SalesDetails />);
//         wrapper.find('#radio-button-No').simulate('change', {target: {name: 'CurrentMember_Associaton', value: 'No'}});
        
//        expect(wrapper.state('CurrentMember_Associaton')).toEqual('No');
//        })
// });