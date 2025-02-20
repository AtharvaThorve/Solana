# Favorites - Solana Program

A simple Solana program that allows users to store and manage their favorite number, color, and hobbies on-chain.

## Description

This program demonstrates basic Solana program development using the Anchor framework. Users can set their favorite:
- Number
- Color (up to 50 characters)
- Hobbies (up to 5 hobbies, each up to 50 characters)

## Technologies Used

- Solana
- Anchor Framework
- TypeScript
- Rust

## Prerequisites

- [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools)
- [Anchor](https://www.anchor-lang.com/docs/installation)
- [Node.js](https://nodejs.org/)
- [Rust](https://rustup.rs/)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd favorites
```

2. Install dependencies:

```bash
npm install
```

## Building

Build the Solana program:

```bash
anchor build
```

## Testing

Run the test suite:

```bash
anchor test
```

## Program Structure

- `favorites/programs/favorites/src/lib.rs`: Main program logic
- `favorites/tests/anchor.ts`: Integration tests
- `favorites/client/client.ts`: Client-side interaction example

## Usage

1. Start a local Solana validator:

```bash
solana-test-validator
```

2. Deploy the program:

```bash
anchor deploy
```

3. Run the client:

```bash
npm run client
```

## Account Structure

```rust
pub struct Favorites {
    pub number: u64,
    pub color: String,
    pub hobbies: Vec<String>,
}
```

## Features

- PDA (Program Derived Address) based account creation
- Account initialization with default values
- Update functionality for favorites data
- String and vector handling in Solana programs

## License

This project is licensed under the MIT License - see the LICENSE file for details
