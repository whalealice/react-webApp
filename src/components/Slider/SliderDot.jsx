import React,{Component} from 'react';

export default class SliderDots extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <span styleName="dots" className={"slider-dot "+(this.props.active)}></span>
    );
  }
}