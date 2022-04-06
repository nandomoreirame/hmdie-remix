import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { GlobalStyle } from './styles/global';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Calcule quantos dinheiros você tem para receber com base em suas horas trabalhadas',
  description:
    'Uma calculadora que faz o cálculo base o seu montante em Reais (R$) com base em suas horas trabalhadas no seu aplicativo de tracking, toggl, clockify, etc.',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
    },
    {
      rel: 'preconnect',
      href: 'https://unpkg.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;800&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css',
    },
  ];
};

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
        <GlobalStyle />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
