import React from 'react';
import PropTypes from 'prop-types';

import { STATUS_LOADING } from 'common/constants';
import { BasePage } from 'common/components/pages';
import { Panel } from 'common/components/general';
import { Row, Column } from 'common/components/grid';
import ProfileCreateForm from '../ProfileCreateForm';


const ProfileCreatePage = (props) => (
  <BasePage pageTitle="Profile Form">
    <Row>
      <Column lg={10} lgOffset={1} xl={8} xlOffset={2}>
        <Panel title="">
          <ProfileCreateForm
            {...props.profileData}
            topics={props.topics}
            topicsStatus={props.topicsStatus}
            errors={props.errors}
            handleOnChangeField={props.handleOnChangeField}
            handleOnBlurField={props.handleOnBlurField}
            handleOnSubmit={props.handleOnSubmit}
          />
        </Panel>
      </Column>
    </Row>
  </BasePage>
);

ProfileCreatePage.propTypes = {
  profileData: PropTypes.shape({
    full_name: PropTypes.string,
    email: PropTypes.string,
    current_position: PropTypes.string,
    about_you: PropTypes.string,
    favorite_topics: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  errors: PropTypes.shape({
    non_field_errors: PropTypes.arrayOf(PropTypes.string),
    full_name: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.arrayOf(PropTypes.string),
    current_position: PropTypes.arrayOf(PropTypes.string),
    about_you: PropTypes.arrayOf(PropTypes.string),
    favorite_topics: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  topics: PropTypes.arrayOf(PropTypes.object),
  topicsStatus: PropTypes.string,

  handleOnChangeField: PropTypes.func.isRequired,
  handleOnBlurField: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

ProfileCreatePage.defaultProps = {
  topics: [],
  topicsStatus: STATUS_LOADING,
};

export default ProfileCreatePage;
