import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import image1 from '../images/cell-biology.jpg';
import image2 from '../images/biochemistry.jpg';
import image3 from '../images/micro-biology.jpg';
import image4 from '../images/molecular-biology.jpg';
import image5 from '../images/bioreactor.jpg';

function Work() {
  return (<>
    <h1 style={{ textAlign: "center", margin: "4% 0" ,letterSpacing: "10px"}}>Featured Courses</h1>
    <Carousel className='caro' fade wrap style={{ borderRadius: '25px' ,overflow: 'hidden', margin: '0 auto'}}>
      <Carousel.Item>
        <ExampleCarouselImage imageSource={image1} />
        <Carousel.Caption >
          <h1>Cell Biology</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageSource={image2} />
        <Carousel.Caption>
          <h1>Bio Chemistry</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageSource={image3} />
        <Carousel.Caption>
          <h1>Micro Biology</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageSource={image4} />
        <Carousel.Caption>
          <h1>Molecular Biology</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageSource={image5} />
        <Carousel.Caption>
          <h1>Bioreactor</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}

export default Work;