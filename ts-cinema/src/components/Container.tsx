import Functional from './Functional'
import './myStyles.css'

type ContainerProps = {
    children: React.ReactNode
}

const Container = (children: ContainerProps) => {
  return (
    <div className='container'>
        <Functional/>
    </div>
  )
}

export default Container
