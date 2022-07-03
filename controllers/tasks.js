
const Task = require('../models/Task');

const get_all_tasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).send({tasks});
    } catch (error) {
        res.status(500).send({ msg: error })
    }
}

const get_task = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).send({ msg: `No task with id ${taskID}` })
        }
        res.status(200).send({ task });

    } catch (error) {
        res.status(500).send({ msg: error })
    }
}

const create_tasks = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).send({ task });
    } catch (error) {
        res.status(500).send({ msg: error })
    }
}


const delete_task = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).send({ msg: `No task with id ${taskID}` })
        }
        res.status(200).send({ task });

    } catch (error) {
        res.status(500).send({ msg: error })
    }
}

const update_task = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).send({ msg: `No task with id ${taskID}` })
        }
        res.status(200).send({ task });
    } catch (error) {
        res.status(500).send({ msg: error })
    }
}


module.exports = {
    get_all_tasks,
    create_tasks,
    delete_task,
    get_task,
    update_task
}