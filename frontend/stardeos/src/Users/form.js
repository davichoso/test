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
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;

function addDate(dt, amount, dateType) {
    switch (dateType) {
        case 'days':
            return dt.setDate(dt.getDate() + amount) && dt;
        case 'weeks':
            return dt.setDate(dt.getDate() + (7 * amount)) && dt;
        case 'months':
            return dt.setMonth(dt.getMonth() + amount) && dt;
        case 'years':
            return dt.setFullYear(dt.getFullYear() + amount) && dt;
    }
}

export default (props) => {
    const [startDate, setStartDate] = useState(null);
    const { register, handleSubmit, control, watch, formState: { errors }, formState, setValue, setError, clearErrors, reset } = useForm();

    // (email:"davichoso@gmail.com",password:"asdfasdf",    username:"davichososss",title:"test", birthDate:"2007-12-03T10:15:30Z")
    const [createUser] = useMutation(gql`mutation 
    createUser($email: String!,$password: String!,$username: String!,$title: String!,$birthDate: DateTime! ){ 
        createUser(email:$email,password:$password,username:$username,title:$title, birthDate:$birthDate) { title }}`);
    const onSubmit = async (data) => {

        const key = 'updatableadd';
        message.loading({ content: 'Guardando Usuario..', key })

        createUser({
            variables: data
        }).then(() => {
            message.success({ content: 'Usuario guardado correctamente', key, duration: 2 });
            //  reset();
            //history.push('/products/images/' + uid)
        }).catch(e => {
            message.error({ content: 'no se puedo guardar el usuario', key, duration: 2 });
            Modal.error({
                title: 'Error',
                icon: <ExclamationCircleOutlined />,
                content: e.message,
                okText: 'ok',
                // cancelText: '取消',
            });
        })

        console.log(data);
    }

    console.log('render');

    const errormsg = (error, msg = '') => {

        if (error.message) {
            return error.message
        }

        if (error.type == "required") {
            return 'Este campo es requerido'
        }

        if (error.type == "minLength") {
            return 'min 6 max 12 chars'
        }

        return msg

    }
    const password = watch("password", "");


    return <div className={'login__container'}>
        <a style={{ width: '100%', display: 'block', textAlign: 'center', marginBottom: 40 }} class="jsx-457684865 login__container-logo" href="/">
            <div>
                <img style={{ display: 'block', margin: 'auto' }} alt="logo" src="https://stardeos.com/_next/image?url=%2Fassets%2Fimages%2Fstardeos02.png&w=1920&q=100" decoding="async" data-nimg="fill" sizes="100vw" />
            </div>
        </a>

        <div className={'login__box'}>
            <div style={{ padding: '45px 50px 30px' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Col span={24}>

                        <Row style={{ marginBottom: 20 }}>
                            <Col span={24}>
                                <input type="text" className={'ant-input'} placeholder="Nombre Completo" id="title" {...register("title", {
                                    required: 'es necesario tu nombre completo',

                                    minLength: {
                                        value: 8,
                                        message: "Tu nombre completo debe tener al menos 8 characters"
                                    }, maxLength: {
                                        value: 50,
                                        message: "Tu nombre completo no debe superar los 50 caracteres"
                                    }

                                })} />
                                {errors.title && <Alert message={<>{errormsg(errors.title)}</>} type="error" />}
                            </Col>
                        </Row>

                        <Row style={{ marginBottom: 20 }}>
                            <Col span={24}>
                                <input type="text" className={'ant-input'} placeholder="Usuario" id="username" {...register("username", {
                                    required: 'es necesario tu username',

                                    minLength: {
                                        value: 6,
                                        message: "Tu username debe tener al menos 6 characters"
                                    }, maxLength: {
                                        value: 30,
                                        message: "Tu username no debe superar los 30 caracteres"
                                    }


                                })} />
                                {errors.username && <Alert message={<>{errormsg(errors.username)}</>} type="error" />}
                            </Col>
                        </Row>


                        <Row style={{ marginBottom: 20 }}>
                            <Col span={24}>
                                <input type={'email'} className={'ant-input'} placeholder="email" id="email" {...register("email", { required: 'tu email es necesario', pattern: /^\S+@\S+$/i })} />
                                {errors.email && <Alert message={<>{errormsg(errors.email)}</>} type="error" />}
                            </Col>
                        </Row>

                        {/* {moment().subtract(18, 'years').format('YYYY MM DD') } */}
                        {/* <Row style={{ marginBottom: 20 }}>
                <Col span={24}>
                    <DatePicker
                        defaultPickerValue={moment().subtract(18, 'years')}
                        disabledDate={(birthday) => {
                            const age = moment().diff(birthday, 'years');
                            const isLegal = (age >= 18);
                            // console.log(isLegal)
                            return !isLegal
                        }}
                    /> 
                </Col>
            </Row> */}

                        <Row style={{ marginBottom: 20 }}>
                            <Col span={24}>
                                <Controller
                                    control={control}
                                    name="birthDate"
                                    rules={{ required: 'Necesitamos tu fecha de nacimiento' }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <DatePicker
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText="Fecha de nacimiento"
                                            showMonthDropdown
                                            showYearDropdown
                                            peekNextMonth
                                            dropdownMode="select"
                                            minDate={addDate(new Date(), -80, 'years')}
                                            maxDate={addDate(new Date(), -18, 'years')}
                                            selected={value}
                                            onChange={(x) => { onChange(x) }}
                                            locale={es}
                                            className="ant-input"
                                        />
                                    )}
                                />
                                {errors.birthDate && <Alert message={<>{errormsg(errors.birthDate)}</>} type="error" />}
                            </Col>
                        </Row>

                        <Row style={{ marginBottom: 20 }}>
                            <Col span={24}>
                                <input className={'ant-input'} placeholder="Contraseña" id="title" {...register("password",
                                    {
                                        required: "debes especificar un password",
                                        minLength: {
                                            value: 8,
                                            message: "Tu password debe tener al menos 8 characters"
                                        }, maxLength: {
                                            value: 12,
                                            message: "Tu password no debe superar los 12 caracteres"
                                        }
                                    })} />
                                {errors.password && <Alert message={<>{errormsg(errors.password)}</>} type="error" />}
                            </Col>

                        </Row>

                        <Row style={{ marginBottom: 20 }}>
                            <Col span={24}>
                                <input className={'ant-input'} placeholder="Confirma Contraseña" id="title2"

                                    {...register("password2", {
                                        required: "debes confirmar tu password",
                                        validate: value =>
                                            value === password || "Los passwords no son iguales"
                                    })}
                                />
                                {errors.password2 && <Alert message={<>{errormsg(errors.password2)}</>} type="error" />}

                            </Col>
                        </Row>

                        <Row style={{ marginBottom: 20 }}>
                            <Col span={24}>
                                <Button className={'button primary'} htmlType={'submit'} type="primary">Regístrate</Button>
                            </Col>
                        </Row>

                    </Col>
                </form>
            </div>
        </div>
    </div >




}