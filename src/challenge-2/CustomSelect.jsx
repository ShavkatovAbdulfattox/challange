import React, { useState } from "react";
import styled from "styled-components";

const data = [
  {
    name: "Adam",
  },
  {
    name: "John",
  },
  {
    name: "Fred",
  },
  {
    name: "Sara",
  },
  {
    name: "Amilya",
  },
];

function CustomSelect() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <SelectWrapper>
        {" "}
        <NativeSelect onChange={handleChange}>
          {data
            .slice()
            .sort((a, b) =>
              a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            )
            .map(({ name }, i) => {
              return (
                <option key={i} value={name}>
                  {name}
                </option>
              );
            })}
        </NativeSelect>
        <SelectPresent>
          <p>Select</p>
        </SelectPresent>
      </SelectWrapper>

      <SelectedValue>
        <span>{value}</span>
      </SelectedValue>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 600px;
  overflow: hidden;
`;
const SelectWrapper = styled.div`
  position: relative;
  font-size: 1.5rem;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;

const SelectPresent = styled.div`
  border: 1px solid;
  border-radius: 10cqb;
  padding: 0 10px;

  & p {
    margin: 10px 0;
  }
`;

const SelectedValue = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #222222;
  background-color: #8f5f07;
  border-radius: 15px;
  margin-top: 30px;
  padding: 10px 0;
  border: solid #ca8400 2px;
  & span {
    font-size: 1.5rem;
    font-family: 900;
    color: #f4f4f4;
  }
`;
export default CustomSelect;
