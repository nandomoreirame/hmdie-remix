import * as React from 'react';
import { FooterWrapper } from '~/styles';

export function Footer(): React.ReactElement {
  return (
    <FooterWrapper>
      <p>
        Desenvolvido em <address>Curitiba-PR, Brasil.</address>
      </p>
      <p>
        Com ♡ por{' '}
        <a href="https://nandomoreira.dev/?ref=hmdie-remix" target="_blank" rel="noreferrer">
          Fernando Moreira
        </a>
        . Veja o{' '}
        <a href="https://github.com/nandomoreirame/hmdie-remix/" target="_blank" rel="noreferrer">
          código-fonte.
        </a>
      </p>
    </FooterWrapper>
  );
}
