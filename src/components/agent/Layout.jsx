import React, { Component } from 'react';
import Messages from './Messages';
import Input from './Input';

function randomName() {
	const adjectives = ['Support'];
	const nouns = [' Agent'];
	const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	const noun = nouns[Math.floor(Math.random() * nouns.length)];
	return adjective + noun;
}

function randomColor() {
	return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

class Layout extends Component {
	state = {
		messages: [],
		member: {
			username: randomName(),
			color: randomColor(),
		},
	};

	onSendMessage = message => {
		this.drone.publish({
			room: 'observable-client',
			message,
		});
	};

	constructor() {
		super();
		this.drone = new window.Scaledrone('E9h7JktHk3eWgAcr', {
			data: this.state.member,
		});
		this.drone.on('open', error => {
			if (error) {
				return console.error(error);
			}
			const member = { ...this.state.member };
			member.id = this.drone.clientId;
			this.setState({ member });
		});
		const room = this.drone.subscribe('observable-client');
		room.on('data', (data, member) => {
			const messages = this.state.messages;
			messages.push({ member, text: data });
			this.setState({ messages });
		});
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h4>Customer Support Agent</h4>
				</div>
				<div className="App-body">
					<div className="App-body-left">
						<div className="App-body-left1">the first left id here</div>
						<div className="App-body-left2">the second left is here</div>
					</div>
					<div className="App-body-right">
						<Messages messages={this.state.messages} currentMember={this.state.member} />
						<Input onSendMessage={this.onSendMessage} />
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;
