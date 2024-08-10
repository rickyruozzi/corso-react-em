// eslint-disable-next-line react/prop-types
export default function SpecialP({children}){
    const style1={
        color:'lightblue',
        fontFamily:'Arial, Verdana',

    }
    return <h1 style={style1}>{children}</h1>
}