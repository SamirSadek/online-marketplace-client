import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WebDevCard from "./WebDevCard";
const TabBasedCategory = () => {
    const jobs = useLoaderData()
    const webDevJobs = jobs.filter(job => job.category === 'web development')
    const digitalMarketingJobs = jobs.filter(job => job.category === 'digital marketing')
    const graphicsJobs = jobs.filter(job => job.category === 'graphics design')
  return (
   <div className="mt-10 ">
     <Tabs className='max-w-7xl mx-auto text-slate-500 font-bold text-base'>
      <TabList >
        <Tab>Web Development</Tab>
        <Tab>Digital Marketing</Tab>
        <Tab>Graphics Design</Tab>
      </TabList>

      <TabPanel>
        <div>
            {
                webDevJobs.map(webDevJob => <WebDevCard key={webDevJob._id}></WebDevCard>)
            }
        <h2>Any content 1 : {webDevJobs.length}</h2>
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2 : {digitalMarketingJobs.length}</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3 : {graphicsJobs.length}</h2>
      </TabPanel>
    </Tabs>
   </div>
  );
};

export default TabBasedCategory;
