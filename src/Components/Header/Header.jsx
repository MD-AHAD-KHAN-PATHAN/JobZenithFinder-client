import { BiSolidBusiness, BiSolidShoppingBags } from 'react-icons/bi';
import { ImManWoman } from 'react-icons/im';
import { BsPersonWorkspace } from 'react-icons/bs';

const Header = () => {
    return (
        <div className=''>
            <div className="md:flex md:flex-row-reverse items-center h-[450px]">
                <div>
                    <img className="lg:max-w-lg max-w-sm" src="https://i.ibb.co/54LRXJs/undraw-Interview-re-e5jn.png" alt="banner_img" />
                </div>
                <div className="max-w-3xl">
                    <h1 className="md:text-5xl text-3xl text-center font-bold">Find Your <span className='text-teal-400'>Dream Job</span> Today</h1>
                    <p className="my-4 max-w-lg text-justify p-4">Discover a world of opportunities with our job hunting platform. Whether you're a recent graduate, an experienced professional, or someone looking to change careers, we've got you covered.</p>
                    <div></div>
                </div>

            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 justify-around w-full mx-auto bg-teal-100 rounded-md p-4 md:mt-0 mt-20'>
                <div className='flex items-center gap-4 p-2 border-l-4 border-teal-600'>
                    <BiSolidBusiness className='text-3xl text-teal-400'></BiSolidBusiness>
                    <div>
                        <p className='text-lg font-bold'>17242</p>
                        <h3>Live Jobs</h3>
                    </div>
                </div>
                <div className='flex items-center gap-4 p-2 border-l-4 border-teal-600'>
                    <BiSolidShoppingBags className='text-3xl text-teal-400'></BiSolidShoppingBags>
                    <div>
                        <p className='text-lg font-bold'>985</p>
                        <h3>Companies</h3>
                    </div>
                </div>
                <div className='flex items-center gap-4 p-2 border-l-4 border-teal-600'>
                    <ImManWoman className='text-3xl text-teal-400'></ImManWoman>
                    <div>
                        <p className='text-lg font-bold'>41255</p>
                        <h3>Candidates</h3>
                    </div>
                </div>
                <div className='flex items-center gap-4 p-2 border-l-4 border-teal-600'>
                    <BsPersonWorkspace className='text-3xl text-teal-400'></BsPersonWorkspace>
                    <div>
                        <p className='text-lg font-bold'>5271</p>
                        <h3>New Jobs</h3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;