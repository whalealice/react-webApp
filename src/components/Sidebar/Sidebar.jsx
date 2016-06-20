import React,{Component} from 'react'

import './Sidebar.css'
import SiderLog from './SiderLog.jsx'
import Add from '../../images/add.png'
import SiderItem from './SiderItem.jsx'

export default class Sidebar extends Component{
	constructor(props) {
	  super(props);
	
	}
	
	render(){
		{/*let title = ['首页','日常心理学','用户推荐','电影日报','不许无聊','设计日报','大公司设计','财经日报','互联网安全']
			
		var text = this.state.liked ? 'like' : 'active';

		let SiderItem = title.map((title,i)=>{
			return (
				<li className={text} key={i} onClick={this.handleClick}>
					<p>{title}</p>
					<img src={Add}/>
				</li>
			)
		})*/}
		return (
			<div className="Sidebar">
				<SiderLog/>
				<ul className="SiderItem"><SiderItem/></ul>
			</div>
		)
	}
}