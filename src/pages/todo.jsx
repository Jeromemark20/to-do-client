import { useEffect, useState } from "react";
import axios from "axios";
import AddModal from "../components/AddModal";

function Todo() {
    const [titles, setTitles] = useState([]); // To store titles fetched from the API
    const [showModal, setShowModal] = useState(false); // Controls modal visibility

    // Fetch titles on component mount
    useEffect(() => {
        const getTitles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/get-titles');
                setTitles(response.data.titles);
            } catch (error) {
                console.error("Error fetching titles:", error);
            }
        };
        getTitles();
        
    }, []);

    // The tasks data (could be dynamic or fetched as well)
    const [tasks, setTasks] = useState({
        ongoing: ["To-Do 1", "To-Do 2"],
        done: ["OK NA TO"],
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-50">
            <div className="w-full max-w-4xl h-[600px] bg-teal-600 flex flex-col justify-between p-8 gap-8 rounded-3xl shadow-2xl">
                <h2 className="text-5xl font-extrabold text-center text-white mb-6 drop-shadow-lg">TO-DO LIST</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                    {/* Loop through the categories: ongoing and done */}
                    {Object.keys(tasks).map((category) => (
                        <div key={category} className="bg-teal-500 p-6 rounded-2xl shadow-lg transition transform hover:scale-105">
                            <h3 className="text-3xl font-semibold text-pink-700 mb-4">{category.toUpperCase()}</h3>
                            <ul className="space-y-4">
                                {/* Display tasks for this category */}
                                {tasks[category].map((task, index) => (
                                    <li key={index} className="p-4 bg-pink-200 rounded-lg text-center text-pink-800 font-medium shadow-md">
                                        {task}
                                    </li>
                                ))}
                            </ul>

                            {/* Add Task Button inside the Ongoing category */}
                            {category === "ongoing" && (
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
                                    >
                                        Add Task
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Component - toggled based on showModal state */}
            {showModal && <AddModal hide={() => setShowModal(false)} />}
        </div>
    );
}

export default Todo;
