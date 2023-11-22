const NotificationField = ({ title, description, index }) => {
  return (
    <>
      <div className="notification_field flex items-center my-6 w-[480px] justify-between">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-[14px]">{description}</p>
        </div>
        <input type="checkbox" />
      </div>
      {index !== 2 ? <hr /> : null}
    </>
  );
};

export default NotificationField;
