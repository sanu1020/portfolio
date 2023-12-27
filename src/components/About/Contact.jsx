import react from 'react';
import Title from './Title';

function Contact() {
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form
                    action="https://getform.io/f/a24d5ee8-7e62-4537-b9d6-4a82ecb0a606"
                    method="POST"
                    className='flex flex-col w-full md:w-7/12'
                >
                    <Title>Contact</Title>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        className='p-1 bg-transparent border-2 rounded-md
                        focus:outline-none'
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        className='p-1 bg-transparent border-2 rounded-md
                        focus:outline-none'
                    />
                    <textarea
                        name='message'
                        placeholder='Message'
                        rows={5}
                        className='p-1 mb-4 bg-transparent border-2 rounded-md
                        focus:outline-none'
                    />
                    <button
                        type='submit'
                        className='text-center inline-block px-4 py-1.5
                        w-max text-base font-medium rounded-md text-white
                        bg-gradient-to-r from-stone-700 to-stone-600 drop-shadow-md
                        hover:stroke-white'
                    >
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;