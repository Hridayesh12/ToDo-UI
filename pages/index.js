import NavBar from '../components/NavBar'
import MobileNavBar from '../components/MobileNavBar'
import MainDiv from '../components/MainDiv'
export default function Home({ isSideBarOpen, setIsSideBarOpen }) {
  return (
    <div className='h-screen w-full'>
      <NavBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      <MobileNavBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      <MainDiv />
    </div>
  )
}
