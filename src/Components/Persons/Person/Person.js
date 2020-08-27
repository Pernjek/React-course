import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';


//import './Person.css';


class Person extends Component  {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
        // this.inputElement.focus();
    }

    render () {
        console.log('[Person.js] rendering...'); 
        return (
        <Auxiliary>
            <AuthContext.Consumer>
                {context => context.authenticated ? <p>Authenticated</p>: <p>Please Log In </p> 
                }
            </AuthContext.Consumer>
                <p onClick={this.props.click}>
                     Ja sam {this.props.name} imam {this.props.age} godina 
                </p>,
                <p key="i2">{this.props.children}</p>,
                <input 
                key="i3" 
                ref={this.inputElementRef}
                // ref={(inputEl) => {this.inputElement = inputEl}}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
                />
        </Auxiliary>
        );
    };
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,classes.Person);








/*    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }*/

        /* const rnd = Math.random();

    if ( rnd > 0.7 ) {
        throw new Error( 'Something went wrong' );
    }*/