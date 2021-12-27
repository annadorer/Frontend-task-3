import Link from "next/link"
import { useEffect, useState } from "react";
import { Header__nav } from "./header__nav"

export function Header() {
	const [isMenuVisible, setMenuVisible] = useState<boolean>(false)
	const [isPageScrolled, setPageScrolled] = useState<boolean>(false)

	function onMenuClick() {
		setMenuVisible(!isMenuVisible)
		document.body.classList.toggle("stop-scrolling")
	}

	const handlePageScroll = () => {
		if (window.scrollY > 100) {
			setPageScrolled(true)
		} else {
			setPageScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handlePageScroll);

		return () => window.removeEventListener('scroll', handlePageScroll)
	})

	return (
		<header className={`header${isPageScrolled ? ' scroll' : ''}`} id='header'>
			<div className="header__wrapper">
				<a className="header__logo" href="/"></a>
				<button className={`header__button${isMenuVisible ? ' active' : ''}`} onClick={onMenuClick}>
					<span> </span>
				</button>
				<Header__nav isMenuVisible={isMenuVisible} />
			</div>
		</header>)
}