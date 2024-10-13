"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function Confirmation() {
    const router = useRouter();

    function handleBackHome() {
        router.push("/");
     }

    return (
        <main className=" ml-2 min-h-screen bg-cover py-20"
        style={{ backgroundImage: "url(/hiring.jpg)" }}
        > 
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-70 absolute inset-0 py-10">
            <div className="bg-indigo-300 rounded-lg shadow-lg p-8 max-w-md text-center">
                <h1 className="text-3xl font-semibold text-black-600 mb-4">
                    Congratulations 🎉🎉!
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Your application has been sent ✅.
                </p>
                <button onClick={handleBackHome} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
                    Go Back to Home
                </button>
            </div>
        </div>
        </main>
    );
}
