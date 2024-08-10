import React, { useState } from 'react';
import Form1 from './Form1';
import { generateOg } from '../service/Operations/post';
import profilePhoto from '../Assets/Profile Photo.jpeg';
import { FaRegWindowClose } from "react-icons/fa";

const Post1 = ({ onClose }) => {
    const [showPreview, setShowPreview] = useState(false);
    const [previewData, setPreviewData] = useState({
        title: '',
        content: '',
        author: 'Shabbir Saiyad',
        image: '',
        ogImageUrl: '',
    });

    const handleClosePreview = () => {
        setShowPreview(false);
    };

    const handlePreview = async (data) => {
        try {
            const dataWithAuthor = { ...data, author: 'Shabbir Saiyad' };
            const ogImageUrl = await generateOg(dataWithAuthor);
            setPreviewData({ ...dataWithAuthor, ogImageUrl });
            setShowPreview(true);
        } catch (error) {
            console.error("Error generating OG image:", error);
            
        }
    };

    const letters = "Post".split('');

    return (
        <div className='relative z-[1000] !mt-0 grid place-items-center overflow-auto'>
            <div className='flex flex-row mt-4 p-8'>
      
                <div className=' bg-gradient-to-br from-gray-900 via-gray-800 to-black gap-[20px] transform -skew-y-6 p-4 rounded-md ml-8 skew-x-3 flex flex-col shadow-top-left-bottom'>

                    {/* Star with post */}
                    <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
                        {
                            [1, 2, 3, 4].map((star, index) => (
                                <svg
                                    key={star}
                                    className={`w-14 h-14 cursor-pointer text-yellow-500`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"

                                >
                                    <path d="M9.049 2.927C9.338 2.193 10.662 2.193 10.951 2.927L12.536 7.051C12.712 7.516 13.149 7.81 13.651 7.81H18.01C18.797 7.81 19.101 8.861 18.475 9.309L14.916 11.76C14.51 12.054 14.329 12.57 14.502 13.031L15.908 16.81C16.197 17.544 15.403 18.139 14.776 17.691L11.217 15.24C10.811 14.946 10.189 14.946 9.783 15.24L6.224 17.691C5.597 18.139 4.803 17.544 5.092 16.81L6.498 13.031C6.671 12.57 6.49 12.054 6.084 11.76L2.525 9.309C1.899 8.861 2.203 7.81 2.99 7.81H7.349C7.851 7.81 8.288 7.516 8.464 7.051L10.049 2.927z" />

                                    {index < letters.length && (
                                        <text
                                            x="10"
                                            y="13"
                                            fontSize="8"
                                            textAnchor="middle"
                                            fill="black"
                                        >
                                            {letters[index]}
                                        </text>
                                    )}
                                </svg>
                            )
                            )
                        }

                    </div>

                     {/* Close Button */}
                    <button
                        onClick={onClose}
                        className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition duration-300'
                    >
                        <FaRegWindowClose fontSize={24} className='text-white' />
                    </button>

                    {/* Profile Image and Name */}
                    <div className='flex items-center gap-4 p-4  bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 mt-6 border-r-0 rounded-l-lg shadow-lg translate-x-4 translate-y-3'>
                        <div>
                            <img
                                className='h-16 w-16 rounded-full shadow-lg'
                                src={profilePhoto}
                                alt="Profile"
                            />
                        </div>
                
                        <div className='  bg-[#1b4f72] p-2 rounded-md shadow-md'>
                            <p className='text-white text-small font-semibold'>Shabbir Saiyad</p>
                        </div>
                    </div>

                    {/* Form */}
                    <Form1 onPreview={handlePreview}  setShowPreview={setShowPreview}  onClose={onClose}/>
                </div>

                {/* Preview Section */}
                {showPreview && (
                 
                    <div className='bg-gradient-to-bl from-gray-900 via-gray-800 to-black  flex flex-col w-[500px] rounded-lg shadow-lg p-6 pl-0 space-x-6 transform -skew-x-6 skew-y-3'>

                        <div className='bg-gradient-to-bl w-[300px] p-6 from-gray-900 ml-0 via-gray-800 to-black border-2  border-l-0 rounded-r-lg  '>
                            <h2 className='text-center text-white text-[25px] leading-7'>Preview</h2>
                        </div>

                        <button
                            onClick={handleClosePreview}
                            className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition duration-300'
                        >
                            <FaRegWindowClose fontSize={24} className='text-white' />
                        </button>

                        <div className='flex-1 text-white '>

                            <div id='preview-section' className='space-y-2'>
                                <h3 className='text-2xl mt-2 text-left font-semibold'>{previewData.title} </h3>
                                <p className='text-sm text-gray-200 text-left'>By - {previewData.author}</p>
                                <p className='text-sm text-left mb-4'>{previewData.content}</p>
                                {previewData.image && (
                                    <img
                                        src={previewData.image}
                                        alt="Preview"
                                        className='w-full h-[300px] rounded-lg shadow-md mt-6'
                                    />
                                )}
                            </div>

                            {previewData.ogImageUrl && (
                                <>
                                    <div className='mt-6 bg-gradient-to-bl w-[300px] p-6 from-gray-900 ml-0 via-gray-800 to-black border-2  border-l-0 rounded-r-lg'>
                                        <h2 className='text-center text-white text-[25px] leading-7'>OG Image</h2>
                                    </div>

                                    <img
                                        src={previewData.ogImageUrl}
                                        alt="OG Image"
                                        className='w-full mt-6 rounded-lg shadow-md'
                                    />

                                </>


                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post1;
