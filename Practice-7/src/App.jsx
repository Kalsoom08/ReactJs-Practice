
import { Route, Routes } from 'react-router-dom';
import Post from './Components/Post';
import PostDetails from './Components/PostDetails';
import NavBar from './Components/NavBar';

const App = () => {

  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Post/>}/>
      <Route path='/details/:id' element={<PostDetails/>}/>
    </Routes>
    </div>
  )
}

export default App