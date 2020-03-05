import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const CustomLayout = (props)=>{
    return(
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item><Link to="/clientes">Clientes</Link></Menu.Item>
              <Menu.Item><Link to="/productos">Productos</Link></Menu.Item>
              <Menu.Item><Link to="/carrito">Carrito</Link></Menu.Item>
              <Menu.Item><Link to="/categorias">Categorias</Link></Menu.Item>
              <Menu.Item><Link to="/stock">Stock</Link></Menu.Item>
              <Menu.Item><Link to="/nominaDept">Departamentos</Link></Menu.Item>
              <Menu.Item><Link to="/nominaDetallada">Empleados</Link></Menu.Item>
              <Menu.Item><Link to="/descuento">Descuentos</Link></Menu.Item>
              <Menu.Item><Link to="/listaDescuento">Descuentos Part</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
            </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children}
                </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Drinks ©2020 Created by Drinks</Footer>
        </Layout>
    )
}

export default CustomLayout;