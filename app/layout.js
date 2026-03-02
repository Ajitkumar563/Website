import "./globals.css";

export const metadata = {
  title: "Ajit Kumar | AI Automation Consultant",
  description: "AI-powered lead automation and CRM systems for businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}