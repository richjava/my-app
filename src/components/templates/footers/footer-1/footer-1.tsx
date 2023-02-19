import { DataView } from "@/components/shared/data-view/data-view";
  import Links from "@/components/shared/links/links";
  import styles from "./Footer1.module.css";
  
  export default function Footer1({ content }: any) {
    if (!content) return <></>;
    return (
      <section id="footer-1" className="template">
        <div className={styles.attribution}>
          Built by Me
        </div>
      </section>
    );
  }