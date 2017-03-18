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
      {
        "questionId":"email",
        "input":{
          "name":"email",
          "type":"materialTextField",
          "required":true,
          "props":{
            "valueType":"array",
            "fullWidth":true,
            "hintText":"Enter your email address",
            "floatingLabelText":"Email"
          }
        },
        "validations":[{
          "type":"isEmail"
          }]
        },
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
        //       "simpleValue":true,
        //       "ensureArray":true
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
                    "questionId":"helperTypes",
                    "question":"",
                    "input":{
                      "type":"MultiSelect",
                      "placeholder":"All. Or select specific helper types123.",
                      "props":{
                        "multi":true,
                        "simpleValue":true,
                        "creatable":true
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
                      "placeholder" : "Email Address1"
                    }
                  },
                  {
                    "questionId": "FeesAndCharges",
                    "input": {
                      "name": "FeesAndCharges",
                      "type": "ArrayInput",
                      "required": false,
                      "props": {
                        "fullWidth": true,
                        "elements": {
                          "questions": [
                            {
                              "questionId": "ProductSubType",
                              "input": {
                                "type": "MaterialSelectField",
                                "props": {
                                  "fullWidth": true,
                                  "hintText": "Product Sub Type",
                                  "floatingLabelText": "Product Sub Type"
                                },
                                "options": [
                                  {
                                    "text": "Future Multiple Terms",
                                    "value": "FutureMultipleTerms"
                                  },
                                  {
                                    "text": "Promotional",
                                    "value": "Promotional"
                                  },
                                  {
                                    "text": "Regular",
                                    "value": "Regular"
                                  }
                                ]
                              }
                            },
                            {
                              "questionId": "Fees",
                              "input": {
                                "type": "ObjectInput",
                                "props": {
                                  "elements": {
                                    "questions": [
                                      {
                                        "questionId": "StartPromotionOrFutureTerms",
                                        "input": {
                                          "type": "MaterialDatePicker",
                                          "props": {
                                            "fullWidth": true,
                                            "hintText": "Start Promotion Or Future Terms"
                                          }
                                        },
                                        "validations": [
                                          {
                                            "type": "isDate"
                                          }
                                        ]
                                      },
                                      {
                                        "questionId": "StopPromotionOrFutureTerms",
                                        "input": {
                                          "type": "MaterialDatePicker",
                                          "props": {
                                            "fullWidth": true,
                                            "hintText": "Stop Promotion Or Future Terms"
                                          }
                                        },
                                        "validations": [
                                          {
                                            "type": "isDate"
                                          }
                                        ]
                                      },
                                      {
                                        "questionId": "LengthPromotionalInDays",
                                        "input": {
                                          "name": "LengthPromotionalInDays",
                                          "type": "materialTextField",
                                          "required": false,
                                          "props": {
                                            "fullWidth": true,
                                            "hintText": "Length Promotional In Days",
                                            "floatingLabelText": "Length Promotional In Days"
                                          }
                                        }
                                      },
                                      {
                                        "questionId": "DateOfChange",
                                        "input": {
                                          "type": "MaterialDatePicker",
                                          "props": {
                                            "fullWidth": true,
                                            "hintText": "Date of Change"
                                          }
                                        },
                                        "validations": [
                                          {
                                            "type": "isDate"
                                          }
                                        ]
                                      },
                                      {
                                        "questionId":"FeeLowerTier",
                                        "input":{
                                          "name":"FeeLowerTier",
                                          "type":"materialTextField",
                                          "required":true,
                                          "props":{
                                            "fullWidth":true,
                                            "type":"number",
                                            "min":0,
                                            "hintText":"Lower occurrence / range boundary",
                                            "floatingLabelText":"Fee Lower Tier"
                                          }
                                        },
                                        "validations" : [{
                                          "type" : "isNumeric"
                                          }]
                                        },
                                        {
                                          "questionId":"FeeHigherTier",
                                          "input":{
                                            "name":"FeeHigherTier",
                                            "type":"materialTextField",
                                            "required":true,
                                            "props":{
                                              "fullWidth":true,
                                              "type":"number",
                                              "min":0,
                                              "hintText":"Higher occurrence / range boundary",
                                              "floatingLabelText":"Fee Higher Tier"
                                            }
                                          },
                                          "validations" : [{
                                            "type" : "isNumeric"
                                            }]
                                          },
                                          {
                                            "questionId":"FeeDetails",
                                            "input":{
                                              "name":"FeeDetails",
                                              "type":"ArrayInput",
                                              "props": {
                                                "fullWidth": true,
                                                "elements": {
                                                  "questions": [
                                                    {
                                                      "questionId": "FeeSubType",
                                                      "input": {
                                                        "type": "MaterialSelectField",
                                                        "props": {
                                                          "fullWidth": true,
                                                          "hintText": "Fee Sub Type",
                                                          "floatingLabelText": "Fee Sub Type"
                                                        },
                                                        "options": [
                                                          {
                                                            "text": "Future Multiple Terms",
                                                            "value": "FutureMultipleTerms"
                                                          },
                                                          {
                                                            "text": "Promotional",
                                                            "value": "Promotional"
                                                          },
                                                          {
                                                            "text": "Regular",
                                                            "value": "Regular"
                                                          }
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      "questionId": "FeeDetail",
                                                      "input": {
                                                        "type": "ObjectInput",
                                                        "props": {
                                                          "elements": {
                                                            "questions": [
                                                              {
                                                                "questionId": "FeeType",
                                                                "input": {
                                                                  "type": "MaterialSelectField",
                                                                  "props": {
                                                                    "fullWidth": true,
                                                                    "hintText": "Fee Type",
                                                                    "floatingLabelText": "Fee Type"
                                                                  },
                                                                  "options": [
                                                                    {
                                                                      "text": "ATM Donation",
                                                                      "value": "ATMDonation"
                                                                    },
                                                                    {
                                                                      "text": "ATM Depos ATM PaidIn",
                                                                      "value": "ATMDeposATMPaidIn"
                                                                    },
                                                                    {
                                                                      "text": "Report Cert Balance",
                                                                      "value": "ReportCertBalance"
                                                                    }
                                                                  ]
                                                                }
                                                              },
                                                              {
                                                                "questionId": "Other",
                                                                "input": {
                                                                  "name": "Other",
                                                                  "type": "materialTextField",
                                                                  "required": false,
                                                                  "props": {
                                                                    "fullWidth": true,
                                                                    "hintText": "Describe other fee type.",
                                                                    "floatingLabelText": "Other"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "questionId": "StartPromotionOrFutureTerms",
                                                                "input": {
                                                                  "type": "MaterialDatePicker",
                                                                  "props": {
                                                                    "fullWidth": true,
                                                                    "hintText": "Start Promotion Or Future Terms"
                                                                  }
                                                                },
                                                                "validations": [
                                                                  {
                                                                    "type": "isDate"
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "questionId": "StopPromotionOrFutureTerms",
                                                                "input": {
                                                                  "type": "MaterialDatePicker",
                                                                  "props": {
                                                                    "fullWidth": true,
                                                                    "hintText": "Stop Promotion Or Future Terms"
                                                                  }
                                                                },
                                                                "validations": [
                                                                  {
                                                                    "type": "isDate"
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "questionId": "LengthPromotionalInDays",
                                                                "input": {
                                                                  "name": "LengthPromotionalInDays",
                                                                  "type": "materialTextField",
                                                                  "required": false,
                                                                  "props": {
                                                                    "fullWidth": true,
                                                                    "hintText": "Length Promotional In Days",
                                                                    "floatingLabelText": "Length Promotional In Days"
                                                                  }
                                                                }
                                                              },
                                                              {
                                                                "questionId": "DateOfChange",
                                                                "input": {
                                                                  "type": "MaterialDatePicker",
                                                                  "props": {
                                                                    "fullWidth": true,
                                                                    "hintText": "Date of Change"
                                                                  }
                                                                },
                                                                "validations": [
                                                                  {
                                                                    "type": "isDate"
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "questionId": "FeeSubDetails",
                                                                "input": {
                                                                  "type": "ObjectInput",
                                                                  "props": {
                                                                    "elements": {
                                                                      "questions": [
                                                                        {
                                                                          "questionId": "FeeFrequency",
                                                                          "input": {
                                                                            "type": "MaterialSelectField",
                                                                            "props": {
                                                                              "fullWidth": true,
                                                                              "hintText": "Triggering frequency of the fee.",
                                                                              "floatingLabelText": "Fee Frequency"
                                                                            },
                                                                            "options": [
                                                                              {
                                                                                "text": "AcademicTerm",
                                                                                "value": "AcademicTerm"
                                                                              },
                                                                              {
                                                                                "text": "AccountClosing",
                                                                                "value": "AccountClosing"
                                                                              },
                                                                              {
                                                                                "text": "AccountOpening",
                                                                                "value": "AccountOpening"
                                                                              },
                                                                              {
                                                                                "text": "AtTimeOfLoanRepayment",
                                                                                "value": "AtTimeOfLoanRepayment"
                                                                              },
                                                                              {
                                                                                "text": "ChargingPeriod",
                                                                                "value": "ChargingPeriod"
                                                                              },
                                                                              {
                                                                                "text": "Daily",
                                                                                "value": "Daily"
                                                                              }
                                                                            ]
                                                                          }
                                                                        },
                                                                        {
                                                                          "questionId": "FeeAmount",
                                                                          "input": {
                                                                            "name": "FeeAmount",
                                                                            "type": "materialTextField",
                                                                            "required": false,
                                                                            "props": {
                                                                              "fullWidth": true,
                                                                              "hintText": "Fee Amount",
                                                                              "floatingLabelText": "Fee Amount"
                                                                            }
                                                                          }
                                                                        },
                                                                        {
                                                                          "questionId": "FeeMin",
                                                                          "input": {
                                                                            "name": "FeeMin",
                                                                            "type": "materialTextField",
                                                                            "required": false,
                                                                            "props": {
                                                                              "fullWidth": true,
                                                                              "hintText": "FeeMin",
                                                                              "floatingLabelText": "FeeMin"
                                                                            }
                                                                          }
                                                                        },
                                                                        {
                                                                          "questionId": "FeeMax",
                                                                          "input": {
                                                                            "name": "FeeMax",
                                                                            "type": "materialTextField",
                                                                            "required": false,
                                                                            "props": {
                                                                              "fullWidth": true,
                                                                              "hintText": "FeeMax",
                                                                              "floatingLabelText": "FeeMax"
                                                                            }
                                                                          }
                                                                        },
                                                                        {
                                                                          "questionId": "FeeRate",
                                                                          "input": {
                                                                            "name": "FeeRate",
                                                                            "type": "materialTextField",
                                                                            "required": false,
                                                                            "props": {
                                                                              "fullWidth": true,
                                                                              "hintText": "FeeRate",
                                                                              "floatingLabelText": "FeeRate"
                                                                            }
                                                                          }
                                                                        },
                                                                        {
                                                                          "questionId": "Negotiable",
                                                                          "question": "Is Negotiable?",
                                                                          "input": {
                                                                            "type": "radioOptionsInput",
                                                                            "default": "yes",
                                                                            "options": [
                                                                              {
                                                                                "text": "Yes",
                                                                                "value": "true",
                                                                                "validations": [
                                                                                  {
                                                                                    "type": "isLength",
                                                                                    "params": [
                                                                                      1
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                "text": "No",
                                                                                "value": "false"
                                                                              }
                                                                            ]
                                                                          }
                                                                        },
                                                                        {
                                                                          "questionId": "RepresentativeRate",
                                                                          "input": {
                                                                            "name": "RepresentativeRate",
                                                                            "type": "materialTextField",
                                                                            "required": false,
                                                                            "props": {
                                                                              "fullWidth": true,
                                                                              "hintText": "RepresentativeRate",
                                                                              "floatingLabelText": "RepresentativeRate"
                                                                            }
                                                                          }
                                                                        },
                                                                        {
                                                                          "questionId":"FeeLowerTier",
                                                                          "input":{
                                                                            "name":"FeeLowerTier",
                                                                            "type":"materialTextField",
                                                                            "required":true,
                                                                            "props":{
                                                                              "fullWidth":true,
                                                                              "type":"number",
                                                                              "min":0,
                                                                              "hintText":"Lower occurrence / range boundary",
                                                                              "floatingLabelText":"Fee Lower Tier"
                                                                            }
                                                                          },
                                                                          "validations" : [{
                                                                            "type" : "isNumeric"
                                                                            }]
                                                                          },
                                                                          {
                                                                            "questionId":"FeeHigherTier",
                                                                            "input":{
                                                                              "name":"FeeHigherTier",
                                                                              "type":"materialTextField",
                                                                              "required":true,
                                                                              "props":{
                                                                                "fullWidth":true,
                                                                                "type":"number",
                                                                                "min":0,
                                                                                "hintText":"Higher occurrence / range boundary",
                                                                                "floatingLabelText":"Fee Higher Tier"
                                                                              }
                                                                            },
                                                                            "validations" : [{
                                                                              "type" : "isNumeric"
                                                                              }]
                                                                            },
                                                                            {
                                                                              "questionId": "FeesAndChargesNotes",
                                                                              "input": {
                                                                                "name": "FeesAndChargesNotes",
                                                                                "type": "materialTextField",
                                                                                "required": false,
                                                                                "props": {
                                                                                  "fullWidth": true,
                                                                                  "hintText": "FeesAndChargesNotes",
                                                                                  "floatingLabelText": "FeesAndChargesNotes"
                                                                                }
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
                                    }
                                  ]
                                }
                              }
                            }
                          }

                  // {
                  //   "questionId" : "subfeature",
                  //   "question" : "SubFeature",
                  //   "input" : {
                  //     "type" : "ObjectInput",
                  //     "props":{
                  //       "description":"Please add eligibility criteria",
                  //       "elements":{
                  //         "questions":[
                  //           {
                  //             "questionId" : "Nestedfield11",
                  //             "question" : "Nested field 11",
                  //             "input" : {
                  //               "type" : "materialTextField",
                  //               "placeholder" : "Email Address18",
                  //               "default" : "abhisekpaul@gmail.com11"
                  //             }
                  //           },
                  //           {
                  //             "questionId" : "Nestedfield12",
                  //             "question" : "Nested field 12",
                  //             "input" : {
                  //               "type" : "materialTextField",
                  //               "placeholder" : "Email Address81",
                  //               "default" : "abhisekpaul@gmail.com12"
                  //             }
                  //           }
                  //         ]
                  //       }
                  //     }
                  //
                  //   }
                  // }
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
      // {
      //   "questionId" : "eligibility",
      //   "question" : "Eligibility",
      //   "input" : {
      //     "type" : "ArrayInput",
      //     "props":{
      //       "description":"Please add eligibility criteria",
      //       "elements":{
      //         "questions":[
      //           {
      //             "questionId" : "email",
      //             "question" : "Email Address",
      //             "input" : {
      //               "type" : "materialTextField",
      //               "placeholder" : "Email Address",
      //               "default" : "abhisekpaul@gmail.com"
      //             },
      //             "validations" : [{
      //               "type" : "isEmail"
      //             }]
      //           },
      //           {
      //             "questionId":"description",
      //             "input":{
      //               "name":"description",
      //               "type":"materialTextField",
      //               "props":{
      //                 "fullWidth":true,
      //                 "multiLine":true,
      //                 "rows":6,
      //                 "hintText":"Enter your job requirements",
      //                 "floatingLabelText":"Job Requirements"
      //               }
      //             },
      //             "validations":[
      //               {
      //                 "type":"isLength",
      //                 "params":[
      //                   25
      //                 ]
      //               }
      //             ]
      //           }
      //         ]
      //       }
      //     }
      //
      //   },
      //   "validations":[
      //     {
      //       "type":"isLength",
      //       "params":[
      //         1
      //       ]
      //     }
      //   ]
      // }
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
