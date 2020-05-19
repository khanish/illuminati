import React, { Component } from 'react';

class Footer extends Component {
    render() {
        let d = new Date();
        return (
            <footer class="w3-contain w3-padding-8 w3-center w3-large" style={{ backgroundColor: 'rgb(216, 164, 102)'}}>
                <i class="fa fa-facebook-official w3-hover-opacity" style={{ color: 'rgb(148, 20, 65)', marginRight: '1rem', fontSize: '3rem'}}></i>
                <i class="fa fa-instagram w3-hover-opacity" style={{ color: 'rgb(148, 20, 65)', marginRight: '1rem', fontSize: '3rem' }}></i>
                <i class="fa fa-twitter w3-hover-opacity" style={{ color: 'rgb(148, 20, 65)', marginRight: '1rem', fontSize: '3rem' }}></i>
                <p class="w3-medium" style={{ color: 'rgb(148, 20, 65)', fontSize: '36px'}}>
                    &#169; {d.getFullYear()} Illuminati
            </p>
            </footer>
        );
    }
}
 export default Footer
