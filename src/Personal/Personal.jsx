import './Personal.css'
import imgPersonal from './assetsPersonal/Frame.png'
import imgPersonal2 from './assetsPersonal/Frame2.png'
import imgPersonal3 from './assetsPersonal/Frame3.png'
import imgPersonal4 from './assetsPersonal/Frame4.png'
import imgPersonal5 from './assetsPersonal/Frame5.png'
import { noways } from './data'
import lapsha from './assetsPersonal/Rectangle42.png'
import zafod from './assetsPersonal/Rectangle43.png'
import { Link } from 'react-router-dom'
import { Router, Route, Routes } from 'react-router-dom'
import Personal_main from './personal_main/Personal_main.jsx'
function Personal() {
    return(
        <>
            <main>
                <section className='main2-section1'></section>

                <section className='main2-section2'>
                    <div className='folder'>
                        <div>
                            <p>Главная</p>
                            <div></div>
                            <p>Персонал</p>
                            <div></div>
                            <p>Подготовка и обучение персонала</p>
                        </div>
                        
                    </div>
                    <div className='training'>
                        <div className='menu'>
                            <Link className='link' to='/Personal_main'>
                                <button type="button">
                                    <p>Персонал</p>
                                    <img src={imgPersonal} alt="" />
                                </button>
                            </Link>
                            <Link className='link' to='/'>
                                <button type="button">
                                    <p>Деятельность</p>
                                    <img src={imgPersonal2} alt="" />
                                </button>
                            </Link>
                            <Link className='link' to='/'>
                                <button type="button">
                                    <p>Акционерам</p>
                                    <img src={imgPersonal3} alt="" />
                                </button>
                            </Link>
                            <Link className='link' to='/'>
                                <button type="button">
                                    <p>Инвесторам</p>
                                    <img src={imgPersonal4} alt="" />
                                </button>
                            </Link>
                            <Link className='link' to='/'>
                                <button type="button">
                                    <p>Контакты</p>
                                    <img src={imgPersonal5} alt="" />
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Routes>
                                <Route index element={<Personal_main/>}/>
                                <Route path='/Personal_main' element={<Personal_main/>}/>
                            </Routes>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Personal