import React from 'react';

const JobList = ({job:{
        id,
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
},
handleTagClick,
}) => {
    const tags=[role,level];

    if(languages){
        tags.push(...languages);
    }

    if(tools){
        tags.push(...tools);
    }

    return (
        <div className={`${featured && 'border-l-4 border-teal-700'} max-w-xl6 bg-white p-4 m-8  flex flex-wrap items-center rounded-md shadow-lg`} key={id}>
                <div className="sm:-pt-16">
                        <img className="xl:my-4 xl:ml-4 xl:mr-8 lg:mr-4 md:mr-4 " src={logo} alt=""/>
                </div>
                <div className="flex flex-col row-gap-1">
    <h3 className="text-teal-500 text-lg font-bold">{company}{isNew && (<span className="pt-2 pb-1 px-2 rounded-full bg-teal-500 font-bold text-sm capitalize text-white ml-2 pt-1">New!</span>)}{featured && (<span className="pt-2 pb-1 px-2 rounded-full bg-teal-800 font-bold text-sm text-white ml-2 capitalize pt-1">featured</span>)}</h3>
                        <h2 className="text-teal-800 text-xl font-bold">{position}</h2>
                        <p className="text-gray-500 text-lg">{postedAt}&bull;{contract}&bull;{location}</p>
                </div>
                <div className="flex flex-wrap lg:ml-auto xl:ml-auto">
                        {
                                tags.length!==0 ? (
                                        tags.map((tag)=>(
                                                <button onClick={()=>handleTagClick(tag)} className="focus:outline-none py-1 px-2 my-2 mx-1 font-bold bg-teal-100 text-teal-500 rounded-md">{tag}</button>
                                        ))
                                ):``
                        }
                </div>
        </div>
    )
}

export default JobList;
