/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateNewModal extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            description: "",
            line: "",
            platform: "",
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal })
    };

    handleChange(event: any) {
        this.setState({ [event.currentTarget.name]: event.target.value });

        console.log(this.state)
    }

    save = (event: any) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                desc: this.state.description,
                line: this.state.line,
                platform: this.state.platform,
            })
        };
        fetch('https://localhost:5001/api/commands', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        this.toggleModal();
    }

    render(){
        return (
            <div>
                <Button color="secondary" onClick={this.toggleModal}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.showModal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="line">Command line</Label>
                                <Input type="text" name="line" id="commandLine" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" id="commandDescription" onChange={this.handleChange} placeholder="Describe your command" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="platform">Platform</Label>
                                <Input type="text" name="platform" id="commandPlatform" onChange={this.handleChange} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.save}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CreateNewModal;