
import ImageSlider from "./ImageSlider";

const App = () => {
  const slides = [
    {url: 'http://localhost:3000/image-0.jpg', title: 'caballs'},
    {url: 'http://localhost:3000/image-1.jpg', title: 'caballs'},
    {url: 'http://localhost:3000/image-2.jpg', title: 'caballs'},
    {url: 'http://localhost:3000/image-3.jpg', title: 'caballs'},
    {url: 'http://localhost:3000/image-4.jpg', title: 'caballs'},
    {url: 'http://localhost:3000/image-5.jpg', title: 'caballs'},
    {url: 'http://localhost:3000/image-6.jpg', title: 'caballs'},
    {url: 'http://localhost:3000/image-7.jpg', title: 'caballs'},
  ]

  const containerStyles = {
    width: "1240px",
    height: "540px",
    margin: "0 auto"
  }

  const h1Style = {
    margin: "0 45%",
    color: "green"
  }

  return (
    <div>
      <h1 style={h1Style}>Test Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
