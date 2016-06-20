import React,{Component} from 'react'
import './Applist.css'
import AppItem from './ListItem.jsx'
import ItemTitle from './ItemTitle.jsx'


export default class Applist extends Component{
	constructor(props) {
	  super(props);
	}
	render(){
		let opts = this.props.item.stories;
		let listNodes = opts.map((item,i)=>{
			return(
				<AppItem item={item} key={i}/>
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