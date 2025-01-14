import '@/styles/globals.css';
import "@/public/assets/css/plugins.css";
import "@/public/assets/css/custom.css";
import "@/public/assets/css/modalbox.css";
import "@/public/assets/css/main.css";
import State from "@/contexts/context";
import { PreLoader } from "@/components/layout/PreLoader";



export const metadata = {
  title: "Mathula Shanmugaratnam",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="google-site-verification" content="JMPQj5p4_AhcNoVk2wV0b5S3_1dLB8N9IAahKrmMd54" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Kristi&display=swap" rel="stylesheet" />

      </head>
      <body >
        <State>
          <PreLoader />
          {children}
        </State>
      </body>
    </html>
  );
}
