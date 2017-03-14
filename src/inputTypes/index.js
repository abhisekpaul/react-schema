var React = require('react');

var inputTypes = {
  checkboxInput        : require('./checkboxInput'),
  checkboxOptionsInput : require('./checkboxOptionsInput'),
  emailInput           : require('./emailInput'),
  fileInput            : require('./fileInput'),
  hiddenInput          : require('./hiddenInput'),
  passwordInput        : require('./passwordInput'),
  radioOptionsInput    : require('./radioOptionsInput'),
  selectInput          : require('./selectInput'),
  textareaInput        : require('./textareaInput'),
  textInput            : require('./textInput'),
  materialTextField    : require('./material/text-field'),
  MaterialDatePicker   : require('./material/date-picker'),
  MaterialSelectField  : require('./material/select-field'),
  MultiSelect          : require('./multi-select'),
  LocationInput        : require('./location-input'),
  WeeklyCalendar       : require('./weekly-calendar'),
  FileUpload           : require('./file-upload'),
  ArrayInput           : require('./array-input'),
  ObjectInput           : require('./object-input')
};

/**
 * Add an input type
 *
 * @param  type      name     Name of InputType
 * @param  Component instance Input Type Component
 */
inputTypes.addInputType = (name, instance) => {
  if (typeof name !== 'string') {
    throw new Error('ReactSchema: First parameter of addInputType '
                    + 'must be of type string');
  }

  if (!React.Component instanceof instance.constructor) {
    throw new Error('ReactSchema: Cannot not assign "' + name + '" as an inputType. '
                    + 'Second paramter expects a React component');
  }

  inputTypes[name] = instance;
};

/**
 * Add multiple InputTypes
 *
 * @param  object types InputTypes to add. string => Component
 */
inputTypes.addInputTypes = (types) => {
  if (typeof types !== 'object') {
    throw new Error('ReactSchema: First parameter of addInputTypes '
                    + 'must be of type object');
  }

  for (var type in types) {
    inputTypes.addInputType(type, types[type]);
  }
};

module.exports = inputTypes;
