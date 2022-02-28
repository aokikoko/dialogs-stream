const routers = [
  {
    name: "home",
    path: "/",
    component: () => import("../pages/home/index.vue"),
    children: [
      {
        name: "content1",
        path: "content1",
        component: () => import("../pages/content/index.vue"),
      },
      {
        name: "content2",
        path: "content2",
        component: () => import("../pages/content1/index.vue"),
      },
    ],
  },
];

export default routers;
