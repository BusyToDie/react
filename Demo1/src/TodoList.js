import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';



class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div>
        <header>
          <section>
            <label htmlFor='title' >ToDoList</label>
              <Input id="title"
                value={this.state.inputValue} 
                placeholder="添加ToDo" 
                onChange = {this.handleInputChange} 
              />
              <Button className="button" type="primary" onClick={this.handleBtnClick}>提交</Button>
          </section>
        </header>
        <section>
          <h2>正在进行</h2>
          <List
            className='dolist'
            size="small"
            bordered
            dataSource={this.state.dolist}
            renderItem={(item,index) => (<List.Item onClick={this.handleDeleteClick.bind(this,index)}>{item}</List.Item>)}
          />
          <h2>已经完成</h2>
          <List
            className='donelist'
            size="small"
            bordered
            dataSource={this.state.donelist}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </section>
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_item',
    }
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleDeleteClick(index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action);
  }

}

export default TodoList;