'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _addBox = require('material-ui/svg-icons/content/add-box');

var _addBox2 = _interopRequireDefault(_addBox);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _lodash = require('lodash');

var _reactCollapsible = require('react-collapsible');

var _reactCollapsible2 = _interopRequireDefault(_reactCollapsible);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _question = require('../question');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrayInput = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(ArrayInput, _React$Component);

  function ArrayInput(props) {
    (0, _classCallCheck3.default)(this, ArrayInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ArrayInput.__proto__ || (0, _getPrototypeOf2.default)(ArrayInput)).call(this, props));

    _this.renderQuestions = function (value) {
      var questions = value.map(function (item, index) {

        var questionRenderers = _this.renderQuestion(item, index);
        var questionsRenderer = questionRenderers.map(function (questionrenderer) {
          return questionrenderer;
        });

        var label = _this.props.id;

        var header = _react2.default.createElement(
          _List.ListItem,
          {
            disabled: true,
            rightIcon: _react2.default.createElement(
              _IconButton2.default,
              { tooltip: 'Remove Item', onTouchTap: _this.removeItem.bind(_this, index), style: { marginLeft: 200 } },
              _react2.default.createElement(_delete2.default, null)
            ),
            leftAvatar: _react2.default.createElement(
              _Avatar2.default,
              null,
              index + 1
            )
          },
          label + '-item'
        );

        return _react2.default.createElement(
          _List.List,
          { key: 'nested' + index },
          _react2.default.createElement(
            _reactCollapsible2.default,
            { trigger: header },
            questionRenderers
          )
        );
        // value={this.props.questionAnswers[question.questionId]}
      });

      return questions;
    };

    _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      }, _this.props.onChange.bind(null, event.target.value));
    };

    _this.addItem = function () {
      var value = _this.state.value.slice(0);
      var questions = _this.props.elements.questions;
      var newItem = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(questions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          newItem[item.questionId] = "";
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      value.push(newItem);
      _this.setState({
        value: value
      }, _this.props.onChange.bind(null, value));
    };

    _this.removeItem = function (itemIndex) {
      var value = _this.state.value.slice(0);
      if (itemIndex >= 0) {
        value.splice(itemIndex, 1);
        _this.setState({
          value: value
        }, _this.props.onChange.bind(null, value));
      }
    };

    _this.handleAnswerChange = function (index, questionId, questionAnswer, validations, validateOn) {
      var value = _this.state.value.slice(0);
      value[index][questionId] = questionAnswer;
      _this.setState({
        value: value
      }, _this.props.onChange.bind(null, value));
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(ArrayInput, [{
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
      var value = this.state.value || [];
      var description = this.props.description;
      var count = value.length;

      var header = _react2.default.createElement(
        _List.ListItem,
        {
          disabled: true,
          rightIcon: _react2.default.createElement(_RaisedButton2.default, { label: 'Add', secondary: true, onTouchTap: this.addItem }) },
        description,
        '(',
        count,
        ')'
      );

      return _react2.default.createElement(
        'div',
        null,
        header,
        this.renderQuestions(value)
      );
    }
  }, {
    key: 'renderQuestion',
    value: function renderQuestion(item, index) {
      var result = [];
      for (var key in item) {
        var question = this.getQuestion(key);
        var questionItem = _react2.default.createElement(_question2.default, { key: question.questionId + '_' + index,
          questionSetId: this.props.id,
          questionId: question.questionId,
          question: question.question,
          validateOn: question.validateOn,
          validations: question.validations,
          text: question.text,
          value: item[key],
          postText: question.postText,
          input: question.input,
          classes: this.props.classes,
          renderError: this.props.renderError,
          renderRequiredAsterisk: this.props.renderRequiredAsterisk,
          questionAnswers: this.props.questionAnswers,
          validationErrors: this.props.validationErrors,
          onAnswerChange: this.handleAnswerChange.bind(this, index),
          onQuestionBlur: this.props.onQuestionBlur,
          onKeyDown: this.props.onKeyDown });
        result.push(questionItem);
      }
      return result;
    }
  }, {
    key: 'getQuestion',
    value: function getQuestion(key) {
      var result = (0, _lodash.findWhere)(this.props.elements.questions, { questionId: key });
      return result;
    }
  }]);
  return ArrayInput;
}(_react2.default.Component), _class.propTypes = {}, _class.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: [],
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
}, _temp);


module.exports = ArrayInput;