import React from 'react';
import { Col, Container, Row, Nav, NavLink } from 'reactstrap';
import '../Header/Header.scss';
import { useDispatch,useSelector } from 'react-redux';
import {toggleClass} from '../../features/Cart/redux-slice/cartToggleSlice';
import { useState } from 'react';
const Header = props => {
    const [scrollTop, setscrollTop] = useState(false)
    const [menuHide, setmenuHide] = useState(true)
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartToggle = ()=>{
        const action = toggleClass();
        dispatch(action);
    }
        const changeBackground = ()=>{
           if(window.pageYOffset>0){
               setscrollTop(true);
               return;
           }
           setscrollTop(false);
        }
        window.addEventListener("scroll",changeBackground);
    return (
        <header className={!scrollTop?"header":"header scroll"}>
            <Container >
                <Row className="container-fluid justify-content-center mt-3">
                    <Col>
                        <h3 className="title">HÀNG NHẬT</h3>
                    </Col>
                    <Col className="nav">
                        <div className="cart-icon" onClick={cartToggle}>
                                <i className="fas fa-shopping-cart"></i>
                                <p className="cart-count">{cart.length}</p>
                            </div>
                        <div className="menu-icon" onClick={()=>{setmenuHide(!menuHide)}}><i className="fas fa-bars"></i></div>
                        <Nav pills className={menuHide?"nav-container hide":"nav-container"}>
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/Home">Mua</NavLink>
                            <NavLink href="/buyforme">Dịch vụ mua hộ</NavLink>
                            <NavLink href="/gopy">Góp ý</NavLink> 
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;