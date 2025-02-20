# Solana Projects Repository

This repository contains various Solana blockchain projects demonstrating different aspects of Solana development.

## Projects

### 1. Favorites App
A simple program demonstrating basic account management and state persistence on Solana. [View Details](./favorites/README.md)

## Getting Started

### Prerequisites
- [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools)
- [Rust](https://rustup.rs/)
- [Node.js](https://nodejs.org/)
- [Anchor](https://www.anchor-lang.com/docs/installation)

### Setup Local Environment

```bash
# Install Solana
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Anchor
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
avm install latest
avm use latest
```

## Structure

```
solana/
└──  favorites/           # Favorites management program
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Learning Resources

- [Solana Cookbook](https://solanacookbook.com/)
- [Solana Documentation](https://docs.solana.com/)
- [Anchor Book](https://book.anchor-lang.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details