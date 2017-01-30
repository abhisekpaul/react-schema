import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {find, cloneDeep} from 'lodash';

class WeeklyCalendar extends React.Component {

  static propTypes = {
    columns: React.PropTypes.array,
    value: React.PropTypes.object,
    rows: React.PropTypes.array,
    onChange:React.PropTypes.func
  };

  static defaultProps = {
    classes     : {},
    name        : undefined,
    id          : undefined,
    onChange    : () => {},
    columns     : [],
    rows        : []
  };

  constructor(props){
    super(props);
    this.state = {
      value : this.props.value
    };
  }

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      this.setState({
        value: props.value,
      });
    }
  }

  render() {
    return (
      <div className="form-group col-lg-12">

      <table className="table table-striped visible-md visible-lg">
      <thead>
      <tr>
      {
        this.props.columns.map(column => {
          return (
            <th key={column}>{column}</th>
          );
        })
      }
      </tr>
      </thead>
      <tbody>
      {
        this.props.rows.map(row => {
          return (
            <tr key={row}>
            {
              this.props.columns.map ( column => {
                return (
                  <td key={column + row}>
                    <Checkbox
                    key={`cb${column}${row}`}
                    label={row}
                    checked={this.getValue(column,row)}
                    disabled={this.props.disabled}
                    onCheck={this.onCheck.bind(this,column,row)}/>
                  </td>
                );
              })
            }
            </tr>
          )
        })
      }
      </tbody>
      </table>
      </div>
    );
  }

  onCheck = (column, row, event, isInputChecked) => {
    let value = cloneDeep(this.state.value);
    if(!value) {
      value = [];
    }

    let match = find(value, (obj) => {
        return obj.column===column;
    });

    if(!match)
    {
        match = {column:column,rows:[]};
        value.push(match);
    }

    let rowIndex = match.rows.indexOf(row);

    if(isInputChecked)
    {
        if(rowIndex<0)
        {
            match.rows.push(row);
        }
    }
    else
    {
        if(rowIndex>=0)
        {
            match.rows.splice(rowIndex,1);
        }
    }

    this.setState({
      value: value,
    }, this.props.onChange.bind(null, value));

  }

  getValue = (column, row) => {
    let value = this.state.value;

    let match = find(value, (obj) => {
        return obj.column === column;
    });

    if(match)
    {
        return match.rows.indexOf(row)>=0;
    }
    return false;
  }
}

module.exports = WeeklyCalendar;
