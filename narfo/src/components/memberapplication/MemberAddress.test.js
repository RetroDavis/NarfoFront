import { configure, shallow } from 'enzyme';
import React, { Component } from 'react'
import MemberAddress from './MemberAddress';     
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})


describe("A suite", () => {
    
    it('should render without throwing an error', () => {
        expect(shallow(<MemberAddress/>).find('form.MemberRegister').exists()).toBe(true)
        })

  }); 