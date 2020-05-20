import React from 'react';
import logo from '../../assests/images/logo.png'
import logo2 from '../../assests/images/logo2.png';
import globalImg from '../../assests/images/globalist-agenda.jpg'
import pendulum from '../../assests/images/pendulum.jpg';
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
        achieve = document.getElementById('achieve'),
        authentic = document.getElementById('authentic'),
        join = document.getElementById('join'),
        contact = document.getElementById('contact'),
        home = document.getElementById('home'),
        aboutItems = document.querySelectorAll('.mobile__menu--list-item-about-item'),
        aboutItemCtn = document.getElementById('aboutItems'),
        believeItems = document.querySelectorAll('.mobile__menu--list-item-believes-item'),
        believeItemCtn = document.getElementById('believeItems'),
        achieveItems = document.querySelectorAll('.mobile__menu--list-item-achieves-item'),
        achieveItemCtn = document.getElementById('achieveItems'),
        authenticItems = document.querySelectorAll('.mobile__menu--list-item-authentic-item'),
        authenticItemCtn = document.getElementById('authenticItems'),
        menu = document.getElementById('menu');
        about.addEventListener('click', showAboutSub);
        believe.addEventListener('click', showBelieveSub);
        achieve.addEventListener('click', showAchieveSub);
        authentic.addEventListener('click', showAuthenticSub);
        open.addEventListener('click', openMenu);
        close.addEventListener('click', closeMenu);
        aboutItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        })
        believeItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        })
        authenticItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        })
        achieveItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        })
        join.addEventListener('click', closeMenu);
        contact.addEventListener('click', closeMenu);
        home.addEventListener('click', closeMenu);

        function showAboutSub() {
            aboutItemCtn.style.display = 'block';
            aboutItemCtn.style.height = 'auto';
            aboutItemCtn.style.padding = '.5rem 3% 0';
            believeItemCtn.style.display = 'none';
            achieveItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'none';
            menu.style.height = 'auto';
        }
        function showAuthenticSub() {
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'none';
            achieveItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'block';
            authenticItemCtn.style.height = 'auto';
            authenticItemCtn.style.padding = '.5rem 3% 0';
        }
        function showAchieveSub() {
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'none';
            achieveItemCtn.style.display = 'block';
            authenticItemCtn.style.display = 'none';
            achieveItemCtn.style.height = 'auto';
            achieveItemCtn.style.padding = '.5rem 3% 0';
        }
        function showBelieveSub() {
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'block';
            achieveItemCtn.style.display = 'none';
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
            achieveItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'none';
        }
        function closeMenu() {
            open.style.display = 'inline-block';
            close.style.display = 'none';
            menu.style.display = 'none';
            aboutItemCtn.style.display = 'none';
            believeItemCtn.style.display = 'none';
            achieveItemCtn.style.display = 'none';
            authenticItemCtn.style.display = 'none';
        }



    }, [])
    const menuItems = [
        { to: '/', content: 'Home', id: 'home' },
        {to: '', content: 'about us', id: 'about'},
        { to: '', content: 'our believes', id: 'believe' },
        { to: '', content: 'our achieves', id: 'achieve' },
        { to: '', content: 'authentic items', id: 'authentic' },
        { to: '/join-the-illuminati', content: 'join illumininati', id: 'join' },
        { to: '/contact-the-illuminati', content: 'contact', id: 'contact' },
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
        { to: '/tenet-of-freedom-and-believe', content: 'tenet of freedom and believe' },
        { to: '/tenet-of-god-and-satan', content: 'tenet of god and satan' },
        { to: '/tenet-for-money-and-aboudance', content: 'tenet for money and aboudance' },
        { to: '/tenet-for-value-and-trade', content: 'tenet for value and trade' },
    ],
    achievesSubs = [
        { to: '/our-global-list-agender', content: 'Our Global List Agender', src: globalImg, alt: 'the-illuminati-our-global-list-agender' },
        { to: '/pendulum-of-power', content: 'Pendulum of Power', src: pendulum, alt: 'illuminati-pendulum-of-power' },
    ],
    authenticSub = [
        { to: '/illuminati-talisman', content: 'Illuminati Talisman', src: talisman, alt: 'illuminati-talism' },
        { to: '/eternal-oath', content: 'Eternal Oath', src: ertenalOath, alt: 'illuminati-ertenal-oath' },
        { to: '/more-authentic-items', content: 'More Authentic items', src: dodis, alt: 'more-authentic-items' },
    ]
    return (
    <React-Fractor>
    <header className="head">
        <NavLink to='/' className="head__logo">
            <img src={logo} alt="logo" className="head__logo--img" width='100'  />
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
               menuItem.content === 'our achieves' ?
                    <a href="#" className="head__menu--anchor" key={menuItem.content}>{menuItem.content}
                    <span className="head__menu--anchor-achieves">
                        {
                            achievesSubs.map(
                            sub => <NavLink to={sub.to} className="head__menu--anchor-achieves-item" key={sub.content} key={sub.content}>
                            <figure className="head__menu--anchor-achieves-item-figure">
                                    <img src={sub.src} alt={sub.content} className="head__menu--anchor-achieves-item-figure-img" />
                                    <figcaption className='head__menu--anchor-achieves-item-figure-cap' >{sub.content}</figcaption>
                            </figure>
                            </NavLink>
                        )
                    }
                    </span>
                </a>:
                menuItem.content === 'authentic items' ?
                    <a href="#" className="head__menu--anchor" key={menuItem.content}>{menuItem.content}
                    <span className="head__menu--anchor-authentic">
                        {
                            authenticSub.map(
                            sub => <NavLink to={sub.to} className="head__menu--anchor-authentic-item" key={sub.content} key={sub.content}>
                            <figure className="head__menu--anchor-authentic-item-figure">
                                    <img src={sub.src} alt={sub.content} className="head__menu--anchor-authentic-item-figure-img" />
                                    <figcaption className='head__menu--anchor-authentic-item-figure-cap' >{sub.content}</figcaption>
                            </figure>
                            </NavLink>
                        )
                    }
                    </span>
                </a>:
                <NavLink to={menuItem.to} className = "head__menu--anchor" key = { menuItem.content } > { menuItem.content }
                </NavLink>
            )}
            <div className="head__menu--title">
                <h1 className="header__primary">
                    THE ILLUMINATI GRAND LODGE
                </h1>
                <h2 className="header__secondary">
                    OFFICIAL WEBSITE
                </h2>
            </div>
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
                    item.content === 'our achieves' ?
                    <a href="#" className="mobile__menu--list-item" key={item.content} id={item.id}>
                        <span className="span">{item.content} &#8659;</span>
                        <span className="mobile__menu--list-item-achieves" id="achieveItems">
                            {
                                ourBelievesSub.map(
                                    sub => <NavLink to={sub.to} className="mobile__menu--list-item-achieves-item">{sub.content}</NavLink>
                                )
                            }
                        </span>
                    </a>: 
                    item.content === 'authentic items' ?
                    <a href="#" className="mobile__menu--list-item" key={item.content} id={item.id}>
                        <span className="span">{item.content} &#8659;</span>
                        <span className="mobile__menu--list-item-authentic" id="authenticItems">
                            {
                                ourBelievesSub.map(
                                    sub => <NavLink to={sub.to} className="mobile__menu--list-item-authentic-item">{sub.content}</NavLink>
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