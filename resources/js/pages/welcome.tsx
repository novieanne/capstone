import { usePage } from '@inertiajs/react';
import AboutUs from "@/components/aboutUs";
import Landing from "../components/landing";


export default function Welcome(){
    const { tab = 'aboutUs' } = usePage().props as { tab?: string };
    return (
        <>
        <div>           
                <Landing tab={tab} />   
        </div>
           
        </>
    );
}