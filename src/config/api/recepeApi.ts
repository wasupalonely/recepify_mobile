import axios from 'axios';

export const recepeApi = axios.create({
  baseURL:
    'https://cb3d-2800-484-9f9d-db00-391f-b062-6e44-f81e.ngrok-free.app/api/v1',
});
