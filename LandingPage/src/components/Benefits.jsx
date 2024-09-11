import bene from '../assets/bene.jpg';

function Benefits() {
  return (
    <div className="w-full h-screen flex flex-col p-10 bg-custom-blue">   
      <div className="mb-8 ml-16">
        <h1 className="text-3xl font-bold">
          <span className="text-custom-green">Learner</span> <span className="text-white">Benefits</span>
        </h1>
      </div>
      <div className="flex w-full">
        <img src={bene} alt="Benefits" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Benefits;
