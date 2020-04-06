import React from "react";

import CheckboxList from "./common/CheckboxList/index";

const checkboxes = [
  {
    name: "CB1",

    key: "1",

    label: "CB1"
  },

  {
    name: "CB2",

    key: "CB2",

    label: "CB2"
  },

  {
    name: "CB3",

    key: "CB3",

    label: "CB3"
  },

  {
    name: "CB4",

    key: "CB4",

    label: "CB4"
  },

  {
    name: "CB5",

    key: "CB5",

    label: "CB5"
  },

  {
    name: "CB6",

    key: "CB6",

    label: "CB6"
  },

  {
    name: "CB7",

    key: "CB7",

    label: "CB7"
  }
];

class CheckboxListEXP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map()
    };
  }

  handleChange = e => {
    const item = e.target.name;

    const isChecked = e.target.checked;

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));

    // console.log(item + "-" + isChecked);

    // console.log(this.state.checkedItems);
  };

  render() {
    return (
      <>
        {checkboxes.map(item => (
          <label key={item.key}>
            {item.name}

            <CheckboxList
              name={item.name}
              checked={this.state.checkedItems.get(item.name)}
              onChange={this.handleChange}
            />
          </label>
        ))}

        <h4>Seleted Ites</h4>

        <ul>
          {[...this.state.checkedItems].map(([item, Key]) => (
            <li key={item}>
              {item}-{Key.toString()}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CheckboxListEXP;
