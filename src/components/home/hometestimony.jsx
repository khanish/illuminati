import React, { Component } from 'react';
import amethyst from '../../assests/images/amethyst-r-illuminatiam-featured.jpg';
import collin from '../../assests/images/CollinH-illuminatiam.jpg';
import hanna from '../../assests/images/HannaD-illuminatiam.jpg';
import rizwan from '../../assests/images/rizwan-k-illuminatiam-featured.jpg';
import tony from '../../assests/images/TonyR-illuminatiam.jpg';
import vg from '../../assests/images/VG-illuminatiam.jpg';
import {NavLink} from 'react-router-dom';


class Testimoney extends Component {
    constructor(props) {
        super(props);
        this.testifies = [
            {
                src: amethyst, testimony: 'The Illuminati has pointed me in the direction to start my path of enlightenment. For that I am beyond grateful.The Illuminati is not just changing my life – we\'re changing mankind.', key: 1, name: 'Amethyst R.' },
            { 
                src: collin, testimony: 'I stand with the Illuminati now.Since then, I haven\'t feared going into college and I\'ve even spread the message to friends from all walks of life.It\'s good to know someone is watching humanity with best of intentions.', key: 2, name: 'Collin H.' 
            },
            { 
                src: hanna, testimony: 'I learned that the Illuminati is there for you, and welcomes you to the bright side. The Illuminati has a lot of wisdom and it\'s good for you, because it lets you see things in another perspective.', key: 3, name: 'Hanna D.' 
            },
            { 
                src: rizwan, testimony: 'Since the day I discovered I wasn\'t alone in my endeavors, I\'ve been positively enlightened. I\'m here for a reason.', key: 4, name: 'Rizwan K' 
            },
            { 
                src: tony, testimony: 'The realization that I have a part in this Universal Design was the purpose I spent so long searching for.Becoming a beacon of light has forever changed the way I spend every breath along my beautiful journey.', key: 5, name: 'Tony R.' 
            },
            { 
                src: vg, testimony: 'Now I have "framily" all around the globe, who share my passion to leave this world in a better state than we found it.I am beyond grateful.', key: 6, name: 'V.G.' 
            },
        ];
        this.state = {
            numTes: 0,
            testifierSrc: this.testifies[0].src,
            testifierDet: this.testifies[0].testimony,
            testifierName: this.testifies[0].name
        }

    }
    changeTestifier = () => {
        this.setState({ numTes: this.state.numTes + 1 })
        if (this.state.numTes === 1) {
            this.setState({
                testifierSrc: this.testifies[1].src,
                testifierDet: this.testifies[1].testimony,
                testifierName: this.testifies[1].name
            })
        }
        else if (this.state.numTes === 2) {
            this.setState({
                testifierSrc: this.testifies[2].src,
                testifierDet: this.testifies[2].testimony,
                testifierName: this.testifies[2].name
            })
        }
        else if (this.state.numTes === 3) {
            this.setState({
                testifierSrc: this.testifies[3].src,
                testifierDet: this.testifies[3].testimony,
                testifierName: this.testifies[3].name
            })
        }
        else if (this.state.numTes === 4) {
            this.setState({
                testifierSrc: this.testifies[4].src,
                testifierDet: this.testifies[4].testimony,
                testifierName: this.testifies[4].name
            })
        }
        else if (this.state.numTes === 5) {
            this.setState({
                testifierSrc: this.testifies[5].src,
                testifierDet: this.testifies[5].testimony,
                testifierName: this.testifies[5].name
            })
        }
        else if (this.state.numTes === 6) {
            this.setState({
                testifierSrc: this.testifies[0].src,
                testifierDet: this.testifies[0].testimony,
                testifierName: this.testifies[0].name
            })
        }
        else if (this.state.numTes === 7) {
            this.state.numTes = 0
        }
    }
    componentDidMount() {
        setInterval(
            () => {
                this.changeTestifier()
            }, 6000
        )

    }

    render() {
        return (
            <section className="homemain__testimonies">
                <div className="homemain__testimonies--overlay">
                    <h2 className='testimony-head2'>People</h2>
                    <h2 className='testimony-head1'>ILLUMINATI</h2>
                    <p className="homemain__testimonies--des">
                        Millions of people from all walks of life have committed themselves to the Illuminati’s global work for the betterment of the human species. By forgoing all divisions of religious, geographical, or political beliefs, followers of Illuminatiam strive to form a planet where all people, in all places, can live in Abundance.
                    </p>
                    <div className="homemain__testimonies--testifier" id={this.state.testifierName}>
                        <img src={this.state.testifierSrc} alt="testifier" className="homemain__testimonies--testifier-img" />
                        <p className="homemain__testimonies--testifier-detail">
                        {this.state.testifierDet}
                        </p>
                        <p className="homemain__testimonies--testifier-name">{this.state.testifierName}</p>
                        <NavLink to='/join-the-illuminati' className="learn-more">
                            Join The Illuminati
                        </NavLink>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Testimoney;