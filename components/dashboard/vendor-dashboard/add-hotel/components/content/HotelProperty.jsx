import { useRouter } from "next/navigation"; // Import from "next/router" instead of "next/navigation"
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
"react-hot-toast"
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const HotelProperty = ({ property, setProperty }) => {
    const router = useRouter();
    const [properties, setProperties] = useState(null);
    const handleChange = (e) => {
        const selectedValue = e.target.value;

        //get the record where _id matches to selectedValue
        const prop = properties.find(p => p._id == selectedValue);
        setProperty(prop);

    };
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const token = localStorage.getItem("token");
            if (token) {
                fetch(NEXT_PUBLIC_BACKEND_URL + "/api/userProperties", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then((res) => res.json()).then((data) => setProperties(data.data))
            } else {
                toast.error("Please login first!");
                setTimeout(() => {
                    router.push("/login")
                }, 1500)
            }
        } else {
            toast.error("Please login first!");
            setTimeout(() => {
                router.push("/login")
            }, 1500)
        }
    }, [])
    return (
        <>
            <Toaster />
            <div className="row x-gap-20 y-gap-20">
                <div className="col-12">
                    <div className="form-input">
                        <select required value={property._id} onChange={handleChange} className="form-select text-light-1">
                            <option value="" disabled >Select Property</option>
                            {properties && properties.map((property) => {
                                return <option key={property.id} value={property._id}>{property.name}</option>
                            })}
                            <Link href="/vendor-dashboard/add-property">
                                <option value="addProperty">Add New Property</option>
                            </Link>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelProperty;
