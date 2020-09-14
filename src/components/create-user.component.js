// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';
import './login.css';

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUseraccount = this.onChangeUseraccount.bind(this);
        this.onChangeUsercontactNo = this.onChangeUsercontactNo.bind(this);
        this.onChangeUserRegion = this.onChangeUserRegion.bind(this);
        this.onChangeUserInquiry = this.onChangeUserInquiry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            account: '',
            contactnumber: '',
            region: '',
            inquirytype: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeUseraccount(e) {
        this.setState({ account: e.target.value })
    }
    onChangeUsercontactNo(e) {
        this.setState({ contactnumber: e.target.value })
    }
    onChangeUserRegion(e) {
        this.setState({ region: e.target.value })
    }
    onChangeUserInquiry(e) {
        this.setState({ inquirytype: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            email: this.state.email,
            account: this.state.account,
            contactnumber: this.state.contactnumber,
            region: this.state.region,
            inquirytype: this.state.inquirytype
        };

        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({
            name: '',
            email: '',
            account: '',
            contactnumber: '',
            region: '',
            inquirytype: ''
        })
    }


    render() {
        return (
            
            
                <div className="wrapper">
            <title> TAKE THE FIRST STEP </title>
   <link rel="stylesheet" href="styles.css"/>
            <div id="Topcontent">
       <h1>TAKE THE FIRST STEP</h1>
       <p id="line1">Serving community by looking forward as well as back is a big picture, but the power of today's new digital capabilities is vast and growing</p>
       <p id="line2">Let's talk about how you can be part of the community...</p>
   </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        
                        <input type="text" className="form-control" id="name" 
                        value={this.state.name} onChange={this.onChangeUserName}placeholder="NAME*"/>
                    </div>
                    <div className="form-group">
                      
                        <input type="text"  className="form-control" id="email"
                        value={this.state.email} onChange={this.onChangeUserEmail} placeholder="EMAIL*"/>
                    </div>
                    <div className="form-group">
                      
                      <input type="text"  className="form-control" id="account"   
                      value={this.state.account} onChange={this.onChangeUseraccount} placeholder="ACCOUNT*"/>
                  </div>
                  <div className="form-group">
                      
                      <input type="text"  className="form-control" id="contactnumber" 
                      value={this.state.contactnumber} onChange={this.onChangeUsercontactNo} 
                      placeholder="CONTACT NUMBER*"/>
                  </div>
                  <div className="form-group">
                      
                      <input type="text"  className="form-control" id="region" 
                      value={this.state.region} onChange={this.onChangeUserRegion} placeholder="REGION*"/>
                  </div>
                  <div className="form-group">
                      
                      <input type="text"  className="form-control" id="inquirytype"
                      value={this.state.inquirytype} onChange={this.onChangeUserInquiry} placeholder="INQUIRY TYPE*"/>
                  </div>
                    <div className="createuser">
                        <input type="submit" value="Submit" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}