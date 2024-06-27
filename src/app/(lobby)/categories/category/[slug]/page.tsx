import { categories } from "@/config/navigation";

export default function Page({
  params,
}: {
  params: { slug: string; title: string };
}) {
  const category = categories.find((cat) => cat.slug === params.slug);

  return (
    <div>
      {category && (
        <>
          <h2>{category.title}</h2>
          <p>{category.description}</p>
        </>
      )}
    </div>
  );
}
