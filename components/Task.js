import { Draggable } from "react-beautiful-dnd"

const Task = ({ index, taskType, description }) => {
    return (
        <Draggable draggableId={index + taskType} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='flex flex-col w-full bg-[#211A75] rounded-2xl p-4 py-6 gap-3'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <div className={taskType == 'database' ? 'h-2 w-2 rounded-full bg-[#38E25D]' : taskType == 'important' ? 'h-2 w-2 rounded-full bg-[#FFAB2D]' : taskType == 'video' ? 'h-2 w-2 rounded-full bg-[#5ECFFF]' : taskType == 'bugs' ? 'h-2 w-2 rounded-full bg-[#FF4A55]' : taskType == 'instructor' ? 'h-2 w-2 rounded-full bg-[#E328AF]' : ''}></div>
                            <p className={taskType == 'database' ? 'text-sm text-[#38E25D]' : taskType == 'important' ? 'text-sm text-[#FFAB2D]' : taskType == 'video' ? 'text-sm text-[#5ECFFF]' : taskType == 'bugs' ? 'text-sm text-[#FF4A55]' : taskType == 'instructor' ? 'text-sm text-[#E328AF]' : ''}>
                                {
                                    taskType == 'database' ? 'Database' : taskType == 'instructor' ? 'Instructor Meeting' : taskType == 'important' ? 'Important' : taskType == 'video' ? 'Video' : taskType == 'bugs' ? 'BUGS FIXING' : ''
                                }
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-500">
                            <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className='font-semibold text-lg text-white'>
                        {description}
                    </p>
                    <div className='relative w-full bg-[#1E1C3A] h-1 md:h-2 rounded-full'>
                        <div className={taskType == 'database' ? 'absolute w-3/4 h-1 md:h-2 rounded-full bg-[#38E25D]' : taskType == 'important' ? 'absolute w-1/4 h-1 md:h-2 rounded-full bg-[#FFAB2D]' : taskType == 'video' ? 'absolute w-3/4 h-1 md:h-2 rounded-full bg-[#5ECFFF]' : taskType == 'bugs' ? 'absolute w-2/4 h-1 md:h-2 rounded-full bg-[#FF4A55]' : taskType == 'instructor' ? 'absolute w-1/4 h-1 md:h-2 rounded-full bg-[#E328AF]' : ''}></div>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex w-32 flex-row justify-center'>
                            <div className='relative flex w-full'>
                                <div className='border-2 border-[#15132B] w-8 h-8 bg-[#C4C4C4] rounded-full'>
                                </div>
                                <div className='border-2 border-[#15132B] absolute left-[24px] w-8 h-8 bg-[#C4C4C4] rounded-full'>
                                </div>
                                <div className='border-2 border-[#15132B] absolute left-[48px] w-8 h-8 bg-[#C4C4C4] rounded-full'>
                                </div>
                                <div className='border-2 border-[#15132B] absolute left-[72px] w-8 h-8 bg-[#C4C4C4] rounded-full'>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 items-center text-sm text-[#A5A5A5] font-semibold'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Due in 4 days
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Task