import React , {useState}from 'react';
import { TabsContent } from '../App';

export interface TabsProps {
    tabList: TabsContent[];
}

const Tabs: React.FC<TabsProps> = (props) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
    const {tabList} = props;

    const handleSelectedTab = (index: number) => {
        setSelectedTabIndex(index);
    }

  return (
    <div className='tabs'>
        {
            tabList.map((item: TabsContent, index: number) => (<button key={index} onClick={() => handleSelectedTab(index)}>{item['title']}</button>))
        }
        <div className='selected-tab-component'>
            {tabList[selectedTabIndex]['content']}
        </div>
    </div>
  )
}

export default Tabs