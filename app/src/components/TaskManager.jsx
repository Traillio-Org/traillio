import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";

export default function TaskManager() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", date: "2023-10-01", completed: false },
        { id: 2, title: "Task 2", date: "2023-10-02", completed: false },
        { id: 3, title: "Task 3", date: "2023-10-03", completed: false },
    ]);
    const [newTask, setNewTask] = useState({ title: "", date: "" });

    const addTask = () => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
        setNewTask({ title: "", date: "" });
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="task-manager">
            <Dialog>
                <DialogTrigger>
                    <button className="btn">Open Task Manager</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Task Manager</DialogTitle>
                        <DialogDescription>
                            Manage your tasks and stay productive
                        </DialogDescription>
                    </DialogHeader>
                    <div className="tasks">
                        {tasks.map(task => (
                            <div key={task.id} className="task">
                                <Checkbox
                                    checked={task.completed}
                                    onCheckedChange={() => toggleTask(task.id)}
                                />
                                <div class="labels">
                                    <div class="text">{task.title}</div>
                                    <div class="date">{task.date}</div>
                                </div>
                                <button onClick={() => removeTask(task.id)}><X /></button>
                            </div>
                        ))}
                    </div>
                    <DialogFooter>
                        <div className="add-task">
                            <input
                                className="text"
                                type="text"
                                placeholder="Task title"
                                value={newTask.title}
                                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            />
                            <div class="action">
                                <input
                                    type="date"
                                    value={newTask.date}
                                    onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                                />
                                <Button onClick={addTask}>Add Task</Button>
                            </div>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}