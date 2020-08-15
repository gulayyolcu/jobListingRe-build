import React,{useState,useEffect} from 'react';
import JobList from './components/JobList';
import data from './data';

function App() {

  const [jobs,setJobs]=useState([]);
  const [filters,setFilters]=useState([]);
  const [removed,setRemoved]=useState(false);

  useEffect(()=>setJobs(data),[]);

  const filterFunc=({role,level,languages,tools})=>{

      if(filters.length===0){
            return true;
      }

      const tags=[role,level];

      if(languages){
            tags.push(...languages);
      }

      if(tools){
            tags.push(...tools);
      }

      return tags.some(tag=>filters.includes(tag));

  };

const handleTagClick=(tag)=>{
      if(!filters.includes(tag)){
            setFilters([...filters,tag]);
      }
}

const handleFilterClick=(passedFilter)=>{
    setFilters([...filters.filter((f)=>f!==passedFilter)]);
}

const handleRemoveClick=()=>{
    setRemoved(true);
    if(removed===true){
          window.location.reload();
    }
    setFilters([]);
}



const filteredJobs=jobs.filter(filterFunc)

  return (
    <div className="App">
      <header className="App-header bg-teal-500">
            <img src="images/bg-header-desktop.svg" alt=""/>
      </header>

      {
            filters.length>0 ? (
                  <div className={`${removed ? 'hidden':'clear'}max-w-xl6 rounded-md shadow-lg bg-white m-8 p-4 flex justify-between items-center flex-wrap`}>
                    <div>
                          {
                                filters.map((filter)=>(
                                      <button className="focus:outline-none py-1 pl-2 bg-teal-100 text-teal-500 font-bold text-md rounded-md ml-2" onClick={()=>handleFilterClick(filter)}>{filter}<span className="p-2 ml-2 rounded-r-md bg-teal-500 text-teal-100 text-md">&times;</span></button>
                                ))
                          }
                        </div>
                        <div>
                              <button onClick={handleRemoveClick} className="capitalize font-bold text-teal-800 focus:outline-none">clear</button>
                        </div>
                  </div>
            ):``
      }

      {
            jobs.length>0 ? (
                  filteredJobs.map((job)=>(
                        <JobList job={job} key={job.id} handleTagClick={handleTagClick}/>
                  ))
            ):``
      }

    </div>
  );
}

export default App;
