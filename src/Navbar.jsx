import './Navbar.css'
import SpecialP from './SpecialP'
import PropTypes from 'prop-types';

export default function Navbar({flag}){ //ricorda le parentesi graffe, oppure per fare riferimento ai props dovrai fare props.ilMioProps
    if(flag==true){
    return (
    <>
        <SpecialP>benvenuto</SpecialP>
    </>
        );
    }
    else{
        return (
        <>
        <h1>Non disponibile</h1>
        </>
        );
    }
}

Navbar.propTypes = {
    flag:PropTypes.bool.isRequired
  };