import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Simon extends Component {

  constructor(props) {
       super(props);

       this.state = {
         isModalOpen: false,
       };
       this.toggleModal = this.toggleModal.bind(this);
     }

     toggleModal() {
       this.setState({
         isModalOpen: !this.state.isModalOpen
       });
     }


  render() {
    return(

      <React.Fragment>

        <Navbar dark expand="md">
          <div className="container">
              <NavbarBrand className="mr-auto" href="#"></NavbarBrand>
                    <Nav navbar>
                      <NavItem>
                        <NavLink className="nav-link" to='/index'>Inicio</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/aboutus'>Semanas</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link"  to='/menu'> Actividades Entregadas</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/contactus'> Contacto</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/contactus'> Herramientas</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/contactus'> Comunicados</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link"  to='/'> Inicio</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link"  to='/contactus'> Contacto</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link"  to='/aboutus'> Sobre nosotros</NavLink>
                      </NavItem>
                      </Nav>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <Button outline onClick={this.toggleModal}>Login</Button>
                          </NavItem>
                      </Nav>
                </div>
              </Navbar>


          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
              <ModalBody>
              </ModalBody>
          </Modal>
        </React.Fragment>
    );
  }
}

export default Simon;
