import React, { Component } from "react";
import Input from "../presentational/Input";


class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        <h6><b>Output:</b></h6>
        {this.state.seo_title}
      </form>
    );
  }
}
export default FormContainer;