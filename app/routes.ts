import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  route("docs/:lang?/:ref?", "pages/docs-layout.tsx", [
    index("pages/doc.tsx", { id: "docs-index" }),
    route("*", "pages/doc.tsx"),
  ]),
  ...(await flatRoutes({ rootDirectory: "./routes" })),
] satisfies RouteConfig;
