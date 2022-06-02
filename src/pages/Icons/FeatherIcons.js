import React from 'react';
import {Row, Col, Breadcrumb} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';
import * as Icon from 'react-feather';


class FeatherIcons extends React.Component {
    state = {
        sideMenu: true
    };

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    render() {
        return (
            <div className="page-wrapper"> 
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}
                
                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? 'hide-sidemenu' : ''}`}>
                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>Feather Icons</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Feather Icons</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Feather Icons */}
                    <Row>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.User 
                                    className="icon" 
                                />
                                <span>user</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.UserCheck 
                                    className="icon" 
                                />
                                <span>user-check</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.UserMinus 
                                    className="icon" 
                                />
                                <span>user-minus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.UserPlus 
                                    className="icon" 
                                />
                                <span>user-plus </span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.UserPlus 
                                    className="icon" 
                                />
                                <span>user-plus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.UserX 
                                    className="icon" 
                                />
                                <span>user-x</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.UserMinus 
                                    className="icon" 
                                />
                                <span>users</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.UserPlus 
                                    className="icon" 
                                />
                                <span>user-plus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Inbox 
                                    className="icon" 
                                />
                                <span>inbox</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Activity 
                                    className="icon" 
                                />
                                <span>activity</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Gift 
                                    className="icon" 
                                />
                                <span>gift</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Airplay 
                                    className="icon" 
                                />
                                <span>airplay</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.AlertCircle 
                                    className="icon" 
                                />
                                <span>alert-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.AlertOctagon 
                                    className="icon" 
                                />
                                <span>alert-octagon</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.AlertTriangle 
                                    className="icon" 
                                />
                                <span>alert-triangle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.AlignCenter 
                                    className="icon" 
                                />
                                <span>align-center</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.AlignJustify 
                                    className="icon" 
                                />
                                <span>align-justify</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.AlignLeft 
                                    className="icon" 
                                />
                                <span>align-left</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.AlignRight 
                                    className="icon" 
                                />
                                <span>align-right</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Aperture 
                                    className="icon" 
                                />
                                <span>aperture</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Archive 
                                    className="icon" 
                                />
                                <span>archive</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ArrowDownCircle 
                                    className="icon" 
                                />
                                <span>arrow-down-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ArrowDown 
                                    className="icon" 
                                />
                                <span>arrow-down</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ArrowLeftCircle 
                                    className="icon" 
                                />
                                <span>arrow-left-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ArrowLeft 
                                    className="icon" 
                                />
                                <span>arrow-left</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ArrowDownRight 
                                    className="icon" 
                                />
                                <span>arrow-down-right</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ArrowRight 
                                    className="icon" 
                                />
                                <span>arrow-right</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ArrowUpCircle 
                                    className="icon" 
                                />
                                <span>arrow-up-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ArrowUp 
                                    className="icon" 
                                />
                                <span>arrow-up</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.AtSign 
                                    className="icon" 
                                />
                                <span>at-sign</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Award 
                                    className="icon" 
                                />
                                <span>award</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.BarChart2 
                                    className="icon" 
                                />
                                <span>bar-chart-2</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.BarChart 
                                    className="icon" 
                                />
                                <span>bar-chart</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Bell 
                                    className="icon" 
                                />
                                <span>bell</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.BellOff 
                                    className="icon" 
                                />
                                <span>bell-off</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Bookmark 
                                    className="icon" 
                                />
                                <span>bookmark</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Briefcase 
                                    className="icon" 
                                />
                                <span>briefcase</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Calendar 
                                    className="icon" 
                                />
                                <span>calendar</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Camera 
                                    className="icon" 
                                />
                                <span>camera</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.CheckCircle 
                                    className="icon" 
                                />
                                <span>check-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.CheckSquare 
                                    className="icon" 
                                />
                                <span>check-square</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Check 
                                    className="icon" 
                                />
                                <span>check</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ChevronDown 
                                    className="icon" 
                                />
                                <span>chevron-down</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ChevronLeft 
                                    className="icon" 
                                />
                                <span>chevron-left</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ChevronRight 
                                    className="icon" 
                                />
                                <span>chevron-right</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ChevronUp 
                                    className="icon" 
                                />
                                <span>chevron-up</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Clock 
                                    className="icon" 
                                />
                                <span>clock</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Code 
                                    className="icon" 
                                />
                                <span>code</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Copy 
                                    className="icon" 
                                />
                                <span>copy</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.CreditCard 
                                    className="icon" 
                                />
                                <span>credit-card</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Database 
                                    className="icon" 
                                />
                                <span>database</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Delete 
                                    className="icon" 
                                />
                                <span>delete</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.DollarSign 
                                    className="icon" 
                                />
                                <span>dollar-sign</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Download 
                                    className="icon" 
                                />
                                <span>download</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Edit 
                                    className="icon" 
                                />
                                <span>edit</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Edit2 
                                    className="icon" 
                                />
                                <span>edit2</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Edit3 
                                    className="icon" 
                                />
                                <span>edit3</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ExternalLink 
                                    className="icon" 
                                />
                                <span>external-link</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Eye 
                                    className="icon" 
                                />
                                <span>eye</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Facebook 
                                    className="icon" 
                                />
                                <span>facebook</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Twitter 
                                    className="icon" 
                                />
                                <span>twitter</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Linkedin 
                                    className="icon" 
                                />
                                <span>linkedin</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.File 
                                    className="icon" 
                                />
                                <span>file</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.FilePlus 
                                    className="icon" 
                                />
                                <span>file-plus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.FileMinus 
                                    className="icon" 
                                />
                                <span>file-minus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Flag 
                                    className="icon" 
                                />
                                <span>flag</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Folder 
                                    className="icon" 
                                />
                                <span>folder</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Frown 
                                    className="icon" 
                                />
                                <span>frown</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Grid 
                                    className="icon" 
                                />
                                <span>grid</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Headphones 
                                    className="icon" 
                                />
                                <span>headphones</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Heart 
                                    className="icon" 
                                />
                                <span>heart</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.HelpCircle 
                                    className="icon" 
                                />
                                <span>help-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Home 
                                    className="icon" 
                                />
                                <span>home</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Info 
                                    className="icon" 
                                />
                                <span>info</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Layers 
                                    className="icon" 
                                />
                                <span>layers</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Layout 
                                    className="icon" 
                                />
                                <span>layout</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Link 
                                    className="icon" 
                                />
                                <span>Link</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.List 
                                    className="icon" 
                                />
                                <span>list</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Lock 
                                    className="icon" 
                                />
                                <span>lock</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.LogIn 
                                    className="icon" 
                                />
                                <span>login</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.LogOut 
                                    className="icon" 
                                />
                                <span>logout</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Mail 
                                    className="icon" 
                                />
                                <span>mail</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.MapPin 
                                    className="icon" 
                                />
                                <span>map-pin</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Map 
                                    className="icon" 
                                />
                                <span>map</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Menu 
                                    className="icon" 
                                />
                                <span>menu</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Meh 
                                    className="icon" 
                                />
                                <span>meh</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.MessageCircle 
                                    className="icon" 
                                />
                                <span>message-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.MessageSquare 
                                    className="icon" 
                                />
                                <span>message-square</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Mic 
                                    className="icon" 
                                />
                                <span>mic</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.MinusCircle 
                                    className="icon" 
                                />
                                <span>minus-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Minus 
                                    className="icon" 
                                />
                                <span>minus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Monitor 
                                    className="icon" 
                                />
                                <span>monitor</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Moon 
                                    className="icon" 
                                />
                                <span>moon</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Move 
                                    className="icon" 
                                />
                                <span>move</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Music 
                                    className="icon" 
                                />
                                <span>music</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Package 
                                    className="icon" 
                                />
                                <span>package</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.PhoneCall 
                                    className="icon" 
                                />
                                <span>phone-call</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.PhoneForwarded 
                                    className="icon" 
                                />
                                <span>phone-forwarded</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.PhoneIncoming 
                                    className="icon" 
                                />
                                <span>phone-incoming</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.PhoneMissed 
                                    className="icon" 
                                />
                                <span>phone-missed</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.PhoneOff 
                                    className="icon" 
                                />
                                <span>phone-off</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.PhoneOutgoing 
                                    className="icon" 
                                />
                                <span>phone-outgoing</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Phone 
                                    className="icon" 
                                />
                                <span>phone</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.PieChart 
                                    className="icon" 
                                />
                                <span>pie-chart</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Play 
                                    className="icon" 
                                />
                                <span>play</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Plus 
                                    className="icon" 
                                />
                                <span>plus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Power 
                                    className="icon" 
                                />
                                <span>power</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Printer 
                                    className="icon" 
                                />
                                <span>printer</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.RefreshCcw 
                                    className="icon" 
                                />
                                <span>refresh-ccw</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Save 
                                    className="icon" 
                                />
                                <span>save</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Search 
                                    className="icon" 
                                />
                                <span>search</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Send 
                                    className="icon" 
                                />
                                <span>send</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Server 
                                    className="icon" 
                                />
                                <span>server</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Settings 
                                    className="icon" 
                                />
                                <span>settings</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Share 
                                    className="icon" 
                                />
                                <span>share</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Share2 
                                    className="icon" 
                                />
                                <span>share2</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ShoppingBag 
                                    className="icon" 
                                />
                                <span>shopping-bag</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ShoppingCart 
                                    className="icon" 
                                />
                                <span>shopping-cart</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Star 
                                    className="icon" 
                                />
                                <span>star</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ThumbsUp 
                                    className="icon" 
                                />
                                <span>thumbs-up</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.ThumbsDown 
                                    className="icon" 
                                />
                                <span>thumbs-down</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Trash 
                                    className="icon" 
                                />
                                <span>trash</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Trash2 
                                    className="icon" 
                                />
                                <span>trash2</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Trello 
                                    className="icon" 
                                />
                                <span>trello</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.TrendingUp 
                                    className="icon" 
                                />
                                <span>trending-up</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.TrendingDown 
                                    className="icon" 
                                />
                                <span>trending-down</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Upload 
                                    className="icon" 
                                />
                                <span>upload</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icon.Wifi 
                                    className="icon" 
                                />
                                <span>wifi</span>
                            </div>
                        </Col>
                    </Row>
                    {/* End Feather Icons */}

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

export default FeatherIcons;