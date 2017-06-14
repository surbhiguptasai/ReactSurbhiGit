import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

// Update this component
export default class Surprise extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            display: 'button'
        }
    }

    showImage() {
        this.setState({
            display: 'image'
        });
    }

    render() {
        if (this.state.display === 'button') {
            return <SurpriseButton onClick111={e => this.showImage()} />;
        }
        else if (this.state.display === 'image') {
            return <SurpriseImage />;
        }
    }
}
