import { Html, Head, Main, NextScript } from "next/document";
import {yekan} from '../utils/font'
export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className={yekan.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
