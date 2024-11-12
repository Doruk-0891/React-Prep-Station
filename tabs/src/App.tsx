import { ReactElement } from 'react';
import './App.css'
import Profile from './Tabs/Profile';
import Tabs from './Tabs/Tabs'
import Content from './Tabs/Content';
import Contact from './Tabs/Contact';

export interface TabsContent {
  title: string;
  content: ReactElement[] | ReactElement;
}

export const TabsDetails: TabsContent[] = [
  {
    title: 'Profile',
    content: <Profile />
  },
  {
    title: 'Content',
    content: <Content />
  },
  {
    title: 'Contact',
    content: <Contact />
  }
];

function App() {

  return (
   <div>
    <Tabs tabList={TabsDetails} />
   </div>
  )
}

export default App
