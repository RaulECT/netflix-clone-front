import { notification } from 'antd';

function useNotification({ type, title, message }) {
  notification[type]({
    message: title,
    description: message,
  });
};

export default useNotification