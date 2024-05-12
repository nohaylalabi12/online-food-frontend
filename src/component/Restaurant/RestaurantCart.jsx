import React from 'react';
import { Card,Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCart = () => {
    return (
        <Card className='w-[18rem]'>
         
         <div className={`${true? 'cursor-pointer':"cursor-not-allowed"} relative`}>
           <img 
           className='w-full h-[10rem] rounded-t-md object-cover'
           src ="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600" 
           alt=""  
           />
           <Chip 
           size="small"
           className="absolute top-2 left-2"
           color={true?"success":"error"}
           label={true?"open":'closed'}
           />            
          </div>
          <div className="p-4 textPart lg:flex w-full justify-between bg-white">
           <div className='space-y-1'>

            <p className='font-semibold text-lg'>Moroccan Food</p>
            <p className='text-black text-sm '>
                Craving it all? Dive into our global fla...
            </p>

           </div>
           <div>
            <IconButton color="primary">
             {true? <FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>

           </div>
          </div>
        </Card>
    )
}

export default RestaurantCart;

