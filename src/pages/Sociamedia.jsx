import Clublogo from "../assets/clublogo.svg"
import Memberlogo from "../assets/memberlogo.svg"
import PaymentLogo from "../assets/paymentlogo.svg"
import Eventlogo from "../assets/eventlogo.svg"

const Socialmedia = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-7">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Helping a local business reinvent itself
            </h2>
            <p className="text-gray-600">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
            <div className="flex items-center gap-4">
              <img src={Memberlogo} alt="Members" className="w-12 h-12 object-contain" />
              <div>
                <span className="text-xl font-bold text-gray-900">2,245,341</span>
                <p className="text-sm text-gray-500">Members</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Clublogo} alt="Clubs" className="w-12 h-12 object-contain" />
              <div>
                <span className="text-xl font-bold text-gray-900">46,328</span>
                <p className="text-sm text-gray-500">Clubs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={Eventlogo} alt="Events" className="w-12 h-12 object-contain" />
              <div>
                <span className="text-xl font-bold text-gray-900">828,867</span>
                <p className="text-sm text-gray-500">Event Bookings</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={PaymentLogo} alt="Payments" className="w-12 h-12 object-contain" />
              <div>
                <span className="text-xl font-bold text-gray-900">1,926,436</span>
                <p className="text-sm text-gray-500">Payments</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Socialmedia;
