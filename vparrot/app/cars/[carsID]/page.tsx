import Footer from '@/app/components/Footer/page';
import cardsCarData from '../../cardCarsData';


const CardDetail = ({ params }: { params: { carsID: string } }) => {
    const card = cardsCarData.find(c => c.slug === params.carsID);

    if (!card) {
        return <div>Loading...</div>;
    }

    return (
        <>
        
    <div>
      <h1 className='text-black-500 text-base md:text-lg lg:text-6xl font-bold mt-4 mb-2'>Car Details</h1>
      {/* <p>Car ID: {params.carsID}</p> */}
      <img className="flex flex-col mx-auto sm:w-full md:w-1/2 lg:w-3/4 md:rounded" src={card.imageUrl} alt={card.title} />
      {/* revoir la mise en page */}
      <div className='flex justify-between'>
        <div>
            <p>Car name: {card.title}</p>
            <p>Car description: {card.description}</p>
        </div>
        <button className='btn'>Nous contacter</button>
      </div>
    </div>
    <Footer/>
        </>
    );
};

export default CardDetail;
