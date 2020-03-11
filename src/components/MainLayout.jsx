import React, { Component } from 'react';
// import Modal from '../components/common/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerPage from '../components/customer/CustomerPage';
import Footer from './MainLayout'

class MainLayout extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                 <CustomerPage/>
                    <br/>
                <Footer/>
            </React.Fragment>
         );
    }
}

export default MainLayout;
