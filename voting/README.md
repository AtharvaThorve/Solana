# Voting - Solana Program

A Solana program that allows users to create and participate in polls on-chain.

## Description

This program demonstrates Solana program development using the Anchor framework. Users can:
- Create a poll with a unique ID, description, start time, and end time
- Vote on existing polls

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
cd voting
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
anchor test --skip-deploy --skip-local-validator
```

## Program Structure

- `voting/programs/voting/src/lib.rs`: Main program logic
- `voting/tests/anchor.ts`: Integration tests
- `voting/client/client.ts`: Client-side interaction example

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
pub struct Poll {
    pub poll_id: u64,
    pub description: String,
    pub poll_start: u64,
    pub poll_end: u64,
}
```

## Features

- PDA (Program Derived Address) based account creation
- Account initialization with default values
- Update functionality for poll data
- String and vector handling in Solana programs

## License

This project is licensed under the MIT License - see the LICENSE file for details