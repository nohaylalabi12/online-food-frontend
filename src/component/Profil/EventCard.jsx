import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?b=1&s=612x612&w=0&k=20&c=HU9fGxunk5fCW3pN-I1cS53X8--QBgYYDUPInhyTMZU=&é"
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">Pizza Hut</Typography>
          <Typography variant="body2">50% off on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>{"casablanca"}</p>
            <p className="text-sm text-blue-500">May 15 , 2024 12:00 AM </p>
            <p className="text-sm text-red-500"> May 20 , 2024 12:00 AM </p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton>
              <DeleteIcon></DeleteIcon>
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
