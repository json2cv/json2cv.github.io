let templateSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "handlers": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },
          {
            "type": "string"
          }
        ]
      },
      "introduction": {
        "type": "string"
      },
      "sections": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "title": {
                "type": "string"
              },
              "values": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "title": {
                        "type": "string"
                      },
                      "entity": {
                        "type": "string"
                      },
                      "period": {
                        "type": "string"
                      },
                      "highlights": {
                        "type": "array",
                        "items": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "string"
                          },
                          {
                            "type": "string"
                          }
                        ]
                      }
                    },
                    "required": [
                      "title"
                    ]
                  }
                ]
              }
            },
            "required": [
              "title",
              "values"
            ]
          }
        ]
      }
    },
    "required": [
      "firstName",
      "lastName",
      "handlers",
      "introduction",
      "sections"
    ]
  }