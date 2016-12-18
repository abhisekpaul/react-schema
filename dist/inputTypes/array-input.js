'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Question = require('../question');

var ArrayInput = function (_React$Component) {
  _inherits(ArrayInput, _React$Component);

  function ArrayInput(props) {
    _classCallCheck(this, ArrayInput);

    var _this = _possibleConstructorReturn(this, (ArrayInput.__proto__ || Object.getPrototypeOf(ArrayInput)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      }, _this.props.onChange.bind(null, event.target.value));
    };

    _this.renderQuestions = function (value) {
      // let questions = value.map(item => {
      //   let question = this.getQuestion('email');
      //   // value={this.props.questionAnswers[question.questionId]}
      //   return (
      //     <Question key={question.questionId}
      //               questionSetId={this.props.id}
      //               questionId={question.questionId}
      //               question={question.question}
      //               validateOn={question.validateOn}
      //               validations={question.validations}
      //               text={question.text}
      //               postText={question.postText}
      //               input={question.input}
      //               classes={this.props.classes}
      //               renderError={this.props.renderError}
      //               renderRequiredAsterisk={this.props.renderRequiredAsterisk}
      //               questionAnswers={this.props.questionAnswers}
      //               validationErrors={this.props.validationErrors}
      //               onAnswerChange={this.props.onAnswerChange}
      //               onQuestionBlur={this.props.onQuestionBlur}
      //               onKeyDown={this.props.onKeyDown} />
      //   );
      // });
      var questions = value.map(function (item) {
        var questionItem = _this.getQuestion('email');
        return _react2.default.createElement(Question, { key: questionItem.questionId,
          questionSetId: _this.props.id,
          questionId: questionItem.questionId,
          question: questionItem.question,
          validateOn: questionItem.validateOn,
          validations: questionItem.validations,
          text: questionItem.text,
          postText: questionItem.postText,
          input: questionItem.input,
          classes: _this.props.classes,
          renderError: _this.props.renderError,
          renderRequiredAsterisk: _this.props.renderRequiredAsterisk,
          questionAnswers: _this.props.questionAnswers,
          validationErrors: _this.props.validationErrors,
          onAnswerChange: _this.props.onAnswerChange,
          onQuestionBlur: _this.props.onQuestionBlur,
          onKeyDown: _this.props.onKeyDown });
      });

      console.log(Question);
      console.log(questions);

      return questions;
    };

    _this.addItem = function () {
      var value = _this.state.value.slice(0);

      value.push({ email: "abhisek@ob.c" });
      _this.setState({
        value: value
      });
    };

    _this.removeItem = function (item) {};

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(ArrayInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.value !== props.value) {
        this.setState({
          value: props.value
        }, this.props.onChange.bind(null, props.value));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value || [];
      var description = this.props.description;

      return _react2.default.createElement(
        'div',
        null,
        description,
        _react2.default.createElement(
          _IconButton2.default,
          { tooltip: 'Add an item', onTouchTap: this.addItem },
          _react2.default.createElement(_addBox2.default, null)
        ),
        this.renderQuestions(value)
      );
    }
  }, {
    key: 'getQuestion',
    value: function getQuestion(key) {
      var result = (0, _lodash.findWhere)(this.props.elements.questions, { questionId: key });
      return result;
    }
  }]);

  return ArrayInput;
}(_react2.default.Component);

ArrayInput.propTypes = {};
ArrayInput.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: [],
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
};


module.exports = ArrayInput;