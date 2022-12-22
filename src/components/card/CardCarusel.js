import { BiBluetooth } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card'
import './CardCarusel.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

let data = [
    {
        id:1,
        name:"Ipad pro",
        price:"1000 $",
        img:"https://cdn.goodzone.uz/goodzone/b591d85b-ef59-41a4-8b7d-7aa368fab5f4"
    },
    {
        id:2,
        name:"Phone 12",
        price:"1100 $",
        img:"https://cdn.goodzone.uz/goodzone/2e779697-6400-44cb-84cb-0c3f4e3ab157"
    },
    {
        id:3,
        name:"Phone 13 pro max",
        price:"1400 $",
        img:"https://cdn.goodzone.uz/goodzone/1f70cc0d-64cf-497a-8e0c-a62f317ca924"
    },
    {
        id:4,
        name:"AirPods pro",
        price:"253 $",
        img:"https://cdn.goodzone.uz/goodzone/81adb994-9d07-458e-a9b6-69aa67d5d860"
    },
    {
      id:5,
      name:"Mac book pro",
      price:"2500 $",
      img:"https://cdn.goodzone.uz/goodzone/572aba2f-a68d-46b7-8fd5-9715599c2c7a"
  },
  {
    id:6,
    name:"Mac book pro",
    price:"2000 $",
    img:"https://cdn.goodzone.uz/goodzone/22201bf0-4377-44c4-9c85-1849ab873222"
},
]
const data2 = [
    {
      id:1,
      img:"https://cdn.goodzone.uz/goodzone/f249f0aa-1c3a-4cb0-acb6-304a3af9eb83"
    },
    {
      id:2,
      img:"https://cdn.goodzone.uz/goodzone/6473a94b-88ea-46b6-80ce-d6ed06fc5195"
    },
    {
      id:3,
      img:"https://cdn.goodzone.uz/goodzone/6a323497-906e-497f-8617-7cc5a50b82f5"
    },
    {
      id:4,
      img:"https://cdn.goodzone.uz/goodzone/06dc3dc6-b991-4456-885e-b3a22372d47e"
    },
    {
      id:5,
      img:"https://cdn.goodzone.uz/goodzone/1198572e-6ddb-40b8-9c31-8a7dca6ae2a3"
    },
]
function CardImage({img}){
return<img src={img} alt="" width={330} height={175} style={{margin:20,borderRadius:10,}}/>
}
function CardCarusel(){
    return(
      <>
        <div className="card-carusel-goodzone">
    <Carousel responsive={responsive} infinite={true} >
        {data.map(item=>{
            return (
                <Card name={item.name} img={item.img} price={item.price}/>
            )
        })}
            
            
        </Carousel>
        </div>
        <div>
        <h1>Mashhur kategoriyalar</h1>
          {data2.map(item=>{
            return <CardImage img={item.img}/>
          })}
        </div>
        </>
    )
}

export default CardCarusel