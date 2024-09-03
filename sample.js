const obj = {
    "swagger": "2.0",
    "host": "localhost:8000",
    "basePath": "/api/",
    "info": {
      "version": "1.0.0",
      "title": "Simple API",
      "description": "A simple API to learn how to write OpenAPI Specification"
    },
    "schemes": [
      "https",
      "http"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "securityDefinitions": {
      "oauth": {
        "tokenUrl": "http://auth.ibtspl.com/oauth2/",
        "flow": "password",
        "scopes": {
          "read": "read users",
          "write": "create users",
          "update": "update users",
          "delete": "delete users",
          "superuser": "super user permission"
        },
        "type": "oauth2"
      }
    },
    "definitions": {},
    "parameters": {
      "CreateLoginParameter": {
        "name": "login",
        "in": "body",
        "description": "User login",
        "schema": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password"
          ]
        }
      },
      "CreateSignUpParameter": {
        "name": "login",
        "in": "body",
        "description": "User Sign UP ",
        "schema": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "user_name": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "team_name": {
              "type": "string"
            },
            "contact_number": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password",
            "first_name",
            "last_name",
            "team_name",
            "Contact_number"
          ]
        }
      },
      "CreateUpdatePassword": {
        "name": "Update Password",
        "in": "body",
        "description": "Update User Password",
        "schema": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "confirm_password": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password",
            "confirm_password"
          ]
        }
      },
      "CreateCabinSlotDetails": {
        "name": "Cabin slot Details",
        "in": "body",
        "description": "Get cabin wise slot details",
        "schema": {
          "type": "object",
          "properties": {
            "cabin_id": {
              "type": "string"
            },
            "start_date": {
              "type": "string",
              "format": "date"
            },
            "end_date": {
              "type": "string",
              "format": "date"
            },
            "time_slot": {
              "type": "string",
              "format": "time"
            }
          },
          "required": [
            "CabinId",
            "start_date",
            "end_date",
            "time_slot"
          ]
        }
      },
      "createConfirmSlot": {
        "name": "Confirm Slot",
        "in": "body",
        "description": "Confirm_slot",
        "schema": {
          "type": "object",
          "properties": {
            "purpose": {
              "type": "string"
            },
            "start_date": {
              "type": "string",
              "format": "date"
            },
            "end_date": {
              "type": "string",
              "format": "date"
            },
            "time_slots": {
              "type": "array",
              "items": {
                "properties": {
                  "slots": {
                    "type": "string",
                    "format": "date-time"
                  }
                }
              }
            }
          },
          "required": [
            "user_id",
            "purpose",
            "start_date",
            "end_date",
            "time_slots"
          ]
        }
      },
      "createWhoBookedSlot": {
        "name": "Booked Slots",
        "in": "body",
        "description": "User who Booked slots",
        "schema": {
          "type": "object",
          "properties": {
            "cabin_id": {
              "type": "string"
            },
            "purpose": {
              "type": "string"
            },
            "slot_time": {
              "type": "string",
              "format": "time"
            },
            "start_date": {
              "type": "string",
              "format": "date"
            },
            "end_date": {
              "type": "string",
              "format": "date"
            }
          },
          "required": [
            "cabin_id",
            "purpose",
            "slot_time",
            "start_date",
            "end_date"
          ]
        }
      },
      "createProfileUpdate": {
        "name": "update profile",
        "in": "body",
        "description": "user Profile Updation",
        "schema": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "team_name": {
              "type": "string"
            },
            "contact_number": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "team_name",
            "contact_number"
          ]
        }
      }
    },
    "responses": {
      "CreateLogin": {
        "description": "User login Response",
        "schema": {
          "type": "object",
          "properties": {
            "token": {
              "type": "string"
            }
          },
          "required": [
            "token"
          ]
        }
      },
      "CreateProfileAPi": {
        "description": "GET Profile API",
        "schema": {
          "type": "object",
          "properties": {
            "user_id": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "team_name": {
              "type": "string"
            },
            "contact_number": {
              "type": "string"
            }
          },
          "required": [
            "user_id",
            "email",
            "first_name",
            "last_name",
            "team_name",
            "contact_number"
          ]
        }
      },
      "createUserSignUpResponse": {
        "description": "Create User signUp response",
        "schema": {
          "type": "object",
          "properties": {
            "token": {
              "type": "string"
            }
          },
          "required": [
            "token"
          ]
        }
      },
      "CreateUpdatePasswordResponse": {
        "description": "Password Updated Successfully"
      },
      "error": {
        "description": "Bad request",
        "schema": {
          "type": "object",
          "properties": {
            "error_code": {
              "type": "string"
            },
            "error_message": {
              "type": "string"
            }
          }
        }
      },
      "GetFloorWiseCabinDetailsResponse": {
        "description": "Successfully Retrived",
        "schema": {
          "type": "array",
          "items": {
            "properties": {
              "floor": {
                "type": "string"
              },
              "cabins": {
                "type": "array",
                "items": {
                  "properties": {
                    "cabin_id": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string",
                      "enum": [
                        "Conference",
                        "call Pod 3a",
                        "call pod 3b",
                        "call pod 3c",
                        "call pod 3e"
                      ]
                    },
                    "cabin_type": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    }
                  }
                }
              }
            },
            "required": [
              "floor",
              "cabins",
              "name",
              "type",
              "description"
            ]
          }
        }
      },
      "GetCabinWiseSlotDetailsResponse": {
        "description": "Get Cabin wise slot details",
        "schema": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "cabin_id": {
                "type": "string"
              },
              "time_slots": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "start_date": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "end_date": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "availability": {
                      "type": "boolean"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "GetUserBookedSlotsResponse": {
        "description": "Get User Details who booked slots",
        "schema": {
          "properties": {
            "user_id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "team_name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "contact_number": {
              "type": "string"
            }
          },
          "required": [
            "user_id",
            "name",
            "team_name",
            "email",
            "contact_number"
          ]
        }
      }
    },
    "paths": {
      "/user/accounts/login": {
        "get": {
          "summary": "User login and verification",
          "operationId": "user_login",
          "parameters": [
            {
              "$ref": "#/parameters/CreateLoginParameter"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/CreateLogin"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      },
      "/user/profile": {
        "get": {
          "summary": "Get User Details",
          "operationId": "Get_user",
          "responses": {
            "200": {
              "$ref": "#/responses/CreateProfileAPi"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      },
      "/user/accounts/signup": {
        "post": {
          "summary": "User accounts signUp",
          "operationId": "user_signup",
          "parameters": [
            {
              "$ref": "#/parameters/CreateSignUpParameter"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/createUserSignUpResponse"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      },
      "/user/accounts/update_password": {
        "post": {
          "summary": "Update User Password",
          "operationId": "update_user_password",
          "parameters": [
            {
              "$ref": "#/parameters/CreateUpdatePassword"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/CreateUpdatePasswordResponse"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      },
      "/get/cabin_details": {
        "get": {
          "summary": "Get floor wise cabin details",
          "operationId": "get_cabin_details",
          "responses": {
            "200": {
              "$ref": "#/responses/GetFloorWiseCabinDetailsResponse"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      },
      "/get/cabin/slots": {
        "get": {
          "summary": "Get Cabin wise slots",
          "operationId": "get_cabin_slots",
          "parameters": [
            {
              "$ref": "#/parameters/CreateCabinSlotDetails"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/GetCabinWiseSlotDetailsResponse"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      },
      "/confirm/slots": {
        "post": {
          "summary": "confirm slots",
          "operationId": "confirm_slots",
          "parameters": [
            {
              "$ref": "#/parameters/createConfirmSlot"
            }
          ],
          "responses": {
            "200": {
              "description": "Slots Booked successfully"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      },
      "/user/booked/slots": {
        "get": {
          "summary": "Get User who booked slots",
          "operationId": "user_booked_slots",
          "parameters": [
            {
              "$ref": "#/parameters/createWhoBookedSlot"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/responses/GetUserBookedSlotsResponse"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      },
      "/user/profile/update": {
        "post": {
          "summary": "Update the user Profile",
          "operationId": "update_the_user_profile",
          "parameters": [
            {
              "$ref": "#/parameters/createProfileUpdate"
            }
          ],
          "responses": {
            "200": {
              "description": "Profile Updated successfully"
            },
            "400": {
              "$ref": "#/responses/error"
            }
          }
        }
      }
    }
  }