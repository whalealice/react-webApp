import React,{Component} from 'react'

import './Sidebar.css'
import Add from '../../images/add.png'
import My from "../../images/my.jpg"
class SideCells extends Component{
	constructor(props) {
	  	super(props);
	  	this.state = {
	 	  	liked:true
	   	};
	}
	handClick(e){
		this.setState({liked: !this.state.liked});
		// if (e.target.className == '') {
		// 	e.target.className = 'active'
		// }
		
	}
	render(){
		var text = this.state.liked ? 'like' : 'active';
		return (
			<li className={text} onClick={e=>this.handClick(e)}>
					<p>{this.props.title}</p>
					<img src={Add}/>
				</li>
			)
	}

}
export default class Sidebar extends Component{
	constructor(props) {
	  	super(props);
	}
	render(){
		let titles = this.props.title;
		let title = ['首页','日常心理学','用户推荐','电影日报','不许无聊','设计日报','大公司设计','财经日报','互联网安全'];
		
		let SiderItem = title.map((title,index)=>{
			return (
				<SideCells key={index} title={title} data-key={index} ref={'aaa'+index}/>
			)
		});

		return (
			<div className={titles}>
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
				<ul className="SiderItem">{SiderItem}</ul>
			</div>
		)
	}
}