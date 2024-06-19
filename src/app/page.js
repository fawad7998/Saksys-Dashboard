import Navbar from './Components/Navbar/page';
import Sidebar from './Components/Sidebar/page';
import Main from './Pages/Home/page';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
