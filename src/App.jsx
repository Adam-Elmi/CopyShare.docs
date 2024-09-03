import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Content } from './components/Content';
import { QuickStart } from './components/QuickStart';
import { Help } from './components/Help';
import Installation from './components/Installation';
function App() {
  const arr = [1,2,3,4,5];
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="api-references" element={<Content />} />
        <Route path="getting-started" element={<QuickStart />} />
        <Route path="installation" element={<Installation />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
}

export default App;
