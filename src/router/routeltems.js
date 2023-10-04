// 設定路由
export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/pages/rooms/Login.vue'),
  },
  {
    path: '/login/:id',
    name: 'login_id',
    component: () => import('@/pages/rooms/_id.vue'),
  },
];
