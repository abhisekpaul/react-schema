'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _List = require('material-ui/List');

var _GridList = require('material-ui/GridList');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeeklyCalendar = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(WeeklyCalendar, _React$Component);

  function WeeklyCalendar(props) {
    (0, _classCallCheck3.default)(this, WeeklyCalendar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WeeklyCalendar.__proto__ || (0, _getPrototypeOf2.default)(WeeklyCalendar)).call(this, props));

    _this.styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },
      gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto'
      },
      tileStyle: {
        paddingTop: 50
      }
    };

    _this.onCheck = function (column, row, event, isInputChecked) {
      var value = (0, _lodash.cloneDeep)(_this.state.value);
      if (!value) {
        value = [];
      }

      var match = (0, _lodash.find)(value, function (obj) {
        return obj.column === column;
      });

      if (!match) {
        match = { column: column, rows: [] };
        value.push(match);
      }

      var rowIndex = match.rows.indexOf(row);

      if (isInputChecked) {
        if (rowIndex < 0) {
          match.rows.push(row);
        }
      } else {
        if (rowIndex >= 0) {
          match.rows.splice(rowIndex, 1);
        }
      }

      _this.setState({
        value: value
      }, _this.props.onChange.bind(null, value));
    };

    _this.getValue = function (column, row) {
      var value = _this.state.value;

      var match = (0, _lodash.find)(value, function (obj) {
        return obj.column === column;
      });

      if (match) {
        return match.rows.indexOf(row) >= 0;
      }
      return false;
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(WeeklyCalendar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.value !== props.value) {
        this.setState({
          value: props.value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _styles = this.styles,
          root = _styles.root,
          gridList = _styles.gridList,
          tileStyle = _styles.tileStyle;

      var columns = this.props.columns || [];
      var rows = this.props.rows || [];

      return _react2.default.createElement(
        _GridList.GridList,
        null,
        columns.map(function (column) {
          return _react2.default.createElement(
            _GridList.GridTile,
            { key: column, title: column, titlePosition: 'top', style: tileStyle },
            rows.map(function (row) {
              return _react2.default.createElement(_Checkbox2.default, {
                key: 'cb' + column + row,
                label: row,
                checked: _this2.getValue(column, row),
                disabled: _this2.props.disabled,
                onCheck: _this2.onCheck.bind(_this2, column, row) });
            })
          );
        })
      );

      // return (
      //   <div className="form-group col-lg-12">
      //
      //     <table className="table table-striped visible-md visible-lg">
      //       <thead>
      //         <tr>
      //           {
      //             this.props.columns.map(column => {
      //               return (
      //                 <th key={column}>{column}</th>
      //               );
      //             })
      //           }
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {
      //           this.props.rows.map(row => {
      //             return (
      //               <tr key={row}>
      //                 {
      //                   this.props.columns.map ( column => {
      //                     return (
      //                       <td key={column + row}>
      //                         <Checkbox
      //                           key={`cb${column}${row}`}
      //                           label={row}
      //                           checked={this.getValue(column,row)}
      //                           disabled={this.props.disabled}
      //                           onCheck={this.onCheck.bind(this,column,row)}/>
      //                       </td>
      //                     );
      //                   })
      //                 }
      //               </tr>
      //             )
      //           })
      //         }
      //       </tbody>
      //     </table>
      //   </div>
      // );
    }
  }]);
  return WeeklyCalendar;
}(_react2.default.Component), _class.propTypes = {
  columns: _react2.default.PropTypes.array,
  value: _react2.default.PropTypes.object,
  rows: _react2.default.PropTypes.array,
  onChange: _react2.default.PropTypes.func
}, _class.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  onChange: function onChange() {},
  columns: [],
  rows: []
}, _temp);


module.exports = WeeklyCalendar;