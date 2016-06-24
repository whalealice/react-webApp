import React,{Component} from 'react'
import './Applist.css'
import ItemTitle from './ItemTitle.jsx'


export default class Applist extends Component{
	constructor(props) {
	  super(props);
	}
	render(){
		let opts = this.props.item.stories;
		let listNodes = opts.map((item,i)=>{
			return(
				<li item={item} key={i} className="list-item" >
					<p>{item.title}</p>
					<img src={item.images[0]}/>
				</li>
			)
		})
		let date = this.props.item.date

		return(
			<div className="Applist">
				{this.props.title?<ItemTitle date={date}/>:null}
				<ul>
					{listNodes}
				</ul>
			</div>
		)
	}
}