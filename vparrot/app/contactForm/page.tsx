'use client'
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log('form data', data);
    await axios.post('/api/sendGrid', data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register('name', { required: 'Name is required' })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register('email', { required: 'Email is required' })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Sujet:</label>
          <input defaultValue="test"{...register('subject', { required: 'Message is required' })}></input>
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <div>
          <label>Message:</label>
          <textarea {...register('message', { required: 'Message is required' })}></textarea>
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

