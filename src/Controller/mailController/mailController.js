{
  /*
   * author: Md . Abib Ahmed Dipto
   * date : 05-09-2024
   * description : this is the send mail function this file will take essential info from client like client email adress subject and then after processing . It will handover the email adress to the wanted email user  .
   * copyright : abib.web.dev@gmail.com
   */
}

// dependencies

// external dependencies

// internal dependencies
const { mailSender } = require("../../helpers/emailSender/emailsender.js");
const { apiError } = require("../../utils/apiError.js");
const { apiSuccess } = require("../../utils/apiSuccess.js");

const emailHandler = async (req, res) => {
  const { firstName, lastName, emailAdress, subject, body } = req.body;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const fullName = `${firstName} ${lastName}`;
  try {
    const isMailSend = await mailSender({
      name: fullName,
      emailAdress,
      subject,
      body,
    });

    if (!firstName) {
      return res
        .status(400)
        .json(
          new apiError(400, "bad request firstName is required", null, false)
        );
    }

    if (!lastName) {
      return res
        .status(400)
        .json(
          new apiError(400, "bad request lastName is required", null, false)
        );
    }

    if (!subject) {
      return res
        .status(400)
        .json(
          new apiError(400, "bad request subject is required", null, false)
        );
    }

    if (!emailRegex.test(emailAdress)) {
      return res
        .status(400)
        .json(
          new apiError(400, "bad request email adress is required", null, false)
        );
    }

    if (!body) {
      return res
        .status(400)
        .json(
          new apiError(400, "bad request message body is required", null, false)
        );
    }

    return res
      .status(200)
      .json(
        new apiSuccess(true, "succesfully send mail", 200, isMailSend, false)
    );
    
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(new apiError(500, "server side problem", null, false));
  }
};

module.exports = { emailHandler };
