exports.sendEmail = async (option) => {
  if (!option.email) {
    throw new Error('Please provide email');
  }
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME || 'website Name'}" <${
      process.env.EMAIL_FROM
    }>`, // sender address
    to: option.email,
    subject: option.subject,
    html: option.message,
  };
  await transporter.sendMail(mailOptions);
};
