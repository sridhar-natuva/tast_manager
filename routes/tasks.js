const express = require('express')
const router = express.Router();
const { get_all_tasks, create_tasks, delete_task, get_task, update_task } = require('../controllers/tasks')

router.route('/').get(get_all_tasks).post(create_tasks);
router.route('/:id').get(get_task).patch(update_task).delete(delete_task);

module.exports = router; 