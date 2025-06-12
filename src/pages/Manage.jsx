import Membershiplogo from "../assets/membershiplogo.svg"
import Nationallogo from "../assets/nationallogo.svg"
import Clublogo from "../assets/clublogo.svg"

const Manage = ()=>{
    return(
        <div className="mt-3">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-700">
                    Manage your entire community <br /> in a single system
                </h2>
                <p className="text-sm text-gray-700 mt-1">
                    Who is Nextcent suitable for?

                </p>
            </div>

           <div className="flex flex-wrap justify-center gap-4">

                <div className="w-full sm:w-[48%] lg:w-1/4 bg-white p-6 text-center">
                    <img src={Membershiplogo} alt="Membership" className="mx-auto mb-4 w-16 h-16 object-contain" />
                    <h2 className="text-lg font-semibold mb-2 capitalize">Membership organisations</h2>
                    <p className="text-sm text-gray-600">
                        Our membership management software provides
                        full automation of membership renewals and payments
                    </p>
                </div>

                <div className="w-full sm:w-[48%] lg:w-1/4 bg-white p-6 text-center">
                    <img src={Nationallogo} alt="National" className="mx-auto mb-4 w-16 h-16 object-contain" />
                    <h2 className="text-lg font-semibold mb-2 capitalize">National associations</h2>
                    <p className="text-sm text-gray-600">
                        Our membership management software provides 
                        full automation of membership renewals and payments
                    </p>
                </div>

                <div className="w-full sm:w-[48%] lg:w-1/4 bg-white p-6 text-center">
                    <img src={Clublogo} alt="Clubs" className="mx-auto mb-4 w-16 h-16 object-contain" />
                    <h2 className="text-lg font-semibold mb-2 capitalize">
                        Clubs and groups
                    </h2>
                    <p className="text-sm text-gray-600">
                        Our membership management software provides 
                        full automation of membership renewals and payments
                    </p>
                </div>
        </div>

        </div>
    )
}

export default Manage