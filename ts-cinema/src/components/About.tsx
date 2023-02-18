import './myStyles.css'

const About = () => {
  return (
    <div className='about'>
      <div className='vkontakte'>
        {/* <a href='https://vk.com/asia_story'><img src={require("./images/vk.png")} alt="logo" width="40px"/></a> */}
      </div>
      <div className='about-donate'>
        <a href='#'><img src={require("./images/donut2.png")} alt="logo" width="40px"/></a>
      </div>
      <div className='telegram'>
        {/* <a href='https://t.me/the_art_of_love_asia'><img src={require("./images/telegram.png")} alt="logo" width="40px"/></a> */}
      </div>
      <span className='report'>report bug</span>
    </div>
  )
}

export default About
