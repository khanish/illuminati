import React from 'react';
import logo from '../../assests/images/logo.png'
import logo2 from '../../assests/images/logo2.png';
import talisman from '../../assests/images/the-talisman.jpg';
import ertenalOath from '../../assests/images/eternal-oath.jpg';
import dodis from '../../assests/images/dodis-authentic.jpg';
import {NavLink} from 'react-router-dom';

let Head = () => {
    React.useEffect(() => {
        let open = document.getElementById('open'),
        close = document.getElementById('close'),
        about = document.getElementById('about'),
        believe = document.getElementById('believe'),
        logo = document.getElementById('logo'),
        authentic = document.getElementById('authentic'),
        join = document.getElementById('join'),
        contact = document.getElementById('contact'),
        home = document.getElementById('home'),
        aboutItems = document.querySelectorAll('.mobile__menu--list-item-about-item'),
        aboutItemCtn = document.getElementById('aboutItems'),
        believeItems = document.querySelectorAll('.mobile__menu--list-item-believes-item'),
        believeItemCtn = document.getElementById('believeItems'),
        authenticItems = document.querySelectorAll('.mobile__menu--list-item-authentic-item'),
        authenticItemCtn = document.getElementById('authenticItems'),
        menu = document.getElementById('menu');
        about.addEventListener('click', showAboutSub);
        believe.addEventListener('click', showBelieveSub);
        authentic.addEventListener('click', showAuthenticSub);
        open.addEventListener('click', openMenu);
        close.addEventListener('click', closeMenu);
        logo.addEventListener('click', closeMenu);
        aboutItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        })
        believeItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        })
        authenticItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        })
        join.addEventListener('click', closeMenu);
        home.addEventListener('click', closeMenu);

        function showAboutSub() {
            aboutItemCtn.style.display = 'block';
            aboutItemCtn.style.height = 'auto';
            aboutItemCtn.style.padding = '.5rem 3% 0';
            believeItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'none';
            menu.style.height = 'auto';
        }
        function showAuthenticSub() {
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'block';
            authenticItemCtn.style.height = 'auto';
            authenticItemCtn.style.padding = '.5rem 3% 0';
        }
        function showAchieveSub() {
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'none';
        }
        function showBelieveSub() {
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'block';
            authenticItemCtn.style.display = 'none';
            believeItemCtn.style.height = 'auto';
            believeItemCtn.style.padding = '.5rem 3% 0';
        }
        function openMenu() {
            open.style.display = 'none';
            close.style.display = 'inline-block';
            menu.style.display = 'flex';
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'none';
        }
        function closeMenu() {
            open.style.display = 'inline-block';
            close.style.display = 'none';
            menu.style.display = 'none';
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'none';
        }
    }, [])
    const menuItems = [
        { to: '/', content: 'Home', id: 'home' },
        {to: '', content: 'about us', id: 'about'},
        { to: '', content: 'our believes', id: 'believe' },
        { to: '', content: 'authentic items', id: 'authentic' },
        { to: '/join-the-illuminati', content: 'join illumininati', id: 'join' },
    ],
    aboutSub = [
        { to: '/purpose-of-the-illuminati', content: 'purpose of the illuminati' },
        { to: '/illuminati-symbols', content: 'symbols of the illuminati' },
        { to: '/illuminati-symbols-and-mask', content: 'illuminati symbols and marks' },
        { to: '/why-a-secrete-society', content: 'why a secrete society' },
        { to: '/wealth-of-the-illuminati', content: 'wealth of the illuminati' },
        { to: '/the-age-of-illuminati', content: 'the age of illuminati' },
        { to: '/billionaires-giving-pledge', content: 'Billionairs giving pledge' },
    ], 
    ourBelievesSub = [
        { to: '/the-pyramid', content: 'the Pyramid' },
        { to: '/the-eye', content: 'the eye' },
        { to: '/the-light', content: 'the light' },
        { to: '/eternal-circle', content: 'eternal circle' },
    ],
    tenets = [
        { to: '/tenet-for-money-and-aboudance', content: 'tenet for money and aboudance' },
        { to: '/tenet-for-value-and-trade', content: 'tenet for value and trade' },
    ],
    authenticSub = [
        { href: 'https://dodis.co/collections/talisman?utm_source=illuminatiofficial&utm_medium=mainmenu&utm_campaign=MenuIlluOfficial', content: 'Illuminati Talisman', src: talisman, alt: 'illuminati-talism' },
        { href: 'https://dodis.co/products/illuminati-eternal-oath?utm_source=illuminatiofficial&utm_medium=mainmenu&utm_campaign=MenuIlluOfficial', content: 'Eternal Oath', src: ertenalOath, alt: 'illuminati-ertenal-oath' },
    ]
    return (
    <React-Fractor>
    <header className="head">
        <NavLink to='/' className="head__logo" id="logo">
            <img src={logo} alt="illuminati-logo" className="head__logo--img" width='100'  />
        </NavLink>
        <div className="head__menu">
            {menuItems.map(menuItem =>
                menuItem.content === 'about us'?
                <a href="#" className="head__menu--anchor" key={menuItem.content}>{menuItem.content}
                    <span className="head__menu--anchor-about">
                        {
                            aboutSub.map(
                            sub => <NavLink to={sub.to} className="head__menu--anchor-about-item" key={sub.content}>{sub.content}</NavLink>
                            )
                        }
                    </span>
                </a>:
                menuItem.content === 'our believes'?
                    <a href="#" className="head__menu--anchor" key={menuItem.content}>{menuItem.content}
                    <span className="head__menu--anchor-believe">
                        {
                            ourBelievesSub.map(
                                sub => <NavLink to={sub.to} className="head__menu--anchor-believe-item" key={sub.content}key={sub.content}>
                                    <figure className="head__menu--anchor-believe-item-figure">
                                        <img src={logo2} alt={sub.content} className="head__menu--anchor-believe-item-figure-img"/>
                                        <figcaption className='head__menu--anchor-believe-item-figure-cap' >{sub.content}</figcaption> 
                                    </figure>
                                </NavLink>
                            )
                        }
                        <span className="head__menu--anchor-believe-tenet">
                            <span className="head__menu--anchor-believe-tenet-title">The Tenets</span>
                            {
                                tenets.map(
                                tenet => <NavLink to={tenet.to} className="head__menu--anchor-believe-tenet-item" key={tenet.content}>{tenet.content}</NavLink>
                                    )
                            }
                        </span>
                    </span>
                </a>:
                menuItem.content === 'authentic items' ?
                    <a href="#" className="head__menu--anchor" key={menuItem.content}>{menuItem.content}
                    <span className="head__menu--anchor-authentic">
                        {
                            authenticSub.map(
                                sub => <a href={sub.href} className="head__menu--anchor-authentic-item" key={sub.content} key={sub.content} target="_blank">
                            <figure className="head__menu--anchor-authentic-item-figure">
                                    <img src={sub.src} alt={sub.content} className="head__menu--anchor-authentic-item-figure-img" />
                                    <figcaption className='head__menu--anchor-authentic-item-figure-cap' >{sub.content}</figcaption>
                            </figure>
                            </a>
                        )
                    }
                    </span>
                </a>:
                <NavLink to={menuItem.to} className = "head__menu--anchor" key = { menuItem.content } > { menuItem.content }
                </NavLink>
            )}
            <h1 className="head__menu--title">
                <span className="header__primary">THE ILLUMINATI GRAND LODGE</span>
                <span className="header__secondary">OFFICIAL WEBSITE</span>
            </h1>
        </div>
    </header>
    <section className="mobile">
        <div className="mobile__menu">
            <span className="mobile__menu-open" id="open">&#9776;</span>
            <span className="mobile__menu-close" id="close">&#9932;</span>
        </div>
        <div className="mobile__menu--list" id='menu'>
            {
                menuItems.map(
                    item => 
                    item.content === 'about us' ?
                    <a href="#" className="mobile__menu--list-item" key={item.content} id={item.id}>
                        <span className="span">{item.content} &#8659;</span>
                        <span className="mobile__menu--list-item-about" id="aboutItems">
                            {
                                aboutSub.map(
                                    sub => <NavLink to={sub.to} className="mobile__menu--list-item-about-item">{sub.content}</NavLink>
                                )
                            }
                        </span>
                    </a>:
                    item.content === 'our believes' ?
                    <a href="#" className="mobile__menu--list-item" key={item.content} id={item.id}>
                        <span className="span">{item.content} &#8659;</span>
                        <span className="mobile__menu--list-item-believes" id="believeItems">
                            {
                                ourBelievesSub.map(
                                    sub => <NavLink to={sub.to} className="mobile__menu--list-item-believes-item">{sub.content}</NavLink>
                                )
                            }
                            {
                                tenets.map(
                                    sub => <NavLink to={sub.to} className="mobile__menu--list-item-believes-item">{sub.content}</NavLink>
                                )
                            }
                        </span>
                    </a>:
                    item.content === 'authentic items' ?
                    <a href="#" className="mobile__menu--list-item" key={item.content} id={item.id}>
                        <span className="span">{item.content} &#8659;</span>
                        <span className="mobile__menu--list-item-authentic" id="authenticItems">
                            {
                                authenticSub.map(
                                    sub => <a href={sub.href} className="mobile__menu--list-item-authentic-item" target="_blank">{sub.content}</a>
                                )
                            }
                        </span>
                    </a>:
                    <NavLink to={item.to} className="mobile__menu--list-item" key={item.content} id={item.id}>
                        <span className="span">{item.content}</span>
                    </NavLink>
                    )
                }
            </div>
        </section>
    </React-Fractor>
    )
}

export default Head;