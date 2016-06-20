import React,{Component} from 'react'

import Slider from './Slider/Slider.jsx'
import Applist from './Applist/Applist.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import './App.css'
import Home from '../images/home.png'
import './api/api.jsx'

const list_data = {
    date: "20160616",
    stories: [
        {
            title: "中国古代家具发展到今天有两个高峰，一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "中国古代家，一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        }
    
    ],
    top_stories: [
        {
            title: "读读日报24小时热门TOP5.在美国买枪",
            image: require('../images/1.jpg'),
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        },
        {
            title: "商场和很多人家里，竹制家具越来越多（多图）",
            image: require('../images/2.jpg'),
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        },
        {
            title: "读读日报24小时热门TOP4.北京出现一堆［性别友善］厕所",
            image: require('../images/3.jpg'),
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        }
    ]
}
const now_data = {
    date: "20160615",
    stories: [
        {
            title: "中国古代家具发展到今天有两个高峰，一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "中国古代家，一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        }
    
    ],
    top_stories: [
        {
            title: "读读日报24小时热门TOP5.在美国买枪",
            image: require('../images/1.jpg'),
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        },
        {
            title: "商场和很多人家里，竹制家具越来越多（多图）",
            image: require('../images/2.jpg'),
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        },
        {
            title: "读读日报24小时热门TOP4.北京出现一堆［性别友善］厕所",
            image: "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg",
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        }
    ]
}
const last_data = {
    date: "20160614",
    stories: [
        {
            title: "中国古代家具发展到今天有两个高峰，一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "中国古代家，一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "一个两宋一个明末（多图）",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        },
        {
            title: "神剧《我爱我家》的导演，当年还在这个大学社团画海报",
            ga_prefix: "052321",
            images: [
                "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
            ],
            type: 0,
            id: 3930445
        }
    
    ],
    top_stories: [
        {
            title: "读读日报24小时热门TOP5.在美国买枪",
            image: require('../images/1.jpg'),
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        },
        {
            title: "商场和很多人家里，竹制家具越来越多（多图）",
            image: require('../images/2.jpg'),
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        },
        {
            title: "读读日报24小时热门TOP4.北京出现一堆［性别友善］厕所",
            image: "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg",
            ga_prefix: "052315",
            type: 0,
            id: 3930883
        }
    ]
}


export default class App extends Component{
    constructor(props) {
        super(props);
        this.handleClickHome = this.handleClickHome.bind(this)
    }
    handleClickHome(){
        this.refs.sidebar.className();
        this.props.actions.open_Sider()
    }
    
	render(){
		return(
			<div id="App">
                <Sidebar ref="sidebar"/> {/*侧边栏导航*/}
                <div id="Header"> {/*头部固定导航*/}
                    <img className="Home" src={Home} handleClick={this.handleClickHome}/> 
                    <h2>今日热闻</h2>
                </div>

                <div className="Main"> {/*焦点图*/}
                    <Slider item={list_data} 
                        dots = {true} //是否有按钮
                        continue = {true}//是否循环滚动
                        autoPlay={true} //是否自动播放
                    />
                    <div className="ListWrap">  {/*焦点图下方列表*/}
                        <Applist  item={list_data} title={false}/>
                        <Applist  item={now_data} title={true}/>
                        <Applist  item={last_data} title={true}/>
                    </div>
                </div>
			</div>
		)
	}
}