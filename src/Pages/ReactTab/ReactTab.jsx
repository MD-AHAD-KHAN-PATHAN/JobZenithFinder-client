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
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold border-l-8 border-l-teal-600 p-4 mt-20'>Job Category</h1>
            <Tabs className="my-12">
                <TabList>
                    <Tab><p className='md:text-lg text-sm'>Web development</p></Tab>
                    <Tab><p className='md:text-lg text-sm'>Digital marketing</p></Tab>
                    <Tab><p className='md:text-lg text-sm'>Graphics design</p></Tab>
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