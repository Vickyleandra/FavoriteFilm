import React, { Component } from "react";

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "https://post-a-form.herokuapp.com/api/movies/";
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie ${res.title} has been successfully added!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert(`There was an error while adding the movie`);
      });
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>Movie Name</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="title">Name of film</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.lastname}
                required
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Url</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
                required
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">comment</label>
              <input
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                required
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
