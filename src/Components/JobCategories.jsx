import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const JobCategories = () => {
  const [jobs,setJobs] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_APIURL}/jobs`);
      setJobs(data);
    }
    getData();
  },[])
  return (
    <div className="my-16">
      <div className="text-center flex flex-col items-center gap-2">
        <h1 className="text-2xl sm:text-3xl">Browse Jobs By Categories</h1>
        <p className="max-w-[500px] text-base text-gray-500">
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
      </div>
      <Tabs>
        <TabList className="flex justify-center items-center my-5">
          <Tab>Web Development</Tab>
          <Tab>Graphic Design</Tab>
          <Tab>Digital Marketing</Tab>
        </TabList>

        <TabPanel>
          <div className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
              jobs?.filter(job=>job.category === "Web Development")?.map(job =><JobCard key={job._id} job={job}/>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
              jobs?.filter(job=>job.category === "Graphic Design")?.map(job =><JobCard key={job._id} job={job}/>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
              jobs?.filter(job=>job.category === "Digital Marketing")?.map(job =><JobCard key={job._id} job={job}/>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategories;
