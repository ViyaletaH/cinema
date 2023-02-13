import Functional from './Functional'
import './myStyles.css'

type ContainerProps = {
    children: React.ReactNode
}

const Container = (children: ContainerProps) => {
  return (
    <div className='container'>
        <Functional/>
        <div className="footer"></div>
    </div>
  )
}

export default Container
