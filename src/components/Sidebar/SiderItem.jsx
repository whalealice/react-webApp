import React,{Component} from 'react'
import Add from '../../images/add.png'

export default class SiderItem extends Component{
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

		let siderNodes = title.map((title,i)=>{
			return (
				<li className={text} key={i} onClick={this.handleClick}>
					<p>{title}</p>
					<img src={Add}/>
				</li>
			)
		})
		console.logsiderNodes
		return(
			<ul className="SiderItem" onClick={e=>this.handClick(e)}>{siderNodes }</ul>
		)
	}
}
