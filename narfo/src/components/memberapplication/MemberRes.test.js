import { configure, shallow } from 'enzyme';
import React, { Component } from 'react'
import MemberRes from './MemberRes';     
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})


describe("A suite", () => {
    
    it('should render without throwing an error', () => {
        expect(shallow(<MemberRes/>).find('form.MemberRegister').exists()).toBe(true)
        })

  }); 