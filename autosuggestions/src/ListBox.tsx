import React from 'react'
import { UserDetails } from './App'

export interface ListBoxProps {
    items: UserDetails[];
    activeIndex: number;
}

const ListBox: React.FC<ListBoxProps> = ({items, activeIndex}) => {

  return (
    <ul>
        {
            items.map((item, index: number) => (<li key={index} className={activeIndex === index ? 'active': ''} >{`${item.firstName} ${item.lastName}`}</li>))
        }
    </ul>
  )
}

export default ListBox