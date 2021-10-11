import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';
import moment from 'moment';

const columns = [{
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    //   render: text => <a>{text}</a>,
},
{
    title: 'Nombres',
    dataIndex: 'title',
    key: 'title',
    //   render: text => <a>{text}</a>,
},
{
    title: 'Usuario',
    dataIndex: 'username',
    key: 'username',
}, {
    title: 'birthDate',
    dataIndex: 'birthDate',
    key: 'birthDate',
    // render: text => <>{moment(text).format('YYYY-MM-DD')}</>,
}, {
    title: 'createdAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
}, {
    title: 'updatedAt',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
}
]

export const UsersTable = ({ data }: { data: Array<{ _id: string, title: string, usernaame: string, birthDate: Date, createdAt: Date, updatedAt: Date, }> }) => {

    if (!data || !(data.length > 0)) {
        return <h2 >Sin datos</h2>
    }

    return <Table className={'users_table'} rowKey="_id" columns={columns} dataSource={data} />
}

