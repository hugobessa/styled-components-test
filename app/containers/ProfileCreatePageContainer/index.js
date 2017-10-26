import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ProfileCreatePage from '../../components/ProfileCreatePage';
import { STATUS_DONE } from '../../common/constants';


class ProfileCreatePageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handleOnChangeField = this.handleOnChangeField.bind(this);

    this.state = {
      profileData: {
        full_name: '',
        email: '',
        current_position: '',
        about_you: '',
        favorite_topics: [],
      },
      topics: [
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' },
      ],
      topicsStatus: STATUS_DONE,
      errors: {},
    };
  }


  handleOnChangeField(fieldName, newValue) {
    const state = this.state;

    this.setState({
      ...state,
      profileData: {
        ...state.profileData,
        [fieldName]: newValue,
      },
    });
  }

  clearForm() {
    this.setState({
      ...this.state,
      profileData: {
        full_name: '',
        email: '',
        current_position: '',
        about_you: '',
        favorite_topics: [],
      },
      errors: this.validator.resetErrors(),
    });
  }

  render() {
    return (<ProfileCreatePage
      profileData={this.state.profileData}
      topics={this.state.topics}
      topicsStatus={this.state.topicsStatus}
      errors={this.state.errors}
      handleOnChangeField={this.handleOnChangeField}
      handleOnBlurField={() => {}}
      handleOnSubmit={() => console.log('submitted')} // eslint-disable-line
    />);
  }
}

ProfileCreatePageContainer.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRouter(ProfileCreatePageContainer);
