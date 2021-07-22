// import React from 'react';
// import GlobalStyle from './globalStyles';
// import Home from './pages/HomePage/Home';
// import Services from './pages/Services/Services';
// // import Products from './pages/Products/Products';
// import SignUp from './pages/SignUp/SignUp';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ScrollToTop from './components/ScrollToTop';
// import { Navbar, Footer } from './components';

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <ScrollToTop />
//       <Navbar />
//       <Switch>
//         <Route path='/' exact component={Home} />
//         <Route path='/services' component={Services} />
//         {/* <Route path='/products' component={Products} /> */}
//         <Route path='/sign-up' component={SignUp} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './components/Services/Services';
import Testimony from './pages/testimony/Testimony';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <div>
      <Router>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Services/>
      <Testimony/>
      <Footer />
      </Router>
    </div>
   
    
  );
}

export default App;




// import React from 'react'
// import Home from './Speach/Home';
// import InputScreen from './Speach/InputScreen';

// const App = () => {
//   return (
//     <div>
//       <InputScreen/>
//       <Home/>
//     </div>
//   )
// }

// export default App

