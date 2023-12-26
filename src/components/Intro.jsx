import react from 'react';

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col 
        text-center pt-20 pb-6'>
            <h1 className='text-3xl md:text-5xl dark:text-white mb-1
            md:mb-3 font-bold'>Sanujan Uthayasooriyan</h1>
            <p className='text-base md:text-xl mb-3 
            font-medium'>Software Engineer</p>
            <p className='text-sm max-w-3xl '>
            Associate Software Engineer with 1+ years of experience mainly worked on 
            backend and DevOps in a Cloud Native Project. Experienced in Go, PostgreSQL, 
            Kubernetes, Docker, AWS and Terraform. Offers a strong background in creative 
            problem-solving and a proven ability to multi-task and prioritize in 
            fast-paced environment, fast learner on new technologies and 
            can implement and write codes in clean and reusable.
            </p>
        </div>
    )
}

export default Intro;