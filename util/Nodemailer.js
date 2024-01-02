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
      subject: 'Cramix Account Verification',
      text: `Hello,\n\nThank you for choosing Cramix - your last-minute exam preparation companion! To complete your account setup, please use the following one-time password (OTP):\n\nYour OTP: ${otp}\n\nAt Cramix, we understand the challenges of college life, and our mission is to provide you with a stress-free platform for last-minute preparation. Pass your exams without worries and enjoy the journey of learning!\n\nIf you encounter any issues or have questions, feel free to contact our support team.\n\nBest regards,\nThe Cramix Team`,
    };
    
    await transporter.sendMail(mailOptions);
  };
export default sendOTPEmail;