import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';

class TodoList extends Component {

  render() {
    const { inputValue, dolist, donelist, handleInputChange, handleBtnClick, handleDeleteClick } = this.props;

    return (
      <div>
        <header>
          <section>
            <label htmlFor='title' >ToDoList</label>
              <Input id="title"
                value={inputValue} 
                placeholder="添加ToDo" 
                onChange = {handleInputChange} 
              />
              <Button className="button" type="primary" onClick={handleBtnClick}>提交</Button>
          </section>
        </header>
        <section>
          <h2>正在进行</h2>
          <List
            className='dolist'
            size="small"
            bordered
            dataSource={dolist}
            renderItem={(item,index) => (<List.Item onClick={() => handleDeleteClick(index)}>{item}</List.Item>)}
          />
          <h2>已经完成</h2>
          <List
            className='donelist'
            size="small"
            bordered
            dataSource={donelist}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    dolist: state.dolist,
    donelist: state.donelist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'input_change',
        value: e.target.value
      };
      dispatch(action);
    },
    handleBtnClick() {
      const action = {
        type: 'btn_click',
      };
      dispatch(action);
    },
    handleDeleteClick(index) {
      const action = {
        type: 'delete',
        index: index
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);