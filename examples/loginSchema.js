module.exports = {
  "classes" : {
    "form" : "login-form",
    "question" : "form-group",
    "input" : "form-control",
    "controlButton" : "btn btn-primary pull-right",
    "backButton" : "btn btn-default pull-left",
    "errorMessage" : "alert alert-danger",
    "buttonBar" : "button-bar"
  },
  "formPanels" : [{
    "index" : 1,
    "panelId" : "register-panel"
  }],
  "questionPanels" : [{
    "disableDefaultButton":false,
    "panelId" : "register-panel",
    "panelHeader" : "React Schema Example",
    "panelText" : "Please enter",
    "action" : {
      "default" : {
        "action" : "SUBMIT"
      }
    },
    "button" : {
      "text" : "Submit"
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "register-set"
    }]
  }],
  "questionSets" : [{
    "questionSetHeader" : "Login Details",
    "questionSetId" : "register-set",
    "collapsible":true,
    "collapse":false,
    "questions" : [
      // {
      //   "questionId":"email",
      //   "input":{
      //     "name":"email",
      //     "type":"materialTextField",
      //     "required":true,
      //     "props":{
      //       "type":"email",
      //       "fullWidth":true,
      //       "hintText":"Enter your email address",
      //       "floatingLabelText":"Email"
      //     }
      //   },
      //   "validations":[{
      //     "type":"isEmail"
      //     }]
      //   },
        {
          "questionId":"helperTypes",
          "question":"",
          "input":{
            "type":"MultiSelect",
            "placeholder":"All. Or select specific helper types.",
            "options":[
              {text:"Baby Sitter", value:"Baby Sitter"},
              {text:"Nanny", value:"Nanny"},
              {text:"Part Time Nanny", value:"Part Time Nanny"},
              {text:"Full Time Nanny", value:"Full Time Nanny"},
              {text:"After School Nanny", value:"After School Nanny"},
              {text:"Live In Nanny", value:"Live In Nanny"},
              {text:"Au Pair", value:"Au Pair"},
              {text:"Child Minder", value:"Child Minder"},
              {text:"Mothers Help", value:"Mothers Help"},
              {text:"Maternity Nurse and Midwife", value:"Maternity Nurse and Midwife"},
              {text:"House Keepers and Cleaners", value:"House Keepers and Cleaners"},
              {text:"Tutor", value:"Tutor"}
            ],
            "props":{
              "multi":true,
              "simpleValue":true,
              "ensureArray":true
            }
          },
          "validations":[
            {
              "type":"isLength",
              "params":[
                1
              ]
            }
          ]
        },
        {
          "questionId" : "feature",
          "question" : "Feature",
          "input" : {
            "type" : "ObjectInput",
            "props":{
              "description":"Please add eligibility criteria",
              "elements":{
                "questions":[
                  {
                    "questionId" : "Nestedfield1",
                    "question" : "Nested field 1",
                    "input" : {
                      "type" : "materialTextField",
                      "placeholder" : "Email Address8",
                      "default" : "abhisekpaul@gmail.com1"
                    }
                  },
                  {
                    "questionId" : "Nestedfield2",
                    "question" : "Nested field 2",
                    "input" : {
                      "type" : "materialTextField",
                      "placeholder" : "Email Address1",
                      "default" : "abhisekpaul@gmail.com2"
                    }
                  },
                  {
                    "questionId" : "subfeature",
                    "question" : "SubFeature",
                    "input" : {
                      "type" : "ObjectInput",
                      "props":{
                        "description":"Please add eligibility criteria",
                        "elements":{
                          "questions":[
                            {
                              "questionId" : "Nestedfield11",
                              "question" : "Nested field 11",
                              "input" : {
                                "type" : "materialTextField",
                                "placeholder" : "Email Address18",
                                "default" : "abhisekpaul@gmail.com11"
                              }
                            },
                            {
                              "questionId" : "Nestedfield12",
                              "question" : "Nested field 12",
                              "input" : {
                                "type" : "materialTextField",
                                "placeholder" : "Email Address81",
                                "default" : "abhisekpaul@gmail.com12"
                              }
                            }
                          ]
                        }
                      }

                    }
                  }
                ]
              }
            }

          }
        },
      // {
      //   "questionId": "location",
      //   "question": "",
      //   "input": {
      //     "type": "LocationInput",
      //     "placeholder": "Please type POSTCODE and select the location",
      //     "props": {
      //       "autoActivateFirstSuggest": true,
      //       "country": "gb",
      //       "radius": 20,
      //       "initialValue": ""
      //     }
      //   },
      //   "validations": [{
      //     "type": "isLocation"
      //   }]
      // },
      // {
      //   "questionId":"availabilities",
      //   "question":"Your availibility",
      //   "input":{
      //      "type":"WeeklyCalendar",
      //      "props":{
      //        "columns" : [
      //          "Monday",
      //          "Tuesday",
      //          "Wednesday",
      //          "Thursday",
      //          "Friday",
      //          "Saturday",
      //          "Sunday"
      //        ],
      //        "rows":[
      //            "Morning",
      //            "Afternoon",
      //            "Evening",
      //            "Overnight",
      //            "Urgent"
      //        ]
      //      }
      //   }
      // },
      //   {
      //     "questionId":"dob",
      //     "input":{
      //       "type":"MaterialDatePicker",
      //       "props":{
      //         "fullWidth":true,
      //         "hintText":"Enter your date of birth"
      //       }
      //     },
      //     "validations" : [{
      //       "type" : "isDate"
      //       }]
      //     },
      //
      // {
      //    "questionId":"images",
      //    "input":{
      //       "name":"images",
      //       "type":"FileUpload",
      //       "props":{
      //         "componentConfig" : {
      //           "iconFiletypes": ['.jpg', '.png', '.gif'],
      //           "showFiletypeIcon": true,
      //           "postUrl": 'no-url'
      //         },
      //         "djsConfig" : {
      //           "addRemoveLinks": true,
      //           "acceptedFiles": "image/jpeg,image/png,image/gif",
      //           "autoProcessQueue": false,
      //           "clickable":true
      //         }
      //       }
      //    }
      // },
      {
        "questionId" : "eligibility",
        "question" : "Eligibility",
        "input" : {
          "type" : "ArrayInput",
          "props":{
            "description":"Please add eligibility criteria",
            "elements":{
              "questions":[
                {
                  "questionId" : "email",
                  "question" : "Email Address",
                  "input" : {
                    "type" : "materialTextField",
                    "placeholder" : "Email Address",
                    "default" : "abhisekpaul@gmail.com"
                  },
                  "validations" : [{
                    "type" : "isEmail"
                  }]
                },
                {
                  "questionId":"description",
                  "input":{
                    "name":"description",
                    "type":"materialTextField",
                    "props":{
                      "fullWidth":true,
                      "multiLine":true,
                      "rows":6,
                      "hintText":"Enter your job requirements",
                      "floatingLabelText":"Job Requirements"
                    }
                  },
                  "validations":[
                    {
                      "type":"isLength",
                      "params":[
                        25
                      ]
                    }
                  ]
                }
              ]
            }
          }

        },
        "validations":[
          {
            "type":"isLength",
            "params":[
              1
            ]
          }
        ]
      }
      // {
      //   "questionId" : "email",
      //   "question" : "Email Address",
      //   "input" : {
      //     "type" : "materialTextField",
      //     "placeholder" : "Email Address",
      //     "required" : true,
      //     "default" : "abhisekpaul@gmail.com"
      //   },
      //   "validations" : [{
      //     "type" : "isEmail"
      //   }]
      // },
      // {
      //   "questionId":"description",
      //   "input":{
      //     "name":"description",
      //     "type":"materialTextField",
      //     "required":true,
      //     "props":{
      //       "fullWidth":true,
      //       "multiLine":true,
      //       "rows":6,
      //       "hintText":"Enter your job requirements",
      //       "floatingLabelText":"Job Requirements"
      //     }
      //   },
      //   "validations":[
      //     {
      //       "type":"isLength",
      //       "params":[
      //         25
      //       ]
      //     }
      //   ]
      // },
      // {
      //   "questionId" : "password",
      //   "question" : "Password",
      //   "input" : {
      //     "type" : "passwordInput",
      //     "placeholder" : "Password"
      //   },
      //   "validations" : [{
      //     "type" : "isLength",
      //     "params" : [1]
      //   }]
      // }, {
      //   "questionId" : "passwordConfirm",
      //   "question" : "Confirm Password",
      //   "input" : {
      //     "type" : "passwordInput",
      //     "placeholder" : "Confirm Password"
      //   },
      //   "validations" : [{
      //     "type" : "equals",
      //     "params" : ['{password}'],
      //     "message" : "Confirm Password must match Password"
      //   }]
      // },
      // {
      //   "questionId":"jobtype",
      //   "question":"",
      //   "input":{
      //     "type":"MaterialSelectField",
      //     "options":[
      //       {
      //         "text":"Full Time",
      //         "value":"fulltime"
      //       },
      //       {
      //         "text":"Part Time",
      //         "value":"parttime"
      //       },
      //       {
      //         "text":"After School",
      //         "value":"afterschool"
      //       },
      //       {
      //         "text":"Weekends",
      //         "value":"weekends"
      //       }
      //     ],
      //     "props":{
      //       "fullWidth":true,
      //       "hintText":"Enter job type"
      //     }
      //   },
      //   "validations":[
      //     {
      //       "type":"isLength",
      //       "params":[
      //         1
      //       ]
      //     }
      //   ]
      // },
      // {
      //   "questionId":"startDate",
      //   "question":"",
      //   "input":{
      //     "type":"MaterialDatePicker",
      //     "props":{
      //       "fullWidth":true,
      //       "hintText":"Enter start date for this job post"
      //     }
      //   },
      //   "validations" : [{
      //     "type" : "isDate"
      //   }]
      // },
      // {
      //   "questionId":"helperTypes",
      //   "question":"",
      //   "input":{
      //     "type":"MultiSelect",
      //     "placeholder":"All. Or select specific helper types.",
      //     "options":[
      //       {text:"Baby Sitter", value:"Baby Sitter"},
      //       {text:"Nanny", value:"Nanny"},
      //       {text:"Part Time Nanny", value:"Part Time Nanny"},
      //       {text:"Full Time Nanny", value:"Full Time Nanny"},
      //       {text:"After School Nanny", value:"After School Nanny"},
      //       {text:"Live In Nanny", value:"Live In Nanny"},
      //       {text:"Au Pair", value:"Au Pair"},
      //       {text:"Child Minder", value:"Child Minder"},
      //       {text:"Mothers Help", value:"Mothers Help"},
      //       {text:"Maternity Nurse and Midwife", value:"Maternity Nurse and Midwife"},
      //       {text:"House Keepers and Cleaners", value:"House Keepers and Cleaners"},
      //       {text:"Tutor", value:"Tutor"}
      //     ],
      //     "props":{
      //       "multi":true,
      //       "simpleValue":true
      //     }
      //   },
      //   "validations":[
      //     {
      //       "type":"isLength",
      //       "params":[
      //         1
      //       ]
      //     }
      //   ]
      // },
      // {
      //   "questionId":"location",
      //   "question":"",
      //   "input":{
      //     "type":"LocationInput",
      //     "props":{
      //       "autoActivateFirstSuggest":true,
      //       "country":"gb",
      //       "radius":20,
      //       "initialValue":""
      //     }
      //   },
      //   "validations":[
      //     {
      //       "type":"isLocation"
      //     }
      //   ]
      // }]
    ]
    }]
  };
