import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebCard from '../JobCategoryCard/WebCard';
import MarketingCard from '../JobCategoryCard/MarketingCard';
import GraphicsCard from '../JobCategoryCard/GraphicsCard';

const ReactTab = () => {

    const web = 'web';
    const digital = 'digital';
    const graphics = 'graphics';

    return (
        <>
            <h1 className='text-5xl font-bold border-l-8 border-l-teal-600 p-4 mt-20'>Job Category</h1>
            <Tabs className="my-12">
                <TabList>
                    <Tab>Web development</Tab>
                    <Tab>Digital marketing</Tab>
                    <Tab>Graphics design</Tab>
                </TabList>

                <TabPanel>
                    <WebCard web={web}></WebCard>
                </TabPanel>
                <TabPanel>
                    <MarketingCard digital={digital}></MarketingCard>
                </TabPanel>
                <TabPanel>
                    <GraphicsCard graphics={graphics}></GraphicsCard>
                </TabPanel>
            </Tabs>
        </>

    );
};

export default ReactTab;