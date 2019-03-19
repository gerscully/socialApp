// eventForm
import React, { Component } from 'react';

class EventForm extends Component {
  state = { title: '', description: '', type: '', evtstatus: '' };
  handleAdd = (e) => {
    e.preventDefault();
    let title = this.state.title.trim();
    let description = this.state.description.trim();
    let type = this.state.type.trim();
    let evtstatus = this.state.evtstatus.trim();
    if (!title || !description || !type || !evtstatus) {
      return;
    }
    this.props.addHandler(title, description, type, evtstatus);
    this.setState({ title: '', description: '', type: '', evtstatus: '' });
  }
  handleTitleChange = (e) => this.setState({ title: e.target.value });
  handleDescriptionChange = (e) => this.setState({ description: e.target.value });
  handleTypeChange = (e) => this.setState({ type: e.target.value });
  handleEvtstatusChange = (e) => this.setState({ evtstatus: e.target.value });

  render() {
    return (
      <form style={{ marginTop: '30px' }}>
        <h3>Add a New Event</h3>
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="Type"
            value={this.state.type}
            onChange={this.handleTypeChange}
          />
        </div>
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="Event Status"
            value={this.state.evtstatus}
            onChange={this.handleEvtstatusChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={this.handleAdd}>Add Event</button>
      </form>
    );
  }
}
export default EventForm