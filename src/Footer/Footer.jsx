import '../css/class.css'
import logo from '../assets/logo.png'

function Footer() {
    return(
        <>
            <footer>
                <div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <ul>
                            <li>О компании</li>
                            <li>Деятельность</li>
                            <li>Персонал</li>
                            <li>Клиенту</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Акционеру и инвестору</li>
                            <li>Пресс-центр</li>
                            <li>Торги</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Местонахождение</h1>
                        <h2>Ante quam egestas tristique a malesuada massa aliquam ultrices. Et tellus nec.</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Dictum praesent dignissim pellentesque amet diam velit faucibus sed. Nec mattis posuere habitasse porta feugiat mattis enim. Quam interdum at penatibus amet elementum luctus. <br /><br />Политика обработки персональных данных</p>
                    </div>
                    <div>
                        <h3>Разработано: d-e-n.ru</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer