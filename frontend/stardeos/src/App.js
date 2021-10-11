import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import "react-datepicker/dist/react-datepicker.css";
import { Form, Input, Button, Checkbox, Layout, Menu, Breadcrumb } from 'antd';

import LoginForm from './Users/form'
import List from './Users/list'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Content className="login-page">

          <Switch>
            <Route path="/list">
              <List />
            </Route>

            <Route path="/">
              <LoginForm />
            </Route>
          </Switch>
        </Content>

      </Layout>

    </Router>
  );
}

export default App;
