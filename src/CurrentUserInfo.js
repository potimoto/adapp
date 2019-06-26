import React from 'react';
import ReactDOM from 'react-dom';

class CurrentUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'', image:'', crappos:'100', craped:'0'};
  }

handleChange(event){
  event.preventDefault();

    var name = ReactDOM.findDOMNode(this.refs.name1).value.trim();
    var image = ReactDOM.findDOMNode(this.refs.image1).value.trim();
    var crappos = ReactDOM.findDOMNode(this.refs.crappos1).value.trim();
    var craped = ReactDOM.findDOMNode(this.refs.craped1).value.trim();
    var json1 = JSON.stringify({'name':'Tom', 'image':'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiIyeecpPbiAhULVrwKHYERAXMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.irasutoya.com%2F2016%2F11%2Fblog-post_751.html&psig=AOvVaw011x_f89Vi3vyQzHzAkCxH&ust=1561059018160824', 'crappos':'100','craped':'0'});

    var name = ReactDOM.findDOMNode(this.refs.name2).value.trim();
    var image = ReactDOM.findDOMNode(this.refs.image2).value.trim();
    var crappos = ReactDOM.findDOMNode(this.refs.crappos2).value.trim();
    var craped = ReactDOM.findDOMNode(this.refs.craped2).value.trim();
    var json2 = JSON.stringify({'name':'Bob', 'image':'https://www.google.com/imgres?imgurl=https%3A%2F%2F1.bp.blogspot.com%2F-QH_mq0_gjC8%2FW9RZInBu1mI%2FAAAAAAABPms%2FilaMSI7ArVI-dA_-PI_ZyUNkA2WdEjWGACLcBGAs%2Fs800%2Fdance_shoot_dance.png&imgrefurl=https%3A%2F%2Fwww.irasutoya.com%2F2018%2F11%2Fblog-post_516.html&docid=VmilcZivO49ROM&tbnid=EZQfvSt9o82HmM%3A&vet=10ahUKEwiSn5OTpPbiAhUJhbwKHTI4DxoQMwjEAigBMAE..i&w=800&h=575&client=safari&bih=1081&biw=1100&q=いらすとや&ved=0ahUKEwiSn5OTpPbiAhUJhbwKHTI4DxoQMwjEAigBMAE&iact=mrc&uact=8', 'crappos':'100','craped':'0'});

    var name = ReactDOM.findDOMNode(this.refs.name3).value.trim();
    var image = ReactDOM.findDOMNode(this.refs.image3).value.trim();
    var crappos = ReactDOM.findDOMNode(this.refs.crappos3).value.trim();
    var craped = ReactDOM.findDOMNode(this.refs.craped3).value.trim();
    var json3 = JSON.stringify({'name':'Judy', 'image':'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiko_q1pPbiAhUDPrwKHftmAN0QjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.irasutoya.com%252F2017%252F02%252F5_27.html%26psig%3DAOvVaw011x_f89Vi3vyQzHzAkCxH%26ust%3D1561059018160824&psig=AOvVaw011x_f89Vi3vyQzHzAkCxH&ust=1561059018160824', 'crappos':'100','craped':'0'});

    var json = [json1,json2,json3];
    localStorage.setItem("data.json",json);
}

  render(){
    var t = JSON.parse(localStorage.getItem("data.json"));
    return(
      console.log(t.name2);
);

  }
}

export default CurrentUserInfo;
