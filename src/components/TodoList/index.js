import { Col, Row, Input, Button, Select, Tag } from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';

import Todo from '../Todo';
import {todoListSelectors} from '../../redux/selectors'
import {addTodo} from '../../redux/actions';

export default function TodoList() {
  const [todoName,setTodoName]=useState('');
  const [priority,setPriority]= useState('Medium');

  const todoList = useSelector(todoListSelectors);

  // const searchText = useSelector(searchTextSetectors);
  console.log(todoList);
  // console.log(searchText);


  const dispatch = useDispatch();
  const handleAdButonClick=()=>{
    dispatch(addTodo({
      id: uuidv4(),
      name:todoName,
      priority:priority,
      completed:false
    })
    );
    setTodoName('');
    setPriority('Medium');
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo,index)=>{
          return(
            <Todo key={todo.id} id={todo.id}  name={todo.name} prioriry={todo.priority} completed={todo.completed} />
          )
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e)=>{setTodoName(e.target.value)}} />
          <Select defaultValue="Medium" value={priority} onChange={(value)=>{setPriority(value)}}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdButonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
