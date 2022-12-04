import Main from './pages/Main.jsx'
import {Route,Routes} from 'react-router-dom';
import Roadmap from './pages/Roadmap.jsx';


const App = () => {

    return (
      <>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/roadmap" element={<Roadmap/>} />
        </Routes>
      </>
    );
}
export default App;