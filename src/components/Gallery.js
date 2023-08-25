import React,{useEffect,useState} from "react";
import axios  from "axios";

function Gallery() {
  
const  [gallery_data,setgallery]=useState([]);

//Function of api called ;
const Get_API_Called=()=>{ 
 axios.get("http://localhost:80/first/Gallery.php")
 .then((res)=>
  {  
     setgallery(res.data);
  })}

//when page loaded then function get excute 
useEffect(() => {
 // Fetch data from the API when the page loads
 Get_API_Called();
}, []);

  return (
    <div id="gallery" className="overflow-hidden h-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3">
      {gallery_data.map((item, index) => (
        item.unHide ? <div key={index} className="flex justify-center items-center h-[25vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] w-full bg-pink-900">
          <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col items-center gap-4'>
            <h1  className='text-3xl lg:text-5xl font-semibold text-center mx-auto text-white font-bannerFont2'>
              Glimpses Of Events
            </h1>
            <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[50%]"></div>
          </div>
        </div> :
          <div
            key={index} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300"
            className="relative bg-cover bg-center h-[25vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] w-full"
            style={{ backgroundImage: `url(data:image/jpeg;base64,${item.Image}` }}
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#110e0e9d] opacity-0 transition duration-300 ease-in-out hover:opacity-100 text-center ">
              <p className="text-white text-center mx-auto text-xl mt-[25%]">{item.Title}</p>
              <p className="text-white text-center mx-auto text-xl mt-4">{item.Venue}</p>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Gallery;
