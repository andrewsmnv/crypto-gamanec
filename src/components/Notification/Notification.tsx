import classes from "./Notification.module.scss";

const Notification = (props: any) => {
  let specialClasses = "";

  if (props.status === "removed") {
    specialClasses = classes["notification_error"];
  }
  if (props.status === "success") {
    specialClasses = classes["notification_success"];
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
