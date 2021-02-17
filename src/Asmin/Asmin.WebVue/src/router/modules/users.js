import Layout from "@/layout/index.vue";
const users = {
  path: "/Users",
  component: Layout,
  children: [
    {
      path: "",
      name: "Users",
      component: () => import("@/views/Users/List.vue"),
    },
  ],
};

export default users;
