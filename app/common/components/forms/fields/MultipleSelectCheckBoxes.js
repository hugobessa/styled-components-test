import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { STATUS_DONE, STATUS_ERROR, STATUS_LOADING } from '../../../constants';

import { Row, Column } from '../../../components/grid';
import { Spinner } from '../../../components/general';


const LabelLinkWrapper = styled.span`
  display: flex;
`;
const LabelLink = styled.a`
  color: ${(props) => props.theme.darkTextColor};
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  min-width: 0;
  font-size: 12px;
  border: 1px solid transparent;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.primaryColor};
  }

  > i {
    font-size: 16px;
  }
`;


const CheckBox = (props) => (
  <i
    role="checkbox"
    aria-checked={props.checked}
    className={`mdi ${props.checked ?
                        'mdi-checkbox-marked'
                        : 'mdi-checkbox-blank-outline'}`}
  />
);

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

class MultipleSelectCheckBoxes extends React.Component {

  toggleItem(item) {
    const { onChange, value } = this.props;

    if (value.indexOf(item.id) >= 0) {
      onChange(value.filter((id) => id !== item.id));
    } else {
      onChange([...value, item.id]);
    }
  }

  render() {
    const { items, itemsStatus, value } = this.props;

    return (<Row gutterSize={10}>
      {items && items.length && itemsStatus === STATUS_DONE ?
        items.map((item) => (<Column key={`item-${item.id}`} xs={4} gutterSize={10}>
          <LabelLinkWrapper>
            <LabelLink
              href=""
              alt={item.name}
              htmlFor={`item-${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                this.toggleItem(item);
              }}
            >
              <CheckBox
                checked={value.indexOf(item.id) >= 0}
              /> {item.name}
            </LabelLink>
          </LabelLinkWrapper>
        </Column>))
        : ''
      }
      {itemsStatus === STATUS_LOADING ?
        <Spinner />
        : ''
      }
      {itemsStatus === STATUS_ERROR ?
        <p>Something wrong happened. It was not possible to load the topics.</p>
        : ''
      }
    </Row>);
  }
}

MultipleSelectCheckBoxes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsStatus: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.any),

  onChange: PropTypes.func,
};

MultipleSelectCheckBoxes.defaultProps = {
  value: [],
  itemsStatus: STATUS_LOADING,

  onChange: () => {},
};


export default MultipleSelectCheckBoxes;
