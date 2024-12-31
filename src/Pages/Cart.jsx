import React, { useEffect, useState } from "react";
import CartNavbar from "../UserComponents/CartComponents/CartNavbar";
import CartContent from "../UserComponents/CartComponents/CartContent";
import { useDispatch } from "react-redux";
import CartModal from "../UserComponents/CartComponents/CartTotalAddressOffers/CartModal";

export default function Cart(props) {
  const [displayError, setDisplayError] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Something went wrong! kindly check!"
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function getUserDetails() {
      const data = {
        name: "hello",
        email: "hello@gmail.com",
        contactNo: 1234567890,
        addresses: [
          {
            location: [28.4595, 75.0266],
            addressInfo: "street No.2, gurugram , haryana",
            flatNo: "1125/10",
            addressType: "Home",
          },
        ],
        selectedAddress: {
          location: [28.4738, 77.0107],
          addressInfo: "street No.2, gurugram , haryana",
          flatNo: "1125/10",
          addressType: "Home",
        },
        // selectedAddress: {
        //   location: [28.4595, 75.0266],
        //   addressInfo: "street No.2, gurugram , haryana",
        //   flatNo: "1125/10",
        //   addressType: "Home",
        // },
        cartItems: [],
      };
      // const data = await res.json();
      if (data.name) {
        if (data.selectedAddress) {
          dispatch({
            type: "customer/selectedAddress",
            payload: data.selectedAddress,
          });
        }
      }
    }
    getUserDetails();
  });
  return (
    <>
      <div className="bg-[#f2f2f2] h-svh w-full">
        <CartModal
          setErrorOccured={setErrorOccured}
          errorOccured={errorOccured}
          errorMessage={errorMessage}
        />
        <CartNavbar />

        <CartContent
          setErrorOccured={setErrorOccured}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </>
  );
}
