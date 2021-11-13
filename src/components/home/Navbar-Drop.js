import React, {useState} from "react";
import {Link} from 'react-router-dom';
import '../css/dropdown.css';
import onClickOutside from 'react-onclickoutside';

//this component is deprecated with the implmentation of react-bootstrap navbar

function Dropdown(props) {

  const [open, setOpen] = new useState(false);

  function toggle() {
    setOpen(!open);
  }

  Dropdown['.handleClickOutside_' + props.name] = function() {
    setOpen(false);
  }

  return (
    <div className='dd-wrapper'>
      <div tabIndex={0} 
      className='dd-header' 
      role='button' 
      onKeyPress={() => toggle(!open)} 
      onClick={() => toggle(!open)}>
        <div className='dd-header_title'>
          <p className='dd-header_title-bold'>
            {props.title}
            <i className='fa' id='drop-icon'>
            &#xf13a;
          </i>
          </p>        
          {open && (
            <ul className='dd-list'>
              {props.items.map((item) => {
                return <li className='dd-list-item' id={item.id} key={item.id}><Link to={`/products/${item.name.substring(0).toLowerCase()}`}>
                  <button type='button' onClick={props.handleSelect}>
                    <span>{item.name}</span>
                  </button>
                </Link></li>
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: function ({props}) {
    return Dropdown['.handleClickOutside_' + props.name]
  }
}

export default onClickOutside(Dropdown, clickOutsideConfig);