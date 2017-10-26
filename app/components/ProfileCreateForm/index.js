import React from 'react';
import PropTypes from 'prop-types';

import { STATUS_LOADING } from 'common/constants';
import { Button } from '../../common/components/general';
import { Row, Column } from '../../common/components/grid';
import { FieldSet, Label, FormGroup } from '../../common/components/forms';
import { TextField, TextArea, MultipleSelectCheckBoxes } from '../../common/components/forms/fields';


const ProfileCreateForm = (props) => {
  const { topics, topicsStatus, handleOnChangeField,
          handleOnBlurField, handleOnSubmit, errors } = props;

  return (<form onSubmit={(e) => { e.preventDefault(); handleOnSubmit(); }} >
    <FieldSet legend="profile">
      <Row>
        <Column md={4}>
          <FormGroup errors={errors.full_name}>
            <Label hidden>full name</Label>
            <TextField
              name="full_name"
              value={props.full_name}
              placeholder="full name"
              onBlur={() => handleOnBlurField('full_name', props.full_name)}
              onChange={(val) => handleOnChangeField('full_name', val)}
            />
          </FormGroup>
        </Column>
        <Column md={4}>
          <FormGroup errors={errors.email}>
            <Label hidden>email</Label>
            <TextField
              name="email"
              value={props.email}
              placeholder="email"
              onBlur={() => handleOnBlurField('email', props.email)}
              onChange={(val) => handleOnChangeField('email', val)}
            />
          </FormGroup>
        </Column>
        <Column md={4}>
          <FormGroup errors={errors.current_position}>
            <Label hidden>current position</Label>
            <TextField
              name="current_position"
              value={props.current_position}
              placeholder="current position"
              onBlur={() => handleOnBlurField('current_position', props.current_position)}
              onChange={(val) => handleOnChangeField('current_position', val)}
            />
          </FormGroup>
        </Column>
        <Column md={12}>
          <FormGroup errors={errors.about_you}>
            <Label hidden>about you</Label>
            <TextArea
              name="about_you"
              value={props.about_you}
              placeholder="about you"
              rows="4"
              onBlur={() => handleOnBlurField('about_you', props.about_you)}
              onChange={(val) => handleOnChangeField('about_you', val)}
            />
          </FormGroup>
        </Column>
      </Row>
    </FieldSet>

    <FieldSet legend="favorite topics">
      <Row>
        <Column md={8}>
          <FormGroup errors={errors.favorite_topics}>
            <MultipleSelectCheckBoxes
              items={topics}
              itemsStatus={topicsStatus}
              onChange={(val) => handleOnChangeField('favorite_topics', val)}
              value={props.favorite_topics}
            />
          </FormGroup>
        </Column>
      </Row>
    </FieldSet>

    <Row>
      <Column xs={12} md={4} mdOffset={8} xl={3} xlOffset={9}>
        <Button type="submit" btnType="primary" width="full" size="lg">
          Submit
        </Button>
      </Column>
    </Row>
  </form>);
};

ProfileCreateForm.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  topicsStatus: PropTypes.string.isRequired,

  full_name: PropTypes.string,
  email: PropTypes.string,
  current_position: PropTypes.string,
  about_you: PropTypes.string,
  favorite_topics: PropTypes.arrayOf(PropTypes.number),

  errors: PropTypes.shape({
    non_field_errors: PropTypes.arrayOf(PropTypes.string),
    full_name: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.arrayOf(PropTypes.string),
    current_position: PropTypes.arrayOf(PropTypes.string),
    about_you: PropTypes.arrayOf(PropTypes.string),
    favorite_topics: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  handleOnChangeField: PropTypes.func,
  handleOnBlurField: PropTypes.func,
  handleOnSubmit: PropTypes.func,
};

ProfileCreateForm.defaultProps = {
  full_name: '',
  email: '',
  current_position: '',
  about_you: '',
  favorite_topics: [],
  topics: [],
  topicsStatus: STATUS_LOADING,

  handleOnChangeField: () => {},
  handleOnBlurField: () => {},
  handleOnSubmit: () => {},
};

export default ProfileCreateForm;
