import { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from './layout';
import TotalUsers from './pages/TotalUsers';
import Banner from './pages/Banner';
import Message from './components/Message';
import EditUser from './pages/user/EditUser';
import Lawyer from './pages/lawyer/Lawyer';
import Dashboard from './pages/dashboard/Dashboard';
import Cases from './pages/cases/Cases';
const App = () => {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   navigate("/total-users")
  // }, [])
  return (
    <Routes>
      <Route path='/' element={<Layout>
        <Dashboard />
      </Layout>
      } />
      <Route path='/total-users' element={<Layout>
        <TotalUsers />
      </Layout>
      } />
      <Route path='/banner' element={<Layout>
        <Banner />
      </Layout>
      } />
      <Route path='/' element={<Layout>
        <Message />
      </Layout>
      } />
      <Route path='/edit-user' element={<Layout>
        <EditUser />
      </Layout>
      } />
      <Route path='/lawyer' element={<Layout>
        <Lawyer />
      </Layout>
      } />
      <Route path='/cases' element={<Layout>
        <Cases />
      </Layout>
      } />

    </Routes>
  );
}

export default App;
