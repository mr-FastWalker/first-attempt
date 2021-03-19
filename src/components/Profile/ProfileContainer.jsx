import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 2 }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                    this.props.setUserProfile(response.data);
                }
            )
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

let WithUrlDataContainerComponent = withRouter(ProfileContainer); //обертка, дает URL в props

export default connect (mapStateToProps, { setUserProfile }) (WithUrlDataContainerComponent); // дает state и dispatch to props