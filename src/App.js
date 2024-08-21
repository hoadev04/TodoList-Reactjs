import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const [kyw, setKyw] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (todos.some(item => item.id === kyw.replace(/\s/g, ''))) {
            toast.warn('Công việc của bạn đã tồn tại!');
        } else {
            setTodos(prev => [...prev, { id: kyw.replace(/\s/g, ''), job: kyw }]);
            setKyw('');
        }
    }

    const handleDeleteJob = (id) => {

        setTodos((prev) => {
            return prev.filter((item) => {
                return item.id !== id
            })
        })

    }


    return (

        <div>
            <div className="h-screen bg-blue-800 flex justify-center items-center">
                <div className="bg-white rounded-xl max-w-xl w-full px-6 py-7">
                    <div className="grid grid-cols-12 gap-4 mb-10">
                        <input type="text"
                            className="col-span-10 outline-none rounded-md border border-blue-600 px-4 py-2"
                            value={kyw}
                            onChange={(event) => { setKyw(event.target.value) }} />
                        <button onClick={handleAdd} className="col-span-2 bg-blue-500 rounded-md text-white">Add</button>
                    </div>

                    {
                        todos.map((item, index) => {
                            return (
                                <div key={item.id} className="flex justify-between items-center py-1 px-2 border border-gray-400 bg-[#c5e1e5] rounded-md mb-1">
                                    <p className="text-sm ">{item.job}</p>

                                    <button className=" bg-blue-900 rounded-md p-2"
                                        onClick={() => handleDeleteJob(item.id)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "white" }} >
                                            <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" ></path>
                                            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}




export default App;