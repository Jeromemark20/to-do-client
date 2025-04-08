import { useState } from "react";

export default function AddModal({ hide }) {
    const [taskTitle, setTaskTitle] = useState(""); // State for Task Title
    const [taskList, setTaskList] = useState(""); // State for Task List

    // Handle input changes for Task Title and Task List
    const handleTitleChange = (e) => setTaskTitle(e.target.value);
    const handleListChange = (e) => setTaskList(e.target.value);

    // Handle Add Task functionality (you can later replace it with API calls or other logic)
    const handleAddTask = () => {
        if (taskTitle && taskList) {
            console.log("Task Added:", { taskTitle, taskList });
            // Reset fields after adding the task
            setTaskTitle("");
            setTaskList("");
            hide(); // Close the modal
        } else {
            alert("Please fill in both fields.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-50">
            <div className="relative w-full max-w-md p-6 bg-purple-700 rounded-lg shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Add New Task</h3>
                    <button
                        onClick={hide}
                        id="closeModalButton"
                        className="text-gray-500 hover:text-gray-700">
                        <svg
                            className="h-4 w-4 inline-block ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Task Title Input */}
                    <div>
                        <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700">Task Title</label>
                        <input
                            id="taskTitle"
                            type="text"
                            value={taskTitle}
                            onChange={handleTitleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter task title"
                        />
                    </div>

                    {/* Task List Input */}
                    <div>
                        <label htmlFor="taskList" className="block text-sm font-medium text-gray-700">Task List</label>
                        <textarea
                            id="taskList"
                            value={taskList}
                            onChange={handleListChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter task list details"
                        />
                    </div>
                </div>

                {/* Buttons: Add Task and Cancel */}
                <div className="mt-6 flex justify-between">
                    <button
                        onClick={hide}
                        className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg shadow-md hover:bg-gray-400 transition duration-300">
                        Cancel
                    </button>
                    <button
                        onClick={handleAddTask}
                        className="bg-pink-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-700 transition duration-300">
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
}
