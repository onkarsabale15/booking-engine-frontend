import { useRouter } from "next/navigation"; // Import from "next/router" instead of "next/navigation"
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
 "react-hot-toast"
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const PropertyInfo = ({ propertyType, handlePropTypeChange }) => {
    const router = useRouter();
    return (
        <>
        <Toaster />
        <div className="row x-gap-20 y-gap-20">
            <div className="col-12">
                <div className="form-input">
                    <select required value={propertyType} onChange={(e)=>{handlePropTypeChange(e.target.value)}} className="form-select text-light-1">
                        <option value="" disabled >Select Property</option>
                        <option value="Villa">Villa</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Amenity">Amenity</option>
                    </select>
                </div>
            </div>
        </div>
        </>
    );
};

export default PropertyInfo;