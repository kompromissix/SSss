import '../css/style.css'
import logo from '../assets/logo.png'
import img1 from '../assets/Frame38.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
      <>
        <header>
            <nav>
                <div className='top'>
                    <img src={logo} alt="" />
                    <div className='left'>
                        <input type="text" placeholder="Быстрый поиск по сайту"/>
                        <img src={img1} al  t="" />
                    </div>
                    <div className='right'>
                        <p>Ru</p>
                        <p>En</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div>
                        <Link className='vov' to='/AboutTheCompany'>О компании</Link>
                        <Link className='vov'>Деятельность</Link>
                        <Link className='vov' to='/Personal'>Персонал</Link>
                        <Link className='vov'>Клиенту</Link>
                        <Link className='vov'>Акционеру и инвестору</Link>
                        <Link className='vov'>Пресс-центр</Link>
                        <Link className='vov'>Торги</Link>
                        <Link className='vov'>Контакты</Link>
                    </div>
                </div>
            </nav>
        </header>
      </>
    )
}

export default Header