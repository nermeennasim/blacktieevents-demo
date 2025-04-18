type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <div>
      <h1>Message from {name}</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
    </div>
  );
};
