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
    "disableDefaultButton":true,
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
    "questionSetId" : "register-set",
    "questions" : [
      {
        "questionId":"email",
        "input":{
          "name":"email",
          "type":"materialTextField",
          "required":true,
          "props":{
            "type":"email",
            "fullWidth":true,
            "hintText":"Enter your email address",
            "floatingLabelText":"Email"
          },
          "default":"b@gmailung.com"
        },
        "validations":[{
          "type":"isEmail"
          }]
        },

      {
         "questionId":"images",
         "input":{
            "name":"images",
            "type":"FileUpload",
            "required":true,
            "props":{
              "componentConfig" : {
                "iconFiletypes": ['.jpg', '.png', '.gif'],
                "showFiletypeIcon": true,
                "postUrl": 'no-url'
              },
              "djsConfig" : {
                "addRemoveLinks": true,
                "acceptedFiles": "image/jpeg,image/png,image/gif",
                "autoProcessQueue": false
              }
            }
         }
      },
      {
        "questionId" : "eligibility",
        "question" : "Eligibility",
        "input" : {
          "type" : "ArrayInput",
          "required" : true,
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
                    "required" : true,
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
                    "required":true,
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
