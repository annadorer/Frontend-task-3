import Link from "next/link"
import { useRouter } from "next/router";


export interface MenuVisible { isMenuVisible: boolean }

export function Header__nav(props: MenuVisible) {
    return (
        <nav className={`header__menu${props.isMenuVisible ? ' active' : ''}`}>
            <ul className="menu__items">
                <li className="menu__item">
                    <Link href="/#welcome">
                        <a className="nav__item-link" >Главная</a>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href="/#sightseens">
                        <a className="nav__item-link">Достопримечательности</a>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href="/#tours">
                        <a className="nav__item-link">Туры</a>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href="/#contacts">
                        <a className="nav__item-link">Контакты</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}