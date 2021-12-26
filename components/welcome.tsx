export function Welcome() {
    function onArrowClick() {
        const ss = document.querySelector('.sightseens');
        ss?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <section className="welcome" id="welcome">
            <div className="welcome__wrapper">
                <h1 className="welcome__title">Хакасия</h1>
                <div className="welcome__subtitle">Туристическое Агенство Республики Хакасия</div>
            </div>
            <button className="welcome__arrow" onClick={onArrowClick}>
                <img src="img/icon.svg" alt=""></img>
            </button>
        </section>
    )
}