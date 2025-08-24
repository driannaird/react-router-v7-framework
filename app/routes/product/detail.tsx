import type { Route } from "./+types/detail";

export default function ProductDetailPage({ params }: Route.ComponentProps) {
  return <div>Product Detail Page {params.id}</div>;
}
