import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoCartSharp } from "react-icons/io5";
import logo from '../assets/logo.png'

const Header = () => {
    return(
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} alt='ProShop'></img>
                        ProShop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls= 'basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/cart'><IoCartSharp />Cart</Nav.Link>
                            <Nav.Link href='/login'><FaUser />Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>


            </Navbar>
        </header>
    )
}

export default Header