import React, { useEffect, useState } from "react";
import OrderHeader from "../UserComponents/OrderComponents/OrderHeader";
import SingleOrder from "../UserComponents/OrderComponents/SingleOrder";
import { useSelector } from "react-redux";

export default function Orders(props) {
  const [order, setOrders] = useState([]);
  const orderDetails = useSelector((store) => store.cartData.orders);
  // console.log(orderDetails);
  useEffect(function getOrders() {
    async function getAllOrders() {
      // const data = {
      //   orders: [
      //     {
      //       deliveryStatus: "pending",
      //       itemsOrdered: [
      //         {
      //           id: "100",
      //           itemName: "Margherita",
      //           description:
      //             "Classic delight with 100% real mozzarella cheese.",
      //           price: 250,
      //           imageSource: "/photos/bestsellers/marghareeta.png",
      //           totalValue: 500,
      //           quantity: 2,
      //         },
      //       ],
      //       date: "2024-12-31T13:15:41.199Z",
      //       _id: "676f2886d9ab70474037fd94",
      //       deliveryAddress: {
      //         location: [28.4595, 75.0266],
      //         addressInfo: "dsfsdfsd",
      //         flatNo: "22121",
      //         addressType: "Other",
      //       },
      //       couponApplied: "no Coupon Applied",
      //       subTotal: "500",
      //       grandTotal: "590",
      //       __v: 0,
      //     },
      //     {
      //       deliveryStatus: "pending",
      //       itemsOrdered: [
      //         {
      //           id: "100",
      //           itemName: "Margherita",
      //           description:
      //             "Classic delight with 100% real mozzarella cheese.",
      //           price: 250,
      //           imageSource: "/photos/bestsellers/marghareeta.png",
      //           totalValue: 1250,
      //           quantity: 5,
      //         },
      //         {
      //           id: "101",
      //           itemName: "Farmhouse",
      //           description:
      //             "Delightful combination of onion, capsicum, tomato & grilled mushroom.",
      //           price: 249,
      //           imageSource: "/photos/bestsellers/farmhouse.png",
      //           totalValue: 747,
      //           quantity: 3,
      //         },
      //         {
      //           id: "102",
      //           itemName: "Veg Extravaganza",
      //           description:
      //             "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese.",
      //           price: 325,
      //           imageSource: "/photos/bestsellers/extravegenza.png",
      //           totalValue: 650,
      //           quantity: 2,
      //         },
      //       ],
      //       date: "2024-12-31T13:15:41.199Z",
      //       _id: "676f30c179824145586d737f",
      //       deliveryAddress: {
      //         location: [28.4595, 75.0266],
      //         addressInfo: "dsfsdfsd",
      //         flatNo: "22121",
      //         addressType: "Other",
      //       },
      //       couponApplied: "no Coupon Applied",
      //       subTotal: "2647",
      //       grandTotal: "3123.46",
      //       __v: 0,
      //     },
      //     {
      //       deliveryStatus: "pending",
      //       itemsOrdered: [
      //         {
      //           id: "102",
      //           itemName: "Veg Extravaganza",
      //           description:
      //             "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese.",
      //           price: 325,
      //           imageSource: "/photos/bestsellers/extravegenza.png",
      //           totalValue: 325,
      //           quantity: 1,
      //         },
      //       ],
      //       date: "2024-12-31T13:15:41.199Z",
      //       _id: "67719e25335da92298983a32",
      //       deliveryAddress: {
      //         location: [22.344271782481858, 78.39843750000001],
      //         addressInfo: "sector 69, gurugram",
      //         flatNo: "125",
      //         addressType: "Home",
      //       },
      //       couponApplied: "no Coupon Applied",
      //       subTotal: "325",
      //       grandTotal: "383.5",
      //       __v: 0,
      //     },
      //     {
      //       deliveryStatus: "pending",
      //       itemsOrdered: [
      //         {
      //           id: "102",
      //           itemName: "Veg Extravaganza",
      //           description:
      //             "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese.",
      //           price: 325,
      //           imageSource: "/photos/bestsellers/extravegenza.png",
      //           totalValue: 325,
      //           quantity: 1,
      //         },
      //       ],
      //       date: "2024-12-31T13:15:41.199Z",
      //       _id: "67719e523fdb3c157c8fe71b",
      //       deliveryAddress: {
      //         location: [22.344271782481858, 78.39843750000001],
      //         addressInfo: "sector 69, gurugram",
      //         flatNo: "125",
      //         addressType: "Home",
      //       },
      //       couponApplied: "no Coupon Applied",
      //       subTotal: "325",
      //       grandTotal: "383.5",
      //       __v: 0,
      //     },
      //     {
      //       deliveryStatus: "pending",
      //       itemsOrdered: [
      //         {
      //           id: "100",
      //           itemName: "Margherita",
      //           description:
      //             "Classic delight with 100% real mozzarella cheese.",
      //           price: 250,
      //           imageSource: "/photos/bestsellers/marghareeta.png",
      //           totalValue: 500,
      //           quantity: 2,
      //         },
      //       ],
      //       date: "2024-12-29T19:13:38.703Z",
      //       _id: "67719f69ef5f4b1d04dc0a3d",
      //       deliveryAddress: {
      //         location: [22.344271782481858, 78.39843750000001],
      //         addressInfo: "sector 69, gurugram",
      //         flatNo: "125",
      //         addressType: "Home",
      //       },
      //       couponApplied: "no Coupon Applied",
      //       subTotal: "500",
      //       grandTotal: "590",
      //       __v: 0,
      //     },
      //   ],
      // };
      // redux orders
      const data = {
        orders: orderDetails,
      };
      console.log(data);
      if (!data.orders) {
        setOrders([]);
      } else {
        setOrders(data.orders);
      }
    }
    getAllOrders();
  }, []);

  return (
    <>
      <OrderHeader />
      <div className="flex flex-wrap gap-3 px-3 py-3">
        {order.map((item) => (
          <SingleOrder key={item.itemsOrdered} orderInfo={item} />
        ))}

        {/* <SingleOrder />
        <SingleOrder /> */}
      </div>
    </>
  );
}
