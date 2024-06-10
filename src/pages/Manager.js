import React, { useState, useEffect } from 'react';
import { Form, Input, Button, List } from 'antd';
import axios from 'axios';

const Manager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data);
  };

  const onFinish = async (values) => {
    await axios.post('http://localhost:3001/tasks', values);
    loadTasks();
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Manager Portal</h1>
      <Form layout="inline" onFinish={onFinish}>
        <Form.Item
          name="title"
          rules={[{ required: true, message: 'Please input task title!' }]}
        >
          <Input placeholder="Task Title" />
        </Form.Item>
        <Form.Item
          name="desc"
          rules={[
            { required: true, message: 'Please input task description!' },
          ]}
        >
          <Input placeholder="Task Description" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Task
          </Button>
        </Form.Item>
      </Form>
      <List
        className="mt-4"
        bordered
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item>
            <strong>{task.title}:</strong> {task.desc}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Manager;
