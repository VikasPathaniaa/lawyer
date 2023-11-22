import { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from './layout';
import TotalUsers from './pages/TotalUsers';
import Banner from './pages/Banner';
import Message from './components/Message';
import EditUser from './pages/user/EditUser';
const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/total-users")
  }, [])
  return (
    <Routes>
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

    </Routes>
  );
}

export default App;
