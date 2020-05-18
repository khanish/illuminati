import React from 'react';
import logo from '../../assests/images/logo.png'
import logo2 from '../../assests/images/logo2.png';
import globalImg from '../../assests/images/globalist-agenda.jpg'
import pendulum from '../../assests/images/pendulum.jpg';
import talisman from '../../assests/images/the-talisman.jpg';
import ertenalOath from '../../assests/images/eternal-oath.jpg';
import dodis from '../../assests/images/dodis-authentic.jpg';

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
        {to: '', content: 'about us', id: 'about'},
        { to: '', content: 'our believes', id: 'believe' },
        { to: '', content: 'our achieves', id: 'achieve' },
        { to: '', content: 'authentic items', id: 'authentic' },
        { to: '', content: 'join illumininati', id: 'join' },
        { to: '', content: 'contact', id: 'contact' },
    ],
    aboutSub = [
        { to: '', content: 'purpose of the illuminati' },
        { to: '', content: 'symbols of the illuminati' },
        { to: '', content: 'illuminati symbols and marks' },
        { to: '', content: 'why a secrete society' },
        { to: '', content: 'wealth of the illuminati' },
        { to: '', content: 'the age of illuminatiam' },
        { to: '', content: 'Billionairs giving pledge' },
    ], 
    ourBelievesSub = [
        { to: '', content: 'the Pyramid' },
        { to: '', content: 'the eye' },
        { to: '', content: 'the light' },
        { to: '', content: 'erternal circle' },
    ],
    tenets = [
        { to: '', content: 'tenet of freedom and believe' },
        { to: '', content: 'tenet of god and satan' },
        { to: '', content: 'tenet for money and aboudance' },
        { to: '', content: 'tenet for value and trade' },
    ],
    achievesSubs = [
        { to: '', content: 'Our Global List Agender', src: globalImg, alt: 'the-illuminati-our-global-list-agender' },
        { to: '', content: 'Pendulum of Power', src: pendulum, alt: 'illuminati-pendulum-of-power' },
    ],
    authenticSub = [
        { to: '', content: 'Illuminati Talisman', src: talisman, alt: 'illuminati-talism' },
        { to: '', content: 'Erternal Outh', src: ertenalOath, alt: 'illuminati-ertenal-oath' },
        { to: '', content: 'More Authentic items', src: dodis, alt: 'more-authentic-items' },
    ]
    return (
    <React-Fractor>
    <header className="head">
        <div className="head__logo">
            <img src={logo} alt="logo" className="head__logo--img" width='100'  />
        </div>
        <div className="head__menu">
            {menuItems.map(menuItem =>
                menuItem.content === 'about us'?
                <a href="#" className="head__menu--anchor" key={menuItem.content}>{menuItem.content}
                    <span className="head__menu--anchor-about">
                        {
                            aboutSub.map(
                            sub => <a href="#" className="head__menu--anchor-about-item" key={sub.content}>{sub.content}</a>
                            )
                        }
                    </span>
                </a>:
                menuItem.content === 'our believes'?
                <a href="#" className="head__menu--anchor" key={menuItem.content}>{menuItem.content}
                    <span className="head__menu--anchor-believe">
                        {
                            ourBelievesSub.map(
                                sub => <a href="#" className="head__menu--anchor-believe-item" key={sub.content}key={sub.content}>
                                    <figure className="head__menu--anchor-believe-item-figure">
                                        <img src={logo2} alt={sub.content} className="head__menu--anchor-believe-item-figure-img"/>
                                        <figcaption className='head__menu--anchor-believe-item-figure-cap' >{sub.content}</figcaption> 
                                    </figure>
                                </a>
                            )
                        }
                        <span className="head__menu--anchor-believe-tenet">
                            <span className="head__menu--anchor-believe-tenet-title">The Tenets</span>
                            {
                                tenets.map(
                                tenet => <a href="#" className="head__menu--anchor-believe-tenet-item" key={tenet.content}>{tenet.content}</a>
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
                            sub => <a href="#" className="head__menu--anchor-achieves-item" key={sub.content} key={sub.content}>
                            <figure className="head__menu--anchor-achieves-item-figure">
                                    <img src={sub.src} alt={sub.content} className="head__menu--anchor-achieves-item-figure-img" />
                                    <figcaption className='head__menu--anchor-achieves-item-figure-cap' >{sub.content}</figcaption>
                            </figure>
                            </a>
                        )
                    }
                    </span>
                </a>:
                menuItem.content === 'authentic items' ?
                <a href="#" className="head__menu--anchor" key={menuItem.content}>{menuItem.content}
                    <span className="head__menu--anchor-authentic">
                        {
                            authenticSub.map(
                            sub => <a href="#" className="head__menu--anchor-authentic-item" key={sub.content} key={sub.content}>
                            <figure className="head__menu--anchor-authentic-item-figure">
                                    <img src={sub.src} alt={sub.content} className="head__menu--anchor-authentic-item-figure-img" />
                                    <figcaption className='head__menu--anchor-authentic-item-figure-cap' >{sub.content}</figcaption>
                            </figure>
                            </a>
                        )
                    }
                    </span>
                </a>:
                <a href = "#" className = "head__menu--anchor" key = { menuItem.content } > { menuItem.content }
                </a>


            )}
            <div className="head__menu--title">
                <h1 className="header__primary">
                    OFFICIAL WEBSITE
                </h1>
                <h2 className="header__secondary">
                    OF THE ILLUMINATI
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
                                    sub => <a href="#" className="mobile__menu--list-item-about-item">{sub.content}</a>
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
                                    sub => <a href="#" className="mobile__menu--list-item-believes-item">{sub.content}</a>
                                )
                            }
                            {
                                tenets.map(
                                    sub => <a href="#" className="mobile__menu--list-item-believes-item">{sub.content}</a>
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
                                    sub => <a href="#" className="mobile__menu--list-item-achieves-item">{sub.content}</a>
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
                                    sub => <a href="#" className="mobile__menu--list-item-authentic-item">{sub.content}</a>
                                )
                            }
                        </span>
                    </a>:
                    <a href="#" className="mobile__menu--list-item" key={item.content} id={item.id}>
                        <span className="span">{item.content}</span>
                    </a>
                    )
                }
            </div>
        </section>
    </React-Fractor>
    )
}

export default Head;