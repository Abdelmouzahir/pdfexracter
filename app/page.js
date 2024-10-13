
"use client"
import React from "react";
import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

import { useRouter } from "next/navigation";


export default function Home() {

   const router = useRouter();


   function handleSubmit() {
      router.push("/confirmation");

   }

   const [salaryRange, setSalaryRange] = useState("0");
   const [formData, setFormData] = useState({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      address: "",
      province: "", 
      link: "",
    });



  return (
  <main className=" ml-2 min-h-screen bg-cover py-20"
  style={{ backgroundImage: "url(/hiring.jpg)" }}
  > 
  <div className="bg-black bg-opacity-70 absolute inset-0 py-10">
  <div className="flex justify-center items-center mb-6">
     <div className="  bg-indigo-300 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-center mb-4 text-xl font-semibold">Upload Your Resume 📃</h1>
        <div className="mb-4 mt-2 flex flex-col items-center">
          <p className="mb-2">Upload Here 🔄️:</p>
          <label className="bg-slate-200 p-2 border border-gray-300 rounded cursor-pointer hover:bg-slate-300">
            <input
             type="file"
             className=""
           />  
          </label>
        </div>
       <p className="text-center text-black-500">DOC, DOCX, PDF (2 MB)</p>
       <div className="flex justify-center">
          <button onClick={handleSubmit} className=" bg-indigo-500 py-3 px-14 text-center hover:bg-indigo-800 text-white mt-4 rounded-md">
           Submit
          </button>
       </div>
    </div>
  </div>
         
           <div className="justify-center  flex mb-2">
           <div className=" mb-4 mt-2  ml-2 flex flex-row items-center" >
             <p className="mr-2  text-lg text-white">First Name:</p>
              <input
              type="text"
               className="bg-slate-200 rounded-md py-1 px-2"
               value={formData.fname}
               
               />
            </div>

             <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
               <p className="mr-2 text-lg text-white">Last Name:</p>
               <input
                  type="text"
                  className="bg-slate-200 rounded-md py-1 px-2"
                  value={formData.lname}
                  
                />
             </div>

              <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
                <p className="mr-2 text-lg text-white">Email:</p>
                 <input
                  type="text"
                   className="bg-slate-200 rounded-md w-full py-1 px-2"
                   value={formData.email}
                   
                />
              </div>
         </div>

         <div className="justify-center  flex mb-2">
           <div className=" mb-4 mt-2  ml-2 flex flex-row items-center">
               <p className="mr-2 text-lg text-white">Phone Number:</p>
               <input
                  type="text"
                  className="bg-slate-200 rounded-md py-1 px-2" 
                  value={formData.phone}
                  
               />
           </div>

            <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
              <p className="mr-2 text-lg text-white">Address:</p>
              <input
                 type="text"
                 className="bg-slate-200 rounded-md py-1 px-2"
                  value={formData.address}
                  
                />
            </div> 
            <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
            <p className="mr-2 text-lg text-white">Province:</p>
            <input
                type="text"
                className="bg-slate-200 rounded-md py-1 px-2"
                value={formData.province}
             />
            </div>
         </div>
         <div className="justify-center  flex mb-2">
            <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
              <p className="mr-2 text-lg text-white">Link:</p>
              <input
                 type="text"
                 className="bg-slate-200 rounded-md py-1 px-2"
                 value={formData.link}
                />
            </div> 
            <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
            <p className="mr-2 text-lg text-white">Salary Range:</p>
            <input
                type="number"
                min={0}
                max={1000000}
                className="bg-slate-200 rounded-md py-1 px-2"
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value) }
             />
            </div>
         </div>
         
       
     </div>     
     </main>
    
  );
}
