'use client';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';



interface ITestimonialTypeProps {
  name: string;
  rating: number;
  message: string;
}

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ITestimonialTypeProps>();
  const router = useRouter();
  const allowSafeCharsRegex = /^[a-zA-Z0-9 .,!?'"-]+$/;

  
 

  const onSubmit: SubmitHandler<ITestimonialTypeProps> = async (testimonial) => {
    try {
      await axios.post('/api/testimonials', testimonial);
      setIsSent(true); 
    } catch (error) {
      console.error('Erreur lors de l’envoi du témoignage:', error);
    }
  };

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="absolute inset-0 z-0 blur-sm">
        <Image src="/images/background.svg" alt="image abstraite" layout="fill" objectFit="cover" className="backdrop-blur-md"/>
      </div>
      <div className="relative z-10 w-full max-w-lg px-4 py-8 bg-white bg-opacity-90 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4 text-center">Ajoutez un témoignage</h1>
        {isSent ? (
          <div className="text-green-500 text-center">Votre message a été envoyé avec succès.</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium">Nom:</label>
              <input
                id="name"
                {...register('name', {
                  required: 'Le champs nom est requis',
                  validate: value => allowSafeCharsRegex.test(value) || "Le nom contient des caractères invalides"
                })} 
                className="border rounded p-2"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-medium">Message:</label>
              <textarea
                id="message"
                {...register('message', {
                  required: 'Le champs message est requis',
                  validate: value => allowSafeCharsRegex.test(value) || "Le message contient des caractères invalides"
                })}
                className="border rounded p-2"
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            
            <fieldset className="flex flex-row justify-center sm:justify-start">
              <legend className="text-lg font-medium">Note:</legend>
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <label key={ratingValue} className="flex items-center mx-1">
                  <input
                    {...register('rating', { required: 'Le champs note est requis' })}
                    type="radio"
                    id={`rating-${ratingValue}`}
                    value={ratingValue}
                  />
                  <span className="ml-1">{ratingValue}</span>
                </label>
              ))}
            </fieldset>
            {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
            
            <button type="submit" className="w-full sm:w-auto bg-blue-500 text-white p-2 rounded">Envoyer</button>
          </form>
        )}
      </div>
    </div>
  );
  
}