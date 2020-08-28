import React, { Component } from 'react';

class Footer extends Component {
    render() {
        let d = new Date();
        return (
            <footer class="w3-contain w3-center w3-large" style={{ backgroundColor: 'rgb(216, 164, 102)', padding: '.8rem'}}>
                <a href="https://www.facebook.com/Illuminati-Gran-lodge-111723633883382/" target="_blank"><i class="fa fa-facebook-official w3-hover-opacity" style={{ color: 'rgb(148, 20, 65)', marginRight: '1rem', fontSize: '3rem' }}></i></a> 
                <a href="https://www.instagram.com/pedigree_family/" target="_blank"><i class="fa fa-instagram w3-hover-opacity" style={{ color: 'rgb(148, 20, 65)', marginRight: '1rem', fontSize: '3rem' }}></i></a>
                <p class="w3-medium" style={{ color: 'rgb(148, 20, 65)', fontSize: '36px'}}>
                    &#169; {d.getFullYear()} Illuminati
            </p>
            </footer>
        );
    }
}
 export default Footer
