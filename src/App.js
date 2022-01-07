import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
 } from 'react-router-dom';
 import RegisterComp from './components/register-comp';
 import HomePageComp from './components/homepage'
 import FooterComp from './components/global-comps/footercomp';
 import NavbarComp from './components/global-comps/navbarcomp';
 import TempBlogComp from './components/Blog/tempblogcomp';
 import CreateBlogComp from './components/Blog/create-blogcomp';
 import MyBlogsComp from './components/Blog/my-blogcomp';
 import BlogDisplayComp from './components/Blog/blogscomp';
 import Header from './components/global-comps/header';
 import LoginBox from './components/logincomp';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div><Header loggedIn={false} /><HomePageComp /></div>}></Route>
          <Route path="/Login"  element={<LoginBox/>} />
          <Route path="/Register" element={<RegisterComp/>}></Route>
          <Route path="/User/" element={
            <div>
            <Header loggedIn={true}/>
            <NavbarComp/>
            <Outlet/>
            </div>
          }>
            <Route path="Plans" />
            <Route path="Workout-Plans"/>
            <Route path="Meal-Plans"/>
            <Route path="Statistics" />
            <Route path="Home" />
            <Route path="Goals" />
            <Route path="Subscriptions" />
            <Route path="Blogs" element={<TempBlogComp/>} />
            <Route path="My-Blog" element={<MyBlogsComp/>} />
            <Route path="Create-Blog" element={<CreateBlogComp/>} />
            <Route path="Blog" element={<BlogDisplayComp/>} />
          </Route>
        </Routes>
        <FooterComp/>
      </Router>
    </div>
  );
}


