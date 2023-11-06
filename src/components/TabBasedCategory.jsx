import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WebDevCard from "./WebDevCard";
 import GraphicsDesignCard from "./GraphicsDesignCard";
import DigitalMarketingCard from "./DigitalMarketingCard";
const TabBasedCategory = () => {
  const jobs = useLoaderData();
  const webDevJobs = jobs.filter((job) => job.category === "web development");
   const digitalMarketingJobs = jobs.filter(
    (job) => job.category === "digital marketing"
  );
  const graphicsJobs = jobs.filter((job) => job.category === "graphics design");
  return (
    <div className="mt-10 ">
      <Tabs className="max-w-7xl mx-auto ">
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <div>
            {webDevJobs.map((webDevJob) => (
              <WebDevCard
                key={webDevJob._id}
                webDevJob={webDevJob}
              ></WebDevCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {digitalMarketingJobs.map((digitalMarketingJob) => (
              <DigitalMarketingCard
                key={digitalMarketingJob._id}
                digitalMarketingJob={digitalMarketingJob}
              ></DigitalMarketingCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div>
            {graphicsJobs.map((graphicsJob) => (
              <GraphicsDesignCard
                key={graphicsJob._id}
                graphicsJob={graphicsJob}
              ></GraphicsDesignCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabBasedCategory;
