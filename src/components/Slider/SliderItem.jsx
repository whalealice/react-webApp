import React,{Component} from 'react';

export default class SliderItem extends Component{
	constructor(props) {
	  super(props);
	}

	render(){
		let item = this.props.item;
		let width = document.documentElement.clientWidth + "px"; //计算它占父组件的宽度百分比。
		return (
			<li className="slider-item" style={{width:width}}>
				<img src={item.image} />
				<p>{item.title}</p>
			</li>
		)
	}
}