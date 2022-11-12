import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import { routes } from './Routers'
import { Fragment } from 'react';
import DefaulLayout from './components/DefaulLayout';
function App() {
  return (
    <Routers>
      <div className="App">
        <Routes>
          {routes.map((route, id) => {
            let Layout = DefaulLayout
            if(route.layout) {
              Layout = route.layout
            }
            else if(route.layout === null) {
              Layout = Fragment
            }
            const Page = route.component
            return (<Route key={id} path={route.path} element={<Layout><Page /></Layout>} />)
          })}
        </Routes>
      </div>
    </Routers>
  );
}

export default App;
