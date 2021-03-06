// eventItem
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import buttons from '../../config/buttonsConfig';
import * as api from '../../../src/api';
import './eventItem.css';

class EventItem extends Component {
    //handleVote = () => this.props.upvoteHandler(this.props.post.id);
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
		this.state = {
            collapse: false,
			status: '',
			_id: this.props.post._id,
			title: this.props.post.title,
			description: this.props.post.description,
			type: this.props.post.type,
			evtstatus: this.props.post.evtstatus,
			previousDetails: {
				_id: this.props.post._id,
				title: this.props.post.title,
				description: this.props.post.description,
				type: this.props.post.type,
				evtstatus: this.props.post.evtstatus
			}
		}
    };
    handleEdit = () => this.setState(
        {
            status: 'edit',
            _id: this.props.post._id,
            title: this.props.post.title,
            description: this.props.post.description,
            type: this.props.post.type,
            evtstatus: this.props.post.evtstatus
        });

    handleSave = (e) => {
        e.preventDefault();
        let updatedTitle = this.state.title.trim();
        let updatedType = this.state.type.trim();
        let updatedDescription = this.state.description.trim();
        let updatedEvtstatus = this.state.evtstatus.trim();
        if (!updatedTitle || !updatedDescription || !updatedType || !updatedEvtstatus) {
            return;
        }
        let { _id, title, description, type, evtstatus } = this.state;
        this.setState({
            status: '',
            previousDetails: { _id, title, description, type, evtstatus }
        })
        api.update(_id, updatedTitle, updatedDescription, updatedType, updatedEvtstatus);
        this.setState({ status: ''});
    };
    handleTitleChange = (e) => this.setState({ _id: this.props.post._id, title: e.target.value });
    handleDescriptionChange = (e) => this.setState({ _id: this.props.post._id, description: e.target.value });
    handleTypeChange = (e) => this.setState({ _id: this.props.post._id, type: e.target.value });
    handleEvtstatusChange = (e) => this.setState({ _id: this.props.post._id, evtstatus: e.target.value });
    handleDelete = () => this.setState({ status: 'del', _id: this.props.post._id });
    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state._id);
        this.setState({ status: '' });
        this.setState({ collapse: false });
    };
    handleCancel = (e) => {
        e.preventDefault();
        this.setState({ status: '' });
        this.setState({ collapse: false });
    };
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        let line;
        line = <Button color="success" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.post.title}</Button>;

        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        if (this.state.status === 'edit') {
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
        } else if (this.state.status === 'del') {
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
        }

        return (
            <div >
                <span className="eventitem">{line}
                    <Collapse isOpen={this.state.collapse}>
                        <Card className="cardform">
                            <CardBody>
                                {this.state.status === 'edit' ?
                                    [
                                        <input type="text" className="form-control"
                                            value={this.state.type}
                                            onChange={this.handleTypeChange} />,
                                        <p></p>,
                                        <textarea type="text" className="form-control"
                                            value={this.state.description}
                                            onChange={this.handleDescriptionChange} />,
                                        <p></p>,
                                        <textarea type="text" className="form-control"
                                            value={this.state.evtstatus}
                                            onChange={this.handleEvtstatusChange} />,
                                        <p></p>
                                    ] :
                                    [
                                        <p key={'type'} ><u>{this.state.type}</u></p>,
                                        <p></p>,
                                        <p key={'description'} >{this.state.description}</p>,
                                        <p></p>,
                                    ]
                                }
                                <div className="btn-group" role="group">
                                    <button type="button"
                                        className={'btn ' + activeButtons.leftButtonColor}
                                        onClick={leftButtonHandler} >
                                        {activeButtons.leftButtonVal}
                                    </button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button"
                                        className={'btn ' + activeButtons.rightButtonColor}
                                        onClick={rightButtonHandler} >
                                        {activeButtons.rightButtonVal}
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                </span>
            </div>
        );
    }
}
export default EventItem;