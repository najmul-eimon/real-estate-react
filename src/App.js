import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import About from './pages/about/About';
import BlogPage from './pages/blog/BlogPage';
import BlogDetails from './pages/blogDetails/BlogDetails';
import ContactPage from './pages/contact/ContactPage';
import Home from './pages/home/Home';
import Property from './pages/property/Property';
import PropertyDetails from './pages/propertyDetails/PropertyDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/blog-details/:blogId" element={<BlogDetails />} />
        <Route path="property" element={<Property />} />
        <Route path="property/property-details/:propertyId" element={<PropertyDetails />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
