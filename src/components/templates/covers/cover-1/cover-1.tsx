import { DataView } from "@/components/shared/data-view/data-view";
export default function Cover1({content}: any) {
  if (!content) return <></>;
  return (
    <section id="cover-1" className="template">
      <h1>{content.attributes.title}</h1>
    </section>
  );
}