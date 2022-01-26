import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '../assets/Navbar.css'
import { Link, Route, Routes } from 'react-router-dom'
import Company from './Company'
import CompanyList from './CompanyList'
import Vehicle from './Vehicle'
import VehicleList from './VehicleList';
import Tracking from './Tracking'
import TrackingList from './TrackingList'
import VehicleTypeList from './VehicleTypeList';
import VehicleType from './VehicleType'
import VehicleEdit from './VehicleEdit'
import Home from './Home'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="title" href="/home">ZUMBEROGLU</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown className="dropdowns" nav inNavbar>
                <DropdownToggle nav caret>
                  Vehicle
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                  <Link to="/vehicle" className="dropdown-link">Create Vehicle</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/vehicles" className="dropdown-link">Vehicle List</Link>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="dropdowns" nav inNavbar>
                <DropdownToggle nav caret>
                  Company
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    <Link to="/company" className="dropdown-link">Create Company</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/companies" className="dropdown-link">Company List</Link>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="dropdowns" nav inNavbar>
                <DropdownToggle nav caret>
                  Tracking
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    <Link to="/tracking" className="dropdown-link">Create Tracking</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/trackings" className="dropdown-link">Tracking List</Link>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="dropdowns" nav inNavbar>
                <DropdownToggle nav caret>
                  Vehicle Type
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    <Link to="/v_type" className="dropdown-link">Create Vehicle Type</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/v_types" className="dropdown-link">Vehicle Type List</Link>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
            <Route path="/vehicle" element={<Vehicle/>}></Route>
            <Route path="/vehicles" element={<VehicleList/>}></Route>
            <Route path="/company" element={<Company/>}></Route>
            <Route path="/companies" element={<CompanyList/>}></Route>
            <Route path="/tracking" element={<Tracking/>}></Route>
            <Route path="/trackings" element={<TrackingList/>}></Route>
            <Route path="/v_type" element={<VehicleType/>}></Route>
            <Route path="/v_types" element={<VehicleTypeList/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/vehicles/:id" element={<VehicleEdit/>}></Route>
        </Routes>

      </div>
    );
  }
}