import React from 'react';

class CreateNewPost extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Title" id="title" type="text" />
                <label htmlFor="title">title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Textarea</label>
              </div>
            </div>
            <input type="submit" value="Add post" className="btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNewPost;
