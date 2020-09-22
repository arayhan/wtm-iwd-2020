import {notification} from "antd";

export const hello = () => {
  return 'hello';
};

export const openNotification = (title, description) => {
  notification.open({
    message: title,
    description: description,
    onClick: () => {
      notification.destroy();
    },
  });
};

export const getDateToday = () => {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const getTimeToday = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
