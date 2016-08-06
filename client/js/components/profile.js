import React from 'react';
// import SteamLink from './steamLink';
import { getUserInfo } from '../actions/index';
import Dash from './dash';
import { connect } from 'react-redux';
import { store } from './App'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
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
                var id = c.substring(nameEQ.length,c.length);
                this.setState ({
                    id,
                });
                dispatch(getUserInfo(id));
            }
        }
    };

    GetProfileInfo() {
        if (!this.props.isFetching){
            if (!this.state.id) {
                return <SteamLink />
            } else {
                var user = this.props.user;
                return (
                    <Dash user={user} />
                )
            }
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
    if (!state) {
        return {}
    } else if (state.isFetching){
        return state
    } else {
        return {
            user: state.user
        }
    }
};

export default connect(mapStateToProps)(Profile);
