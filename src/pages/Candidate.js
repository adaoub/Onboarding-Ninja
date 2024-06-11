import React, { useState, useEffect } from 'react';
import { Timeline, Card } from 'antd';
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
      <Card title="Your Onboarding Journey">
        <Timeline mode="alternate">
          {tasks.map((task, index) => (
            <Timeline.Item
              key={index}
              color={index % 2 === 0 ? 'blue' : 'green'}
            >
              <strong>{task.title}:</strong> {task.desc}
            </Timeline.Item>
          ))}
        </Timeline>
      </Card>
    </div>
  );
};

export default Candidate;
