import nodemailer from 'nodemailer';

const sendOTPEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'official.cramix@gmail.com',
        pass: 'abju cdmr ohru pqlq',
      },
    });
  
    const mailOptions = {
      from: 'official.cramix@gmail.com',
      to: email,
      subject: 'OTP for Email Verification',
      text: `Your OTP is: ${otp}`,
    };
  
    await transporter.sendMail(mailOptions);
  };
export default sendOTPEmail;