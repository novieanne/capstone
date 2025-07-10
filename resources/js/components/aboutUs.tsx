import { Head} from '@inertiajs/react';

export default function AboutUs(){
    return (
        <>
          <Head title="Welcome"></Head>

        <main className="flex flex-col md:flex-row items-center justify-between px-20 py-10 max-w-7xl mx-auto">
            <div className="md:w-1/2 space-y-3">
                <h1 className="font-bold text-5xl">InternConnect BulSU</h1>
                <p className=" text-[#666666]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta
                    tempora optio magnam? Maiores distinctio ea praesentium in molestiae
                    temporibus explicabo velit sed aliquid! Tempore temporibus laborum
                    veniam perspiciatis debitis.
                </p>
            </div>

            <div className="md:w-1/2 flex justify-center items-center">
                <img className='w-[350px] h-[450px]' src="/images/pimentel.png" alt="loading"/>
            </div>
    </main>

        </>
    );
}