import { F2E_axios } from '../F2E_axios';

export const FETCH_ROOM = {
  GetRooms: () => F2E_axios.get('/thef2e2019/stage6/rooms'),
  getSingleRoom: (data) => F2E_axios.get(`/thef2e2019/stage6/room/${data}`),
};
