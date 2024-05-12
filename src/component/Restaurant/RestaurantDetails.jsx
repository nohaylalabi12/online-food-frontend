import { Divider, Grid,Typography,FormControl,RadioGroup,FormControlLabel,Radio} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from "./MenuCard";

const categories =[
    "tajine",
    "couscous",
    "refissa",
    "passtila",
    "sefa",
    "dejaj mhamar"
]
const foodTypes = [
      {label:"All",value:"all"},
      {label:"Vegetarian only",value:"vegetarian"},
      {label:"Non-Vegetarian",value:"non_vegetarian"},
      {label:"Seasonal",value:"seasonal"},


]

const menu = [1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType,setFoodType] = useState ("all")
    const handelFilter = (e)=>{
        console.log(e.target.value,e.target.name)   
     }
    return(
        <div className="px- lg:px-20">
         
         <section>
            <h3 className="text-gray-500 py-2 mt-10">Home/morocco/moroccan food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/2574489/pexels-photo-2574489.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="" 
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-[40vh] object-cover" src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?b=1&s=612x612&w=0&k=20&c=E5YZ31t5xyOIaZ48S4U1sTnbVChrPo6YdRH1oJtRk8g=" 
                        alt="" 
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-[40vh] object-cover" src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?b=1&s=612x612&w=0&k=20&c=6Hp8_alO9BBpQYYpblorjchmZwu6ZmKSRREyj9cv1Zc=" 
                        alt="" 
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="pt-3 pb-5">
                <h1 className="text-4xl font-semibold">Morrocan Food</h1>
                <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa 
                     voluptatibus sapiente itaque architecto,
                     placeat alias magni impedit voluptate? Exercitationem at quis esse 
                     odio dicta quod, odit maiores error sit!</p>
                 <div className="space-y-3 mt-3">
                 <p className="text-gray-500 flex items-center gap-3">
                    <LocationOnIcon></LocationOnIcon>
                    <span>
                     Casablanca, Maarif
                    </span>
                 </p>
                 <p className="text-gray-500 flex items-center gap-3">
                    <CalendarTodayIcon></CalendarTodayIcon>
                    <span>
                      Mon-Sun: 9:00AM - 9:00PM (Today)
                    </span>
                 </p>
                 </div>
                 
            </div>
         </section>
         <Divider></Divider>
         <section className="pt-[2rem] lg:flex relative">

          <div className="space-y-10 lg:w-[20%] filter">
            <div className="box space-y-5 lg:sticky top-28 ">
                <div>
                   <Typography variant ="h5" sx = {{paddingBottom:"1rem"}}>
                       Food Type
                   </Typography>
                    
                    <FormControl className ="py-10 space-y-5" 
                                 component={"fieldset"} >
                        <RadioGroup onChange = {handelFilter} name="food_type" value ={foodTypes} >
                         {foodTypes.map((item) =>  <FormControlLabel 
                            key = {item.value}
                            value={item.value} 
                            control={<Radio />}
                            label={item.label} />)}
                        </RadioGroup>
                    </FormControl>

                </div>
                
                <Divider></Divider>
                <div>
                   <Typography variant ="h5" sx = {{paddingBottom:"1rem"}}>
                       Food Category
                   </Typography>
                    
                    <FormControl className ="py-10 space-y-5" 
                                 component={"fieldset"}>
                        <RadioGroup onChange = {handelFilter} name="food_type" value ={foodTypes }>
                         {categories.map((item) =>  <FormControlLabel 
                            key = {item}
                            value={item} 
                            control={<Radio />}
                            label={item} />)}
                        </RadioGroup>
                    </FormControl>

                </div>

            </div>
          </div>
          <div className="space-y-5 lg:w-[80%] lg:pl-10">
            {menu.map((item)=> <MenuCard/> )}
          </div>

         </section>
        
        </div>
    )
}

export default RestaurantDetails 

