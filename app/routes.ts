import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx", [route("team", "routes/about-team.tsx")]),

  route("product", "routes/product/index.tsx"),
  route("product/:id", "routes/product/detail.tsx"),
] satisfies RouteConfig;
