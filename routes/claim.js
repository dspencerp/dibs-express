var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  console.log("Request: ", req);
  let response = {
    text: `\`${req.body.text}\` is currently being used by <@${req.body.user_id}>`,
    attachments: [
      {
        text: "Would you like to ask if they're still using it?",
        callback_id: "in_use",
        color: "#764ba2",
        attachment_type: "default",
        actions: [
          {
            name: "yes",
            text: "Yes",
            type: "button",
            value: "yes",
          },
          {
            name: "no",
            text: "No",
            type: "button",
            value: "no",
          },
        ],
      },
    ],
  };
  res.send(response);
});

module.exports = router;
