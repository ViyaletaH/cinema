import Footer from './Footer'
import Functional from './Functional'
import './myStyles.css'

// type ContainerProps = {
//     children: React.ReactNode
// }

const Container = () => {
  return (
    <div className='container'>
        <Functional/>
        <Footer/>
    </div>
  )
}

export default Container
