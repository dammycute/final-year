import NotificationField from "./NotificationField";

const details = [
  {
    title: "General Email notification",
    description: "When someone joins the team you get notified",
  },
  {
    title: "Email for every new user joining the team",
    description: "When someone joins the team you get notified",
  },
  {
    title: "Email for weekly report",
    description: "Every week you’ll get report for your account",
  },
];

const Notification = () => {
  const notification_fields = details.map((detail, index) => (
    <NotificationField
      key={Math.random * 10000}
      title={detail.title}
      description={detail.description}
      index={index}
    />
  ));
  return (
    <div className="notification_setting px-[41px] py-[39px]">
      <h2 className="font-bold text-xl mb-16">Notification Setting</h2>
      {notification_fields}
      <button
        type="submit"
        className="text-white bg-[#5570F1] rounded-md py-[12px] px-8 mt-28"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Notification;
