import { useState } from 'react'
import css from './NavBar.module.css'
// img
import logo from '../../assets/GPT-3.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () =>(
  <>
    <li><a href="#">Home</a></li>
    <li><a href="#">What is GPT3</a></li>
    <li><a href="#">Open AI</a></li>
    <li><a href="#">Case Studies</a></li>
    <li><a href="#">Library</a></li>
  </>
)

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className={css.gpt3__navbar}>
      <div className={css.gtp3__navbar_links}>
        <div className={css.gtp3_navbar_links_logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={css.gpt3__navbar_links_container}>
         <Menu />
        </ul>
      </div>
      <div className={css.gpt3__navbar_sign}>
        <button className={css.sign_in} type='button'>Sign in</button>
        <button className={css.sign_up} type='button'>Sign up</button>
      </div>
      <div className={css.gtp3__navbar_menu}>
        {
          toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/> : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className={`${css.gpt3__navbar_menu_container} scale-up-center`}>
              <div className={css.gpt3__navbar_menu_container_links}>
                <Menu />
                <div className={css.gpt3__navbar_menu_contsiner_links_sign}>
                <button className={css.sign_in} type='button'>Sign in</button>
                <button className={css.sign_up} type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavBar