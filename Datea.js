import React from 'react';
import ReactDom from 'react-dom';


var SearchBar = React.createClass({
    onHandleFilter: function(){
        this.props.filterTextFunc(this.refs.inp.value);
    },
    render: function(){
        var data = this.props.data;
        var row=[];
        data.forEach(function(ele, index){
                 row.push(<span key={index}>{ele.name}</span>)
      
        })
        return (
            <div className="search">
                <input type="text" onChange={this.onHandleFilter} ref="inp"/>
                <span>您已经邀请 {row} 等{row.length}人</span>
            </div>
        )     
    }
})
var ListItem = React.createClass({
       onHandleToggle:function(){
          this.props.toggleInvite(this.props.id);
       },
    render:function(){
        var canInvite = this.props.canInvite;
        var style = {}
        canInvite ? style.background = '#8ab923' : style.background='#f1f1f2';
        return (
            <li>
                <img src={"./src/img/" + this.props.avatarUrl }/>
                <div>{this.props.name}</div>
                <div>{this.props.bio}</div>
               
            </li>
        )
    }
});
var ListInvite = React.createClass({
    render:function(){
        var data = this.props.data;
        var filterText = this.props.filterText;
        // var self=this;
        var row =[];
        var toggleInvite = this.props.toggleInvite;
        data.forEach( function(ele, index){
            if(ele.name.indexOf(filterText) !== -1){
                
                row.push( <ListItem key={index + 100} canInvite={ele.canInvite} toggleInvite={toggleInvite} id={ele.id}avatarUrl={ele.avatarUrl} name={ele.name} bio={ele.bio}></ListItem>);
            }
             
        })
        return(
            <div className="ListWrapper">
                <ul>
                   {row}
                </ul>
            </div>
        )
        
    }
})
var AppInvite = React.createClass({
    getInitialState: function(){
        return {
            list:[],
            inviteOrder:[],
            filterText:'',
        }
    },
    componentDidMount: function(){
      var list = [];
      var data = this.props.data;
      data.forEach( function(ele, index){
          ele.canInvite = true;
          list.push(ele);
      })  
    //   把所有任务信息状态全部放在 list ->this.state.list
      this.setState({
          list:list
      })
     
      
    },
    
    toggleInvite: function(id){
        // 找到对应的人
        // es6语法，把list变成新的数组,相当于复制一份
        // var list = [...this.state.list];
        var tooglePerson = null;
        var list = this.state.list.map(function(ele, index){
          if(ele.id === id){
              tooglePerson = ele;
                ele.canInvite = !ele.canInvite;
            } 
            return ele;
        });
        // 触发第二次渲染：
        this.setState({
            list:list
        });
        // console.log(this.state.list);
        
         var orderArray = [...this.state.inviteOrder];
         if(!tooglePerson.canInvite){
             orderArray.push(tooglePerson);
         }else{
            orderArray = orderArray.filter(function(ele,index){
                 return !(ele.id === tooglePerson.id);
             });
         }
         console.log(orderArray);
         this.setState({
         inviteOrder:orderArray
         });
    },
    filterTextFunc:function(text){
        this.setState({
            filterText:text
        })
    },
    render: function () {
        return(
            <div className="wrapper">
                <SearchBar data={this.state.inviteOrder} filterTextFunc={this.filterTextFunc}></SearchBar>
                <ListInvite data={this.state.list} filterText={this.state.filterText} toggleInvite={this.toggleInvite}></ListInvite>
            </div>
        )
    }
})

var data =  [
    {
      "name": "magasa",
      "slug": "magasa",

      "bio": "电影杂志《虹膜》主编（支持iOS/Android平台）",
      "id": 1
    },
    {
      "name": "程毅南",
      "slug": "cheng-yi-nan",
  
      "bio": "美国心理学和经济学本科毕业。强推《知识分子与社会》",
      "id": 2
    },
    {
      "name": "田吉顺",
      "slug": "tian-ji-shun",
   
      "bio": "妇产科医生",
      "id": 3
    },
   
];


