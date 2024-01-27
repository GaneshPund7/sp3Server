const express = require('express');
const router = express.Router();
const Task = require('../model/model');
const JobData = require('../model/jobModel');

// List all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.get('/jobdata', async (req, res) => {
  try {
    const jobdata = await JobData.find();
    res.json(jobdata);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.post('/jobdata', async (req, res) => {
  const {applyNow,companyImg,companyName,description, responsibilities,qualification,role,location,experience,salary,batch,telegram,whatsapp } = req.body;
  const jobdata = new JobData({ applyNow,companyImg,companyName,description, responsibilities,qualification,role,location,experience,salary,batch,telegram,whatsapp });
  await jobdata.save();
  res.json(jobdata);
});

// Create a new task
router.post('/tasks', async (req, res) => {
  const { userName,email, password } = req.body;
  const task = new Task({ userName,email, password });
  await task.save();
  res.json(task);
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    task.title = title;
    task.description = description;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndRemove(id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
