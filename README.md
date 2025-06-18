# mobileRickMorty

## Descrição do projeto

Este aplicativo móvel foi desenvolvido utilizando o framework Ionic com Angular para consumir dados da API pública "The Rick and Morty API". O app permite visualizar informações sobre personagens da série animada Rick and Morty, incluindo detalhes como espécie, status, origem e localização atual.

O projeto foi criado como avaliação para a disciplina de Desenvolvimento para Dispositivos Móveis e implementa as seguintes funcionalidades:
- Lista de personagens com busca
- Detalhes individuais de cada personagem
- Interface responsiva e intuitiva
- Navegação por tabs

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (ou yarn)
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (opcional)

## Como baixar

```bash
git clone [URL do repositório]
cd mobileRickMorty
npm install
ionic serve
```

Para executar em dispositivo móvel:
```bash
ionic capacitor add android
ionic capacitor run android
```

ou

```bash
ionic capacitor add ios
ionic capacitor run ios
```

## Contribuindo com o projeto

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Autor

Pedro Henrique Pereira Sales

## Licença

Este projeto está licenciado sob a licença Creative Commons Attribution 4.0 International. Veja o arquivo `LICENSE` para mais detalhes.

