import React from "react";
import axios from 'axios'

export const Searchbar = () =>{
    const [loading,setloading] =React.useState(false);
     const [posts,setpost] =React.useState([]);
     const [serachtitle,setserachtitle] =React.useState("");


   React.useEffect(()=>{
      const loadPosts = async () =>{
         setloading(true);
         const response = await axios.get("https://dineout-project.herokuapp.com/star");
        // console.log(response.data);
         setpost(response.data);
         setloading(false);
      }
      loadPosts();
   },[]);

    return(
        <form className="d-flex">
         <input className="serach_option_bar" type="search" placeholder="Search for Restaurants,Offers,Deals Or Events....."  onChange={(e) => setserachtitle(e.target.value)}/>
            <div className="Search_content">
            {loading ? (
               <h4>Loading ....</h4>
            ):(
               posts.filter((value) => {
                  if(serachtitle === ""){
                      console.log(value)
                     return value
                  }else if (value.title.toLowerCase().includes(serachtitle.toLowerCase())
                  ){
                         return value
                  }
               })
               .map((item)=> <h5 key={item.id}>{item.title}</h5>)
            )}
            </div>
        {/* <input className="serach_option_bar" type="search" placeholder="Search for Restaurants,Offers,Deals Or Events....." aria-label="Search"/> */}
        <button className="search_button" type="submit">Search</button>
          </form>
    )
}