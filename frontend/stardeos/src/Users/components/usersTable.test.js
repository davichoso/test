import React, { Component } from 'react'
import { render, mount, shallow } from 'enzyme';
import { UsersTable } from './usersTable';


describe('<UsersTable />', () => {
    it('renders <h2>Sin datos</h2> when data is not defined', () => {
        const wrapper = shallow(<UsersTable />); 
        expect(wrapper.html()).toEqual('<h2>Sin datos</h2>'); 
    });


    it('renders <h2>Sin datos</h2> when data is empty', () => {
        const wrapper = shallow(<UsersTable data={[]} />); 
        expect(wrapper.html()).toEqual('<h2>Sin datos</h2>'); 
    });


})