import '../Styles/Menu.css';
import {useState} from 'react';

function Menu() {
    const [collapsed, setCollapsed] = useState(true);
    const [opened, setOpened] = useState(false);
  return (
    <div className={collapsed?"menu":"menu active"}>
        
      {collapsed ?  
        <ul>
            <li>
            <a id="toggle" className={opened?"closed":""} onClick={() => {setCollapsed(pCollapsed => !pCollapsed); setOpened(true);}}>☰</a>
            </li>
            <li className={opened?"hidden":""}>Item</li>
            <li className={opened?"hidden":""}>Item</li>
            <li className={opened?"hidden":""}>Item</li>
        </ul>
      :
        <ul>
            <li><a id="toggle" className='open' onClick={() => setCollapsed(pCollapsed => !pCollapsed)}>☰</a></li>
            <li className='menuItem'>Item</li>
            <li className='menuItem'>Item</li>
            <li className='menuItem'>Item</li>
        </ul>
      }
    </div>
  );
}

export default Menu;
