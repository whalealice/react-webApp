import React,{Component} from 'react'
import My from "../../images/my.jpg"
export default class SiderLog extends Component{
	render(){
		return(
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
		)
	}
}