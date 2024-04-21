// eslint-disable-next-line react/prop-types
export default function SpecialP({children}){
    const style1={
        color:'red'
    }
    return <p style={style1}>{children}</p>
}