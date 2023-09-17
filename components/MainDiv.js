import MainDivHeader from './MainDivHeader'
import MainDivBody from './MainDivBody'

const MainDiv = () => {
    return (
        <div className='w-full h-full overflow-scroll flex items-center justify-center px-6 py-10'>
            <div className='h-full w-full'>
                <MainDivHeader />
                <MainDivBody />
            </div>
        </div>
    )
}

export default MainDiv