export function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <h2 className="contacts__title">Контакты</h2>
            <div className="contacts__wrapper">
                <ul className="contacts__list">
                    <li className="contacts__item--address">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</li>
                    <li className="contacts__item--phone">
                        <a href="tel:8390224071">8 (3902) 24-30-71</a>
                        <br />
                        <a href="tel:8390222535">8 (3902) 22-53-35</a>
                    </li>
                    <li className="contacts__item--email">
                        <a href="mailto:kancler@vskhakasia.ru">kancler@vskhakasia.ru</a>
                    </li>
                </ul>
                <div className="contacts__map"><iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A56a22afbf8d2b9afcb01774fd71cdc56383bf59d7e7580744856897a4e58e454&amp;source=constructor"></iframe>
                </div>
            </div>
        </section>
    )
}