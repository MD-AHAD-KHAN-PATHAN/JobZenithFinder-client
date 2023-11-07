import { BsLightningFill } from "react-icons/bs";

const ClientsTestimonial = () => {

    return (
        <>
            <h1 className='text-5xl font-bold border-l-8 border-l-teal-600 p-4 mt-20'>Clients Testimonial</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-slate-100 gap-4 p-20 my-10">
                <div className="p-4 bg-white rounded-md">
                    <div>
                        <div className="rating gap-1 mb-4">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" checked />
                        </div>
                        <p>job owner will see all the bid requests made by the users on their posted jobs
                            in tabular format in this page.</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div className="flex gap-2">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://i.ibb.co/7j1J3Wm/ahad-khan-white.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            <div>
                                <h3 className="font-bold">Ahan Khan</h3>
                                <p>Digital Marketer</p>

                            </div>
                        </div>
                        <div className="text-5xl text-slate-300">
                            <BsLightningFill></BsLightningFill>
                        </div>

                    </div>
                </div>
                <div className="p-4 bg-white rounded-md">
                    <div>
                        <div className="rating gap-1 mb-4">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" checked />
                        </div>
                        <p>job owner will see all the bid requests made by the users on their posted jobs
                            in tabular format in this page.</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div className="flex gap-2">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://i.ibb.co/7j1J3Wm/ahad-khan-white.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            <div>
                                <h3 className="font-bold">Ahad Khan</h3>
                                <p>Web Developer</p>

                            </div>
                        </div>
                        <div className="text-5xl text-slate-300">
                            <BsLightningFill></BsLightningFill>
                        </div>

                    </div>
                </div>
                <div className="p-4 bg-white rounded-md">
                    <div>
                        <div className="rating gap-1 mb-4">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" checked />
                        </div>
                        <p>job owner will see all the bid requests made by the users on their posted jobs
                            in tabular format in this page.</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div className="flex gap-2">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://i.ibb.co/7j1J3Wm/ahad-khan-white.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            <div>
                                <h3 className="font-bold">Ahad Khan</h3>
                                <p>Graphics Designer</p>

                            </div>
                        </div>
                        <div className="text-5xl text-slate-300">
                            <BsLightningFill></BsLightningFill>
                        </div>

                    </div>
                </div>

            </div>
        </>

    );
};

export default ClientsTestimonial;