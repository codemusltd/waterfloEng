import React from 'react';
import {Phone} from './phone';
import {Email} from './email';
import {Visit} from './visit';

const Contact = (props)=>{
  return (<div id='contactContainer'>
            <Phone />
            <Email />
            <Visit />
          </div>);
}
