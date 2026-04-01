import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./pages";

export const metadata = {
  title: "Austex Pharma",
  description: "Healthcare Web Application",
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
