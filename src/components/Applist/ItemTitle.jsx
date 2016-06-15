import React,{Component} from 'react'

export default class ItemTitle extends Component{
	render(){
		let item = this.props.date  //父级的日期

		let year = item.substring(0,4)
		let month = item.substring(4,6)
		let day = item.substring(6,8)
		var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
		let week =weekArray[new Date(year+'/'+month+'/'+day).getDay()]
		let data = item.substring(4,6)+'月'+item.substring(6,8)+'日 '+week

		return(
			<h3 className="ItemTitle">{data}</h3>
		)
	}
}