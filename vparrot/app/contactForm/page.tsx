'use client';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface IFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const allowSafeCharsRegex = /^[a-zA-Z0-9 .,!?:°'"-]+$/;
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormData>();
  const router = useRouter();
  

  const slug = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get("id") : null;
  const parsedSlug = slug !== null ? parseInt(slug) : null;
  


  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    await axios.post('/api/sendGrid', data);
    reset();
    setIsSent(true);
  };

  useEffect(() => {    
    if (parsedSlug == null || isNaN(parsedSlug)) {
      setTimeout(() => {
        router.refresh();
      }, 1000);
  
      reset(); 
    }
  
    // Gére la redirection après l'envoi du formulaire
    if (isSent) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [isSent, router, parsedSlug, reset]); 

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 relative">
      <div className="absolute inset-0 flex blur-sm justify-center items-center">
        <Image src="/images/background.svg" alt="background colored image" layout="fill" objectFit="cover" className="backdrop-blur-md" />
      </div>
      <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-md w-1/3 z-10">
        <h1 className="text-2xl mb-4">Contactez-nous</h1>
        {isSent ? (
          <div className="text-green-500">Votre message a été envoyé avec succès.</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Name:</label>
              <input {...register('name', { required: 'Le champs est requis', 
                              validate: value => allowSafeCharsRegex.test(value) || "Le nom contient des caractères invalides"
                            })} className="border rounded p-2" />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Email:</label>
              <input {...register('email', { required: 'Le champs est requis', 
                              validate: value => allowSafeCharsRegex.test(value) || "Le nom contient des caractères invalides"
                            })} className="border rounded p-2" />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Sujet:</label>
              <input
                defaultValue={`Demande de renseignent pour l'annonce n°: ${parsedSlug !== null ? parsedSlug : 'N/A'}`} 
                {...register('subject', { required: 'Le champs est requis', 
                validate: value => allowSafeCharsRegex.test(value) || "Le nom contient des caractères invalides"
              })}
                className="border rounded p-2"
              />
              {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Message:</label>
              <textarea {...register('message', { required: 'Le champs est requis',
                              validate: value => allowSafeCharsRegex.test(value) || "Le nom contient des caractères invalides"
                            })} className="border rounded p-2"></textarea>
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Envoyer</button>
          </form>
        )}
      </div>
    </div>
  );
}
