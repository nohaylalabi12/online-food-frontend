import React from "react";
import CartItem from "./CartItem";
import { Divider, Modal, TextField } from "@mui/material";
import AddressCard from "./AddressCard";
import {Button, Card, Box, Grid} from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Form,Field, Formik } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};
const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street address is requierd"),
  state: Yup.string().required("State is requierd"),
  pincode: Yup.string().required("Pincode is requierd"), // Correction
  city: Yup.string().required("City is requierd"),
});

const items = [1, 1];
const Cart = () => {
  const creatOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {
    console.log("from value : ", values);
  };
  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item) => (
            <CartItem></CartItem>
          ))}

          <Divider />
          <div className="billlDetaills px-5 texts-sm text-orange-500">
            <p className="font-extralight py-5">Bill Details </p>
            <div className="space-y-3">
              <div className="flex justify-between text-white">
                <p>Item Total</p>
                <p>65 DH</p>
              </div>
              <div className="flex justify-between text-white">
                <p>Deliver Fee</p>
                <p>12 DH</p>
              </div>
              <div className="flex justify-between text-white">
                <p>GST and Restaurant Charges</p>
                <p>8 DH</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-white">
              <p>Total pay</p>
              <p>85 DH</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1, 1].map((item) => (
                <AddressCard
                  handleSelectAddress={creatOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-white">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="state"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="city"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="pincode"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                    sx={{ color: "#ffffff", fontWeight: "bold" }}
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
