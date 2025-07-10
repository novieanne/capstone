import { Head, Link, useForm } from '@inertiajs/react';
import LandingNav from '@/components/nav-header';
import { route } from 'ziggy-js';
import { FormEventHandler } from 'react';
import InputError from '@/components/input-error';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

       const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title='create account'/>
            
            <div className='flex mt-6 justify-center items-center'>
                
                <form className=' rounded-2xl border-2 p-7 text-center'
                     onSubmit={submit}      
                >
                <h1 className='font-bold text-4xl mb-5 mt-3'>Create Acc</h1>
                  <div>
                    <input className='w-full border-2 rounded-sm p-1.5 mb-3'
                        type="text" 
                        name='name' 
                        id='name' 
                        placeholder='name' 
                        required 
                         autoFocus
                        tabIndex={1}
                        autoComplete="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        disabled={processing}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div> 
                <div>
                    <input className='w-full border-2 rounded-sm p-1.5 mb-3'
                        type="text" 
                        name='email' 
                        id='email' 
                        placeholder='email' 
                        required 
                        tabIndex={2}
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        disabled={processing}
                    />
                </div>        
                <div>
                    <input className='w-full border-2 rounded-sm p-1.5'
                        type="password" 
                        name='password' 
                        id='password' 
                        placeholder='password' 
                        required 
                        tabIndex={3}
                        autoComplete="new-password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        disabled={processing}
                    />
                     <InputError message={errors.password} />
                </div>

                <button className='w-full font-semibold bg-amber-300 my-3 p-1.5 rounded-sm hover:bg-amber-400'
                        type='submit' tabIndex={4} disabled={processing}
                >
                        Create account
                </button>

                <p className="text-center text-2">
                    Already have an account?
                    <Link 
                        className="text-[#FF9D41] hover:underline" 
                        href = {route('welcome', {tab: 'login'})}
                    >
                        Login here
                    </Link>
                </p>

                </form>
            </div>         
        </>
    );
}