//this is the component for turning the json API into jobBoardComponent//

//import react from react
import React from 'react';
//creating jobboardcomponent
const JobBoardComponent = ({ 
    //creating object called job acts as the JSON file key value
    job: { company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools,},

}) => {
    //array to store the json key
    const tags = [role, level];

    if(tools)
    {
        tags.push(...tools);
    }

    if(languages)
    {
        tags.push(...languages);
    }
   //jsx rendering the json keys
   //1). using tailwind to style overall page outter div
   //2). 1st element is the logo
   //3).
    return (
    <div className="flex bg-white shadow-md m-4 p-4">
        <div>
            <img src={logo} alt={company}/>
        </div>
        
        <div className="flex flex-col justify-between ml-4">
            <h3 className="font-bold text-teal-500">
              {company} {isNew && (
              <span className='bg-teal-500 text-teal-100 font-bold m-2 p-2 rounded-full'>New

              </span>)}
              {featured && <span className="bg-gray-800 text-white font-bold p-2 rounded-full">featured</span>}
            
            </h3>
            <h2 className="font-bold text-xl">{position}</h2>

            <p className="text-gray-700">
               {postedAt} . {contract} . {location} 
            </p>
        </div>
        <div className='flex items-center justify-end ml-auto'>
            {tags ? tags.map((tag) => (
              <span className='text-teal-500 bg-teal-100 font-bold m-3 p-2 rounded'>

             {tag}</span>
              ))

              : ''}
        </div>
    </div>
    );
}
export default JobBoardComponent;