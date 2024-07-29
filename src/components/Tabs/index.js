import React , {useState} from 'react'
import Tabs from './tabs'
import { tabLevels } from './constant'

function TabComponent() {

    const [activeTab , setActiveTab] = useState(tabLevels.CANCEL_ANY_TIME);

    const onClickTab = (tab)=>{
        setActiveTab(tab);
    }

  return (
    <div>
        <Tabs activeTabName = {activeTab} onClickTab = {onClickTab}/>
    </div>
  )
}

export default TabComponent