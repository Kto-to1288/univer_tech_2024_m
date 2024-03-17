import React, { Component, useState, setState, useRef, useMemo, useCallback } from "react";
import { useEffect } from "react";
// import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
import './Layout.css'
// import classes from './Layout.module.css'
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";

export const PageLayout = ({ children }) => {

    const { Header, Content, Footer } = Layout
    const MenuItems = [
        { id: 1, label: 'Главная', key: 1, link: '/' },
        { id: 2, label: 'Инфо', key: 2, link: '/info' },
        { id: 3, label: 'Пользователь', key: 3, link: '/user' },
        { id: 4, label: 'Вход/Регистрация', key: 4, link: 'log' }
    ]
    const navigate = useNavigate()
    const handleNavigate = (key) => {
        let link = MenuItems.find((item) => item.key == key)
        if (link) {
            navigate(link.link)
        }
    }
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Menu
                    items={MenuItems}
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['1']}
                    onClick={({ key }) => handleNavigate(key)}
                />
            </Header>
            <Content>
                <Layout>
                    <Sider theme='light'><Menu
                        items={MenuItems}
                        defaultSelectedKeys={['1']}
                        onClick={({ key }) => handleNavigate(key)}
                    />
                    </Sider>
                    <Content style={{ height: '100vh', overFlowY: 'auto', margin: '0 auto' }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer></Footer>
        </Layout >

    )


}

