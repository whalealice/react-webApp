import React,{Component} from 'react';

import '../Slider/Slider.css';
import SliderItem from './SliderItem/SliderItem.jsx';
import SliderDots from './SliderDots/SliderDot.jsx';

var SlideInter;

export default class Slider extends Component{
	constructor(props) {
	  super(props);
	  this.autoScroll = this.autoScroll.bind(this)
	
	  this.state = {
	  	baseWidth: document.documentElement.clientWidth, //宽度
	  	nowlocal: 0,
	  	startX:0,
	  	stopX:0,
	  	moveX:0,
	  	time:0,
	  	distance:0,
	  	swiper:30,
	  	length:this.props.item.top_stories.length,
	  	sliderSpeed:2000
	  };
	}

	touchStart(e){
		clearInterval(SlideInter)
		this.setState({
			time:0,
			startX:e.touches[0].pageX
		})
	}

	touchMove(e){
		e.preventDefault()
		var _stopX = e.touches[0].pageX
		var _moveX = _stopX - this.state.startX
		var _distance = -(this.state.nowlocal*this.state.baseWidth - _moveX)

		this.setState({
			stopX:_stopX,
	  		moveX:_moveX,
	  		distance:_distance
		})
	}
	
	touchEnd(e){

		if (this.state.moveX < this.state.swiper) {
			this.touchScroll('right','.5')
		}else{
			this.touchScroll('left','.5')
		}
		
		this.setState({
			moveX: 0
		})
	}

	/**
	 * nowlocal
	 * @param  {num} go      指定nowlocal数值
	 * @param  {num} time    transition时间
	 */
	touchScroll(go,time){
		var _nowlocal = this.state.nowlocal

		 if (go == 'right') {
			_nowlocal++
			
		}else if( go == 'left'){
			_nowlocal--
		}

		// 是否循环滚动
		if (this.props.continue) {
			if (_nowlocal > this.state.length) {

				this.scrollFun(_nowlocal,time)

				_nowlocal = 1

				setTimeout(()=>{

					this.scrollFun(_nowlocal,0)
					this.setState({
						nowlocal:_nowlocal
					})

				},500)
			}else if(_nowlocal<1){

				this.scrollFun(_nowlocal,time)

				_nowlocal = this.state.length

				setTimeout(()=>{

					this.scrollFun(_nowlocal,0)
					this.setState({
						nowlocal:_nowlocal
					})

				},500)
			}else{
				this.scrollFun(_nowlocal,time)
				this.setState({
					nowlocal:_nowlocal
				})
			}

		}else{
			if (_nowlocal>this.state.length-1) {
				_nowlocal = 0
				
			}else if(_nowlocal<0){
				_nowlocal = this.state.length-1
			}
			this.scrollFun(_nowlocal,time)
		
			this.setState({
				nowlocal: _nowlocal
			})
		}
	}
	/**
	 * 滚动函数
	 * @param  {num} nowlocal   指定滚动的nowlocal
	 * @param  {num} time       transition的时间
	 */
	scrollFun (index, time) { //滚动动画效果
		this.setState({
			time: time,
			distance: -(index * this.state.baseWidth)
		})
	}

	autoScroll(){
		if (this.props.autoPlay) {
			this.stopScroll()

			SlideInter = setInterval(()=>{

				this.touchScroll('right','.5')

			},this.state.sliderSpeed)
		}
	}
	stopScroll() {
		clearInterval(SlideInter)
	}

	componentDidMount(){
		// 循环滚动 index+1
		if (this.props.continue) {
			var newlocal = this.state.nowlocal+1
			this.setState({
				nowlocal:newlocal,
				distance:-(newlocal*this.state.baseWidth)
			})
		}
		this.autoScroll();
	}

	render(){
		let opts = this.props.item.top_stories;
		let count = this.props.item.top_stories.length;

		{/*li图片*/}
		let itemNodes = opts.map(function(item,index){
			return (<SliderItem item={item}  key={'item' + index} />)
		});

		{/*li图片下方按钮*/}
		let dotsNode = opts.map((item,index)=>{
			return(
				<SliderDots key={index} active={(this.props.continue ? (this.state.nowlocal-1): this.state.nowlocal) == index ? "slider-dot-selected" : ""} />
			) 
		})
	

		var SliderStyle={
			width:(document.documentElement.clientWidth * (count + 3)) + "px",
			WebkitTransform: 'translate3d(' + this.state.distance + "px,0,0)",
			transform: 'translate3d(' + this.state.distance + "px,0,0)",
			WebkitTranstion: "all " + this.state.time + "s",
			transition: "all " + this.state.time + "s"
		};

		return(
			<div className="slider">
				<ul style={SliderStyle} 
					onTouchStart={e=>this.touchStart(e)}
					onTouchMove={e=>this.touchMove(e)} 
					onTouchEnd={e=>this.touchEnd(e)}
					onTransitionEnd={()=>this.autoScroll()}
				>
					{/*前面后面个加一个*/}
					{this.props.continue ? <SliderItem item={opts[count-1]}  /> : ""}
					{itemNodes}
					{this.props.continue ? <SliderItem item={opts[0]} /> : ""}

				</ul>
				<div className="sliderdots-wrap">
			        {this.props.dots?dotsNode:null}
			    </div>
			</div>
		)
	}
}

{/*设置默认的属性*/}
Slider.defaultProps = {
  continue: true,
  autoPlay: true,
  dots: true,
  items: [],
};
