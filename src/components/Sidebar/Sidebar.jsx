import React,{Component} from 'react'

import './Sidebar.css'
import Add from '../../images/add.png'
// import SiderItem from './SiderItem.jsx'
import My from "../../images/my.jpg"

export default class Sidebar extends Component{
	constructor(props) {
	  	super(props);

		this.state = {
	  		liked:true
	  	};
	}
	handClick(){
		
		this.setState({liked: !this.state.liked});
		
	}
	render(){
		let title = ['首页','日常心理学','用户推荐','电影日报','不许无聊','设计日报','大公司设计','财经日报','互联网安全']
			
		var text = this.state.liked ? 'like' : 'active';

		let SiderItem = title.map((title,i)=>{
			return (
				<li className={text} key={i} onClick={this.handleClick}>
					<p>{title}</p>
					<img src={Add}/>
				</li>
			)
		})
		return (
			<div className="Sidebar">
				<div>
					<div className="SiderLog">
						<img src={My}/>
						<p>请登录</p>
					</div>	
					<ul className="SiderList">
						<li>
							<span></span>
							<p>收藏</p>
						</li>
						<li>
							<span></span>
							<p>消息</p>
						</li>
						<li>
							<span></span>
							<p>设置</p>
						</li>
					</ul>
				</div>
				<ul className="SiderItem" onClick={e=>this.handClick(e)}>{SiderItem}</ul>
			</div>
		)
	}
}