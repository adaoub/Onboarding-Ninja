import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import axios from 'axios';

const Candidate = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
    const interval = setInterval(loadTasks, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadTasks = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data);
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Candidate Portal</h1>
      <List
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

export default Candidate;
