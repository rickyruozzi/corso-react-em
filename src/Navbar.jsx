import './Navbar.css'
import SpecialP from './SpecialP'

export default function Navbar(){
    const lightblue={
        color:'lightblue',
    }
    return (
    <>
    <ul>
        <li style={lightblue}><SpecialP>Ciao</SpecialP></li>
        <li style={lightblue}><SpecialP>Buongiorno</SpecialP></li>
    </ul>
    </>
);
}
