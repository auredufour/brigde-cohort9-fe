import React from "react";
import {
  Button,
  Checkbox,
  Select,
  Form,
  Input,
  TextArea,
  Label
} from "semantic-ui-react";
import styled from "styled-components";

const TypeDropdown = ({ val, onChange, options, error }) => {
  return (
    <>
      {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
      <Form.Group widths="equal" className="row">
        <select
          defaultValue={options[0]}
          onChange={onChange}
          value={val}
          className="sixteen wide column"
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </Form.Group>
    </>
  );
};

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

export default TypeDropdown;