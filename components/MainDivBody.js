import { useState } from 'react'
import Task from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
const MainDivBody = () => {
    const [toDoList, settoDoList] = useState([
        {
            taskType: 'important',
            description: 'Create sign up sheet for holiday student/parent conferences.'
        },
        {
            taskType: 'instructor',
            description: 'Plan holiday demonstration program. Create outline.'
        },
        {
            taskType: 'database',
            description: 'Determine how many boards need to be ordered for testing and demo'
        }
    ]);
    const [progress, setProgress] = useState([
        {
            taskType: 'video',
            description: 'Create sparring tutorial video for the weekly class.'
        },
        {
            taskType: 'bugs',
            description: 'Payment gateway needs reauthorization.'
        }
    ]);
    const [done, setdone] = useState([
        {
            taskType: 'bugs',
            description: 'Action Button needed for Google Maps visits.'
        },
        {
            taskType: 'database',
            description: 'Update new instructor photos.'
        },
        {
            taskType: 'instructor',
            description: 'Review/correct yellow belt techniques.'
        }
    ]);
    const [revised, setrevised] = useState([]);
    return (
        <DragDropContext
            onDragEnd={(params) => {
                console.log(params);
                const destiny = params.destination.droppableId;
                const source = params.source.droppableId;
                const srcIndex = params.source.index;
                const destIndex = params.destination.index;
                if (destiny == source) {

                }
                else {
                    if (destiny == 'done') {
                        let temp = [...done];
                        if (source == 'revised') {
                            let temp1 = [...revised];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setrevised(temp1);
                        }
                        if (source == 'progress') {
                            let temp1 = [...progress];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setProgress(temp1);
                        }
                        if (source == 'todoList') {
                            let temp1 = [...toDoList];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            settoDoList(temp1);
                        }
                        temp.splice(srcIndex, 1);
                        setdone(temp);
                    }
                    if (destiny == 'revised') {
                        let temp = [...revised];
                        if (source == 'done') {
                            let temp1 = [...done];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setdone(temp1);
                        }
                        if (source == 'progress') {
                            let temp1 = [...progress];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setProgress(temp1);
                        }
                        if (source == 'todoList') {
                            let temp1 = [...toDoList];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            settoDoList(temp1);
                        }
                        temp.splice(srcIndex, 1);
                        setrevised(temp);
                    }
                    if (destiny == 'progress') {
                        let temp = [...progress];
                        if (source == 'revised') {
                            let temp1 = [...revised];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setrevised(temp1);
                        }
                        if (source == 'done') {
                            let temp1 = [...done];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setdone(temp1);
                        }
                        if (source == 'todoList') {
                            let temp1 = [...toDoList];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            settoDoList(temp1);
                        }
                        temp.splice(srcIndex, 1);
                        setProgress(temp);
                    }
                    if (destiny == 'todoList') {
                        let temp = [...toDoList]
                        if (source == 'revised') {
                            let temp1 = [...revised];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setrevised(temp1);
                        }
                        if (source == 'done') {
                            let temp1 = [...done];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setdone(temp1);
                        }
                        if (source == 'progress') {
                            let temp1 = [...progress];
                            temp1.splice(destIndex, 0, temp[srcIndex]);
                            setProgress(temp1);
                        }
                        temp.splice(srcIndex, 1);
                        settoDoList(temp);
                    }
                }
            }}>
            <div className='flex flex-row justify-between w-full flex-wrap overflow-scroll'>
                <Droppable droppableId='todoList'>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-col gap-5 w-[96%] sm:w-[46%] md:w-[23%]'>
                            <div className='flex flex-row items-center justify-between p-2 py-4'>
                                <p className='font-x font-bold text-white'>To-Do List (4)</p>
                                <buton className='h-full p-2 text-white bg-[#6418C3] rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </buton>
                            </div>
                            {toDoList?.map((list, index) => (
                                <Task key={index} index={index} taskType={list.taskType} description={list.description} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='progress'>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-col gap-5 w-[96%] sm:w-[46%] md:w-[23%]' >
                            <div className='flex flex-row items-center justify-between p-2 py-4'>
                                <p className='font-x font-bold text-white'>In Progress (3)</p>
                                <buton className='h-full p-2 text-[#6418C3] bg-[#211A75] rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </buton>
                            </div>
                            {progress?.map((list, index) => (
                                <Task key={index} index={index} taskType={list.taskType} description={list.description} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='done'>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-col gap-5 w-[96%] sm:w-[46%] md:w-[23%]' >
                            <div className='flex flex-row items-center justify-between p-2 py-4'>
                                <p className='font-x font-bold text-white'>Done (2)</p>
                                <buton className='h-full p-2 text-[#6418C3] bg-[#211A75] rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </buton>
                            </div>
                            {done?.map((list, index) => (
                                <Task key={index} index={index} taskType={list.taskType} description={list.description} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='revised'>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-col gap-5 w-[96%] sm:w-[46%] md:w-[23%]' >
                            <div className='flex flex-row items-center justify-between p-2 py-4'>
                                <p className='font-x font-bold text-white'>Revised</p>
                                <buton className='h-full p-2 text-[#6418C3] bg-[#211A75] rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </buton>
                            </div>
                            {revised?.map((list, index) => (
                                <Task key={index} index={index} taskType={list.taskType} description={list.description} />
                            ))}
                            <div className='bg-[#211A75] rounded-2xl p-4 '>
                                <div className='flex items-center justify-center text-sm font-semibold border-2 border-dashed border-[#7879F1] bg-[#15132B] text-[#7879F1] rounded-2xl p-4 '>
                                    Move Card Here
                                </div>
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

export default MainDivBody