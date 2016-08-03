import React from 'react';
// import SteamLink from './steamLink';
import { getUserInfo } from '../actions/index';
import Dash from './dash';
import { connect } from 'react-redux';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
    }

    componentDidMount() {
        let name = "profile_id";
        const { dispatch } = this.props;
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1,c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                console.log("profile id: ", c.substring(nameEQ.length,c.length));
                var id = c.substring(nameEQ.length,c.length);
                console.log("props: ", this.props);
                dispatch(getUserInfo(id));
                this.setState ({
                    id,
                })
            }
        }
    };

    GetProfileInfo() {
        if(this.state.id) {
            return <Dash user={this.props.user}/>
        } else {
            return <SteamLink />
        }
    }

    render() {
         return (
             <div>
                 <Title />
                 {this.GetProfileInfo()}
             </div>
         )
    }
};

const Title = () => {
    return (
        <h1><span className='highlight'>Steam</span>Hunt</h1>
    );
};

const SteamLink = () => {
    return (
        <form className="idInput" method="get" action="/auth/">
            <input type="hidden" name="openid" value="http://steamcommunity.com/openid" />
            <input type="submit" value="Login" />
        </form>
    );
};


const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Profile);
