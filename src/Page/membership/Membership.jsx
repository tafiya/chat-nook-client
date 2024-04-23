import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";
import usePayment from "../../hooks/usePayment";
import membership from '../../assets/image/member.svg'
import './button.css'
const Membership = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const [payments]=usePayment()
    return (
      <div className="home items-center justify-center   p-6 md:p-0" >

        {
          payments.length > 0 ?
            < div className=" flex justify-center md:my-24">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={membership} alt="Shoes" className="rounded-xl" />

                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Congratulation!</h2>
                  <p>You are already our Member </p>
                  <div className="card-actions">
                    <Link to='/'>          <button className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text">Back Home</span>
                    </button></Link>

                  </div>
                </div>
              </div>

            </div> :
            <div className="md:mb-20  ">
              <div className=" md:pb-[225px]  flex justify-center  ">

                <Elements className=" " stripe={stripePromise}>
                  <div className=" md:mt-40  bg-white md:w-1/2 w-full rounded-xl shadow-lg shadow-[#265073]  ">
                    <div className=" flex items-center justify-center">
                      <h2 className=" text-2xl text-center text-[#265073] rounded-badge shadow-lg shadow-[#2D9596] font-bold mt-6 mb-16  p-4 md:w-1/2">  Make Payment</h2>

                    </div>
                    <CheckoutForm ></CheckoutForm>
                    <div className=" flex justify-center mb-4 mt-8">
                      <Link to='/'>          <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Back Home</span>
                      </button></Link>
                    </div>


                  </div>


                </Elements>


              </div>

            </div>

        }
      </div>
    );
};

export default Membership;

