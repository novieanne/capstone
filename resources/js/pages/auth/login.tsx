import { Head, Link, useForm } from '@inertiajs/react';

import { route } from 'ziggy-js';
import { FormEventHandler } from 'react';
import InputError from '@/components/input-error';


type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    
}

export default function Login({status}: LoginProps) {
     const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

     const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };
    
    return (
        <>
            <Head title='login'/>

            <div className='flex mt-6 justify-center items-center'>
                
                <form className=' rounded-2xl border-2 p-7 text-center'
                  onSubmit={submit}     
                > 
                <h1 className='font-bold text-4xl mb-5 mt-3'>LOGIN</h1>
                <div>
                    <input className='w-full border-2 rounded-sm p-1.5 mb-3'
                        type="text" 
                        name='email' 
                        id='email' 
                        placeholder='email' 
                        required 
                        autoFocus
                        tabIndex={1}
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} />
                </div>        
                <div>
                    <input className='w-full border-2 rounded-sm p-1.5'
                        type="password" 
                        name='password' 
                        id='password' 
                        placeholder='password' 
                        required 
                        tabIndex={2}
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                     <InputError message={errors.password} />
                </div>

                <button className='w-full font-semibold bg-amber-300 my-3 p-1.5 rounded-sm hover:bg-amber-400'
                        type='submit' tabIndex={4} disabled={processing}
                >
            
                         login
                </button>

                <div className="text-center text-2">
                    Don't have an account yet?
                    <Link 
                        className="text-[#FF9D41] hover:underline" 
                        href = {route('welcome', {tab: 'register'})}
                    >
                        Create here
                    </Link>
                </div>
                     {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
                </form>
            </div>         
        </>
    );
}