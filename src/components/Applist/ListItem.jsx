import React,{Component} from 'react';

export default class AppItem extends Component{
	constructor(props) {
	  super(props);
	}
	render(){
		let item = this.props.item
		return (
			<li className="list-item" >
				<p>{item.title}</p>
				<img src={item.images[0]}/>
			</li>
		)
	}
}