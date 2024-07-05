/* eslint-disable react/prop-types */
import cls from './InfoCont.module.css'
import Info from './components/Info/Info'

const InfoCont = ({className}) => {
  return (
    <div className={`${cls.InfoCont} ${className}`}>
        <Info infoTitle='20k+' infoText='subscribers'/>
        <Info infoTitle='19,5K' infoText='successful cases'/>
        <Info infoTitle='4.8/5' infoText='rating'/>
    </div>
  )
}

export default InfoCont