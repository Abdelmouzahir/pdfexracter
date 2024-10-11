

export default function Home() {
  return (
  <main className=" ml-2 min-h-screen  py-20"> 
     
  <div className="flex justify-center items-center mb-6">
     <div className=" bg-cyan-200 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-center mb-4 text-xl font-semibold">Upload Your Resume 📃</h1>
        <div className="mb-4 mt-2 flex flex-col items-center">
          <p className="mb-2">Upload Here 🔄️:</p>
          <label className="bg-slate-200 p-2 border border-gray-300 rounded cursor-pointer hover:bg-slate-300">
            <input
             type="file"
             className="hidden"
           />
            Browse
          </label>
        </div>
       <p className="text-center text-gray-500">DOC, DOCX, PDF (2 MB)</p>
       <div className="flex justify-center">
          <button className="bg-yellow-500 py-3 px-14 text-center hover:bg-orange-700 text-white mt-4 rounded-md">
           Submit
          </button>
       </div>
    </div>
  </div>
         
           <div className="justify-center  flex mb-2">
           <div className=" mb-4 mt-2  ml-2 flex flex-row items-center" >
             <p className="mr-2  text-lg">First Name:</p>
              <input
              type="text"
               className="bg-slate-200 rounded-md py-1 px-2"
               />
            </div>

             <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
               <p className="mr-2 text-lg">Last Name:</p>
               <input
                  type="text"
                  className="bg-slate-200 rounded-md py-1 px-2"
                />
             </div>

              <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
                <p className="mr-2 text-lg">Email:</p>
                 <input
                  type="text"
                   className="bg-slate-200 rounded-md w-full py-1 px-2"
                />
              </div>
         </div>

         <div className="justify-center  flex mb-2">
           <div className=" mb-4 mt-2  ml-2 flex flex-row items-center">
               <p className="mr-2 text-lg">Phone Number:</p>
               <input
                  type="text"
                  className="bg-slate-200 rounded-md py-1 px-2" 
               />
           </div>

            <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
              <p className="mr-2 text-lg">Address:</p>
              <input
                 type="text"
                 className="bg-slate-200 rounded-md py-1 px-2"
                />
            </div> 
            <div className=" mb-4 mt-2 ml-2 flex flex-row items-center">
            <p className="mr-2 text-lg">Province:</p>
            <input
                type="text"
                className="bg-slate-200 rounded-md py-1 px-2"
             />
            </div>
         </div>
         
       
        
     </main>
    
  );
}
