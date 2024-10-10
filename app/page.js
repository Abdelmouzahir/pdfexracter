

export default function Home() {
  return (
    <div className="min-h-screen py-40">
     <main > 
        <h1>Upload you Resume</h1>
        <div className="justify-center mb-2">
        <div className=" mb-4 mt-2 flex flex-row items-center" >
           <p className="mr-2">First Name:</p>
            <input
            type="text"
            className="bg-slate-200"
             />
        </div>

        <div className=" mb-4 mt-2 flex flex-row items-center">
           <p className="mr-2">Last Name:</p>
           <input
              type="text"
             className="bg-slate-200"
             />
       </div>

        <div className=" mb-4 mt-2 flex flex-row items-center">
           <p className="mr-2">Email:</p>
           <input
            type="text"
            className="bg-slate-200"
            />
        </div>
        <div className=" mb-4 mt-2 flex flex-row items-center">
           <p className="mr-2">Phone Number:</p>
           <input
            type="text"
            className="bg-slate-200" 
            />
        </div>
        <div className=" mb-4 mt-2 flex flex-row items-center">
           <p className="mr-2">Address:</p>
           <input
            type="text"
            className="bg-slate-200"
            />
        </div> 
        <div className=" mb-4 mt-2 flex flex-row items-center">
           <p className="mr-2">City:</p>
           <input
            type="text"
            className="bg-slate-200"
            />
        </div>
        <div className=" mb-4 mt-2 flex flex-row items-center">
           <p className="mr-2">Upload Resume:</p>
           <input
            type="file"
            className="bg-slate-200"
            />
        </div>
        </div>
        <button className=" bg-yellow-500 py-3 px-3 text-center hover:bg-orange-700 text-white mt-3 rounded-md">Submit</button>
     </main>
    </div>
  );
}
