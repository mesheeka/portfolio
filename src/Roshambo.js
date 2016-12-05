import React, {Component} from 'react';


class Roshambo extends Component {
	constructor(props) {
		super(props);
		this.state = {firstTime:true};
	}
	rules(){
		return (
			<div>
				<h3>Fox, Chief, Hunter</h3>
				<p>The chief orders his tribe to expand to a nearby valley up river. This valley happens to be the hunting grounds for a supernatural fox. The fox naturally starts to eat some of the tribesmen. The chief in a panic sends out his headhunters and prepares his own battle totems.</p>
				<p>You are going to chose to play as the fox, the chief, or the hunter.</p>
				<button onClick={() => this.setState({firstTime:false, start:true})}>start</button>
			</div>
		);
	}
	start() {
		if(this.state.start) {
			return (
				<div>
					<p>choose your player</p>
					<button onClick={() => this.setState({start:false, userChoice:'fox'})}>Fox</button>
					<button onClick={() => this.setState({start:false, userChoice:'chief'})}>Chief</button>
					<button onClick={() => this.setState({start:false, userChoice:'hunter'})}>Hunter</button>
				</div>
			);
		} else {
			let outcome = this.roshambo(this.state.userChoice);
			return (
				<div>
					{outcome}
					<button onClick={() => this.setState({start:true, userChoice:null})}>replay</button>
				</div>
					
			)
		}
	}
	roshambo(userChoice) {
		//now the AI chooses
		let computerChoice = Math.random();
		if (computerChoice < 0.34) {
			computerChoice = "fox";
		} else if(computerChoice <= 0.67) {
			computerChoice = "chief";
		} else {
			computerChoice = "hunter";
		}
		// matchups
		if(userChoice === computerChoice) {
			return (<p>You go unto the night...and return at dawn. Nothing happened last night. game over</p>);
		} else if (userChoice === 'fox') {
			if (computerChoice === 'chief') {
				return (<p>Crouching low in the tall grass you pounce and bite down on the chiefs neck severing his throat! You win</p>);
			} else {
				return (<p>The hunter baits you into a nearby cave entrance. You are trapped by a snare and shot with the shamans arrows! You lose</p>);
			}
		} else if (userChoice === 'chief') {
			if (computerChoice === 'hunter') {
				return (<p>At dawn the hunter returns. He didn't kill the fox, instead he is posesed by the fox and in a mad rage! The fox limited by the hunters body gives you an advantage! You kill the hunter. You win</p>);
			} else {
				return (<p>You are out on patrol. You see a shadow in front of you and you hear something behind you. You turn around as the fox bites down on your neck! You lose</p>);
			}
		} else if (userChoice === 'hunter') {
			if (computerChoice === 'fox') {
				return (<p>You carefully snare a nearby cave entrance and bait the area. In your hide you pull back on your bow and release the arrow the shaman gave you. Headshot! You win</p>);
			} else {
				return (<p>The chief calls you in to his hut. He is unhappy that the fox is still out there. He has you killed. You lose</p>);
			}
		}

	}
	render() {

		return this.state.firstTime ? this.rules() : this.start();
		
	}
}
export default Roshambo;