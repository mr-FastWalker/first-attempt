import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
                {withCredentials: true})
            .then(response => {
                    if ( response.data.resultCode === 0 ) {
                        let {email, id, login} = response.data.data;
                        this.props.setAuthUserData (email, id, login);
                    }
                }
            )
        // let userId = this.props.match.params.userId;
        // debugger
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId,
        //         {withCredentials: true})
        //     .then(response => {
        //             if ( response.data.resultCode === 0 ) {
        //
        //                 this.props.setAuthUserData (response.data.data);
        //             }
        //         }
        //     )
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

let WithUrlDataContainerComponent = withRouter(HeaderContainer); //обертка, дает URL в props

export default connect (mapStateToProps, {setAuthUserData}) (WithUrlDataContainerComponent);