import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import UserSidebarContainer from '../containers/UserSidebarContainer';

export class UserProfile extends Component {
	constructor(props) {
		super(props);
  }

  render() {
    return (
      <div>
      <h1>Contact Information</h1>
        <div className="col-xs-2">
          <UserSidebarContainer />
        </div>
        <div className="container">  
			  <form method="post" action="">
          <h3>Shipping Information</h3>
          <label>Name:  </label>
          <input type="text" className="Name" id="Name" placeholder={this.props.user.name} />
          <p></p>
          <label>Shipping Address: </label>
          <input type="text" className="ShippingAddy" id="ShippingAddy" />
          <p></p>
          <label>City: </label>
          <input type="text" className="City" id="City" />
          <p></p>
          <label>State: </label>
          <input type="text" className="State" id="State" />
          <p></p>
          <label>Zipcode: </label>
          <input type="text" className="Zipcode" id="Zipcode" />
          <p></p>
          <label>Email: </label>
          <input type="text" className="Email" id="Email" placeholder={this.props.user.email}/>
          <p></p>
          <input type="submit" className="submit" value="Edit" className="submit-button" />
			  </form>
        </div>

        <div className="container">  
			  <form method="post" action="">
          <h3>Billing Information</h3>
          <label>Name: </label>
          <input type="text" className="Name" id="Name" placeholder={this.props.user.name} />
          <p></p>
          <label>Billing Address: </label>
          <input type="text" className="BillingAddy" id="BillingAddy" />
          <p></p>
          <label>City: </label>
          <input type="text" className="City" id="City" />
          <p></p>
          <label>State: </label>
          <input type="text" className="State" id="State" />
          <p></p>
          <label>Zipcode: </label>
          <input type="text" className="Zipcode" id="Zipcode" />
          <p></p>
          <label>Email: </label>
          <input type="text" className="Email" id="Email" placeholder={this.props.user.email}/>
          <p></p>
          <input type="submit" className="submit" value="Edit" className="submit-button" />
			  </form>
        </div>
      </div>
    );

    }

}

const mapStateToProps = state => {
	return ({ user: state.auth });
};


export default connect(mapStateToProps)(UserProfile);
