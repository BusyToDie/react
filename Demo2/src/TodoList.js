import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';




class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      dolist: [],
      donelist: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  render() {
    return (
      <Fragment>
        <InputBox 
        value = {this.state.inputValue}
        handleChange = {(e) => this.handleChange(e)}
        handleClick = {this.handleClick}
        />
        <Item dolist={this.state.dolist}
              donelist = {this.state.donelist}
              handleDelete = {(index) => this.handleDelete(index)}
        />
      </Fragment>
    );
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick() {
    if (this.state.inputValue !== '') {
      const newdolist = this.state.dolist.slice();
      newdolist.push(this.state.inputValue);
      this.setState({
        inputValue: '',
        dolist:  newdolist
      });
    }
  }

  handleDelete(index) {
    console.log(index);
    const newdolist = this.state.dolist.slice();
    const newdonelist = this.state.donelist.slice();

    newdonelist.push(newdolist[index]);
    newdolist.splice(index,1);
    this.setState({
      dolist: newdolist,
      donelist: newdonelist
    });
  }
}

class InputBox extends Component {

  render() {
    return (
      <header>
        <section>
          <label htmlFor='title' >ToDoList</label>
            <Input id="title"
              placeholder="添加ToDo" 
              value = {this.props.value}
              onChange = {(e) => this.props.handleChange(e)}
            />
            <Button className="button" type="primary" onClick = {this.props.handleClick} >提交</Button>
        </section>
      </header>
    );
  }
}

class Item extends Component {

  render() {
    return(
      <section>
        <h2>正在进行</h2>
        <List
          className='dolist'
          size="small"
          bordered
          dataSource={this.props.dolist}
          renderItem={(item,index) => (<List.Item onClick = {() => this.props.handleDelete(index)}>{item}</List.Item>)}
        />
        <h2>已经完成</h2>
        <List
          className='donelist'
          size="small"
          bordered
          dataSource={this.props.donelist}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </section>
    );
  }
}

export default TodoList;