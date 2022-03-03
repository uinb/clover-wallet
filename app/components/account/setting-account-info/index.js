import React, { Component } from "react";
import "./styles.css";
import { shortenAddress } from "../../../services/wallet-service";
import bgimgs from "../../../images/card_bg.png"
export default class SettingAccountDetails extends Component {
  render() {
    const { alias, address, ...otherProps } = this.props;
    return (
      <div className="account-info-wrapper" style={{backgroundImage:"url("+bgimgs+")"}} {...otherProps}>
        <span className="account-info-alias">{alias}</span>
        <span className="account-info-address">{shortenAddress(address)}</span>
        <div className="account-connect-status">
          <span>Connected</span>
        </div>
      </div>
    );
  }
}
