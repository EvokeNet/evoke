import React, { Component } from 'react';

import './Campaign.css';

import Campaign from './Campaign.js';
import Formatter from "../util/Formatter";

class MakeCampaignDonation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donation: 0
    }

    this.handleDonation = this.handleDonation.bind(this);
    this.format = this.format.bind(this);
  }

  format(amount) {
    const formatter = new Formatter();

    return formatter.format(amount);
  }

  handleDonation(event) {
    const amount = event.target.value;

    this.setState({
      donation: amount
    });
  }

  render() {
    return (
      <section className="content">
        <div className="campaign-instance">
          <h7>Campaign Instance Name 1</h7>
          <h8>Funding Goal&nbsp;<span>2400 EVC</span></h8>
          <div className="campaign-instance-content">
            <p className="no-margins">
              When television was young, there was a hugely popular show based on the still popular fictional character of Superman. The opening of that show had a familiar phrase that went, “Look. Up in the sky. It’s a bird. It’s a plane. It’s Superman!” How beloved Superman has become in our culture and the worldwide fascination with extraterrestrials and all things cosmic only emphasizes that there is a deep curiosity in all humans about nature and astronomy, even if many people would not know to call it astronomy…
            </p>
          </div>
          <div className="campaign-instance-content">
            <div className="campaign-instance-evc-input">
              <input type="text" data-donation-input value={ this.state.donation } onChange={ this.handleDonation } className="campaign-instance-evc-input-txt" />
              <div>EVC</div>
            </div>
            <input type="button" value="Fund" className="fund-btn" />
          </div>
        </div>
      </section>
    );
  }
}

export default MakeCampaignDonation;
