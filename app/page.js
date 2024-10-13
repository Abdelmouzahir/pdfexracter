
"use client"
import React from "react";
import { useState } from "react";




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
   
    const handlePDFUpload = async (event) =>{
      const file = event.target.files[0];
      if (file && file.type === 'application/pdf') {
         const reader = new FileReader();

         reader.onload = async function() {
            const pdfBuffer = this.result;

            //send the pdf to the server-side API for parsing
            const response = await fetch("/api/parse-pdf", {
               method: "POST",
               body: pdfBuffer,
               headers: {
                  "Content-Type": "application/octet-stream",
               },
            });
            const result = await response.json();

            
           if (result.text) {
               const extractedData = extractDataFromResume(result.text);
               console.log(extractedData);
                //Update the form fields with data
            setFormData({
               fname: extractedData.fname || "",
               lname: extractedData.lname  || "",
               email: extractedData.email  || "",
               phone: extractedData.phone || "", 
               address: extractedData.address || "",
               province: extractedData.province || "",
               link: extractedData.link || "",
            });
           } else {
                console.error("Failed to parse PDF")
           }
         };
         reader.readAsArrayBuffer(file);
    }
   };
   
   const extractDataFromResume = (text) => {
      // Regex patterns for each piece of information based on the provided format
      const nameRegex = /^([A-Za-z]+)\s+([A-Za-z]+)$/m; // First and last name
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/m; // Email format
      const addressRegex = /^([A-Za-z\s]+),$/m; // City name on its own line
      const provinceRegex = /^(QC|ON|BC|[A-Z]{2})$/m; // Province in two uppercase letters
      const phoneRegex = /\+?(\d{1,3})?\s?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/m; // Phone number in different formats
      const linkRegex = /(https?:\/\/[^\s]+)/m; // GitHub or any link starting with http/https
    
      const nameMatch = text.match(nameRegex);
      const lines = text.split('\n').map(line => line.trim()); // Split text into lines
    
      // Find city and province by searching through lines
      const addressMatch = lines.find(line => addressRegex.test(line));
      const provinceMatch = lines.find(line => provinceRegex.test(line));
    
      return {
        fname: nameMatch?.[1] || '', // Extracts first name
        lname: nameMatch?.[2] || '', // Extracts last name
        email: text.match(emailRegex)?.[0] || '', // Extracts email
        address: addressMatch || 'Gatineau', // Extracts city from matching line
        province: provinceMatch || 'QC', // Extracts province from matching line
        phone: text.match(phoneRegex)?.[0] || '', // Extracts phone number
        link: text.match(linkRegex)?.[0] || '', // Extracts GitHub or any other link
      };
    };
    
    
    

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
             accept="application/pdf"
             onChange={handlePDFUpload}
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
