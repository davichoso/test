import React, { useState, useRef, useEffect } from 'react'
import { Row, Col } from 'antd';
//import { DatePicker, Space } from 'antd';
import es from 'date-fns/locale/es';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { Form, Input, Button, Checkbox, Layout, Menu, Breadcrumb, Alert, message, Modal } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useForm, Controller } from "react-hook-form";
import { useMutation, gql, useQuery } from '@apollo/client';
import { Table, Tag, Space } from 'antd';
import { Link } from "react-router-dom"
import { ExclamationCircleOutlined, SearchOutlined, VerticalAlignTopOutlined, VerticalAlignBottomOutlined, DeleteOutlined, CloudUploadOutlined, InboxOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { UsersTable } from './components/usersTable'
const { Content } = Layout;



export default (props) => {

    const getUsersQuery = gql`query getUsers{getUsers{ _id, title, username, birthDate, createdAt, updatedAt }}`;
    const { loading, error, data, refetch } = useQuery(getUsersQuery);


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const { getUsers } = data;


    return <div className={'login__container'} style={{ maxWidth: 'min-content' }}>
        <div className={'login__box'}>
            <div style={{ padding: '45px 50px 30px' }}>
                <h1 style={{ display: 'inline-block' }}>Usuarios Registrados</h1>

                <Link to="/" style={{ float: 'right' }}>
                    <Button type="primary" icon={<PlusOutlined />}></Button>
                </Link>
                <UsersTable data={getUsers} />

            </div>
        </div>
    </div >





}