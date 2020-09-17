import React from 'react';
import "./SidebarRow.css";



function SidebarRow({Icon, title}) {
    return (
        <div className={'sidebarRow ${selected && "selected"}'}>
            <Icon className="sidebarRow_icons" />
            <h4 className="sidebarRow_title">{title}</h4>
            
        </div>
    )
}

export default SidebarRow
