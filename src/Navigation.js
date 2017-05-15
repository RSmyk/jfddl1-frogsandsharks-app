import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {
    Grid,
    Col,
    Row,
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap'
import {
    IndexLinkContainer,
    LinkContainer
} from 'react-router-bootstrap'

import Home from './Home'
import FirstPage from './FirstPage'

const Navigation = () => (
    <Router>
        <Grid>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <IndexLinkContainer to="/">
                        <NavItem href="#">Home</NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to="/firstpage">
                        <NavItem href="#">FirstPage</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>

            <Row>
                <Col md={12}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/firstpage" component={FirstPage}/>
                </Col>
            </Row>
        </Grid>
    </Router>
)
export default Navigation
