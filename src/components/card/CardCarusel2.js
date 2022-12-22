import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardCarusel2.css"
import Card2 from "./Card2";
import './Card2.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

let data = [
    {
        id:1,
        name:"Muzlatgich Beko",
        title:"От 1 059 530so'm/12oy",
        price:"2 760 000 so'm",
        img:"https://cdn.goodzone.uz/goodzone/3bf92da6-5e87-4216-b8ad-d68fe4057986"    
    },
    {
        id:2,
        name:"Naushnik JBL",
        title:"От 131 700so'm/12oy",
        price:"1 055 700 so'm",
        img:"https://cdn.goodzone.uz/goodzone/8a1456d8-9654-4a9d-94d8-30517b47ef1d"    
    },
    {
        id:3,
        name:"Muzlatgich Beko",
        title:"От 1 059 530so'm/12oy",
        price:"2 760 000 so'm",
        img:"https://cdn.goodzone.uz/goodzone/a6696b15-ee12-450e-8124-69f71743173b"    
    },
    {
        id:4,
        name:"Muzlatgich Beko",
        title:"От 1 059 530so'm/12oy",
        price:"2 760 000 so'm",
        img:"https://cdn.goodzone.uz/goodzone/9dd05e50-bf22-4b96-836f-39459a141c62"    
    },
    {
      id:5,
      name:"Увлажнитель воздуха Polaris PUH7804TF",
      title:"От 1 059 530so'm/12oy",
      price:"2 760 000 so'm",
      img:"https://cdn.goodzone.uz/goodzone/e9b02aea-ed6d-48e4-92d5-f967d7110503"    
  },
    
]

function Card2Carousel() {
    return (
      <div className="card-carousel">
        <Carousel responsive={responsive} infinite={true} >
          {data.map(item => {
            return(
              <Card2 name={item.name} img={item.img} price={item.price} title={item.title} />
            )
          })}
          
        </Carousel>
      </div>
    );
  }
  
  export default Card2Carousel