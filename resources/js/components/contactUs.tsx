import { Head } from '@inertiajs/react';

export default function ContactUs(){
    return (
    <>
        <Head title="ContacUs"></Head>

        <div className="h-screen bg-[#ececec] px-20 py-10 " >
        <h1 className="text-[50px] font-bold mb-10">Contact Us</h1>
            <div className="ml-[50px] text-[20px] space-y-8">
                <p>You can reach out to us through:</p>
                <h2>Location</h2>
                <h2>Contact No.</h2>
                <h2>Email</h2>
            </div>
        </div>
    
        <div className="text-center py-6 text-gray-500 shadow ">
            ©2025 InternConnect BulSU. All rights reserved.
        </div>
    </>
        
    );
}