import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id,price,img } = service;
  const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customer_name : name,
            date,
            service : title,
            email,
            img,
            service_id : _id,
            price
        }
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Order Booking Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })


    }

  return (
    <div className="my-12">
      <h3 className="text-3xl text-center mb-6">Service : {title}</h3>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            defaultValue={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={'$' + price}
            readOnly
            className="input input-bordered"
            required
          />
        </div>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary w-full">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
