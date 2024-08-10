import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { MdSubtitles } from 'react-icons/md';
import { LiaCommentSolid } from 'react-icons/lia';
import { IoImages } from 'react-icons/io5';
import Upload from '../Upload';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Form = ({ onPreview ,setShowPreview,onClose}) => {
  const { register, handleSubmit, setValue,reset, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);

  const handlePreview = (data) => {
    onPreview({ ...data, image });
  };

  const handleFormSubmit = (data) => {

    setShowPreview(false);

    reset();
    setImage(null);

    toast.success("Post submitted successfully!");

    onClose();
  };

  return (
    <form className='m-4'  onSubmit={handleSubmit(handleFormSubmit)}>

        {/* Title */}
      <div className='flex items-center gap-4'>
    
        <div className=' bg-[#b7950b]  w-[45px] h-[45px] flex justify-center items-center rounded-lg'>
          <MdSubtitles className='text-white text-[28px]' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="title" className='text-[white] text-left text-[18px] leading-[30px]'>Title</label>
          <input
            type='text'
            id="title"
            name="title"
            className='  bg-gray-700 text-white outline-none border-none rounded-md p-2 w-[350px]'
            {...register("title", { required: true })} />
        </div>
      </div>

       {/* Content */}
      <div className='flex items-center place-content-start gap-4 mt-6'>

        <div className='  bg-[#b7950b] w-[45px] h-[45px] flex justify-center items-center rounded-lg'>
          <LiaCommentSolid className='text-white text-[28px]' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="content" className='text-[white] text-left text-[18px] leading-[30px]'>Content</label>
          <textarea
            type='text'
            id="content"
            name="content"
            rows="4"
            className='bg-gray-700 text-white outline-none border-none no-scrollbar rounded-md p-2 w-[350px] h-[150px]'
            {...register("content", { required: true })}>
          </textarea>
        </div>
      </div>

       {/* Add Images */}
      <div className='flex items-center gap-x-4 mt-4'>
        <div className='bg-[#b7950b] w-[45px] h-[45px] flex justify-center items-center rounded-lg'>
          <IoImages className='text-white text-[28px]' />
        </div>
        <Upload name="image" label="Add Image" register={register} setValue={setValue} errors={errors} onChange={setImage}/>
      </div>

      <div className='flex items-center mt-10 justify-start gap-4 translate-x-16'>
      
          <button
            type="button"
            className='bg-[#1b4f72] text-white p-2 rounded'
            onClick={handleSubmit(handlePreview)}
          >
            View Preview
          </button>
      
        <button
          type="submit"
          className='bg-[#1b4f72] text-white p-2 rounded'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
