import React, { Component } from 'react'
import { render, mount, shallow } from 'enzyme';
import { UsersTable } from './usersTable';

const data = {}

describe('<UsersTable />', () => {
    it('renders <h2>Sin datos</h2> when data is not defined', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.html()).toEqual('<h2>Sin datos</h2>');
    });

    it('renders <h2>Sin datos</h2> when data is empty', () => {
        const wrapper = shallow(<UsersTable data={[]} />);
        expect(wrapper.html()).toEqual('<h2>Sin datos</h2>');
    });


    it('renders an `.users_table`', () => {        
        const wrapper = render(<UsersTable data={[{ _id: 'test', title: "test", usernaame: 'test', birthDate: new Date(), createdAt: new Date(), updatedAt: new Date() }]} />);
        expect(wrapper.hasClass('users_table')).toBe(true);
    });

    // it('should contain a input field', () => {
    //     const wrapper = render(
    //         <Dashboard store={mockStore({ weatherStation: { status: STATUS } })} />,
    //     );
    //     expect(wrapper.find('.city-input')).toHaveLength(1);
    // });

    // it('should contain a change city button', () => {
    //     const wrapper = render(
    //         <Dashboard store={mockStore({ weatherStation: { status: STATUS } })} />,
    //     );
    //     expect(wrapper.find('#change-city-btn')).toHaveLength(1);
    // });

    // it('should contain app heading', () => {
    //     const wrapper = mount(
    //         <Dashboard store={mockStore({ weatherStation: { status: STATUS } })} />,
    //     );
    //     const heading = <h1 className="heading">5-Day Weather Forecast</h1>;
    //     expect(wrapper.contains(heading)).toEqual(true);
    // });

    // it('should receive city prop', () => {
    //     const wrapper = shallow(
    //         <Dashboard
    //             city="london"
    //             store={mockStore({ weatherStation: { status: STATUS } })}
    //         />,
    //     );
    //     expect(wrapper.prop('city')).toBeDefined();
    // });






})