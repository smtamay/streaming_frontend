"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          <ApolloWrapper>
            <CssBaseline />
            {children}
          </ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
