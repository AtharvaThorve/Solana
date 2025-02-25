import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { BankrunProvider, startAnchor } from "anchor-bankrun";
import { Voting } from "../target/types/voting";

const IDL = require("../target/idl/voting.json");

const votingAddress = new PublicKey(
    "coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF"
);

describe("voting", () => {
    let context;
    let provider;
    let votingProgram: anchor.Program<Voting>;

    beforeAll(async () => {
        context = await startAnchor(
            "",
            [{ name: "voting", programId: votingAddress }],
            []
        );

        provider = new BankrunProvider(context);

        votingProgram = new Program<Voting>(IDL, provider);
    });

    it("Initialize Poll", async () => {
        await votingProgram.methods
            .initializePoll(
                new anchor.BN(1),
                "What is your favorite type of peanut butter?",
                new anchor.BN(0),
                new anchor.BN(1840195777)
            )
            .rpc();

        const [pollAddress] = PublicKey.findProgramAddressSync(
            [new anchor.BN(1).toArrayLike(Buffer, "le", 8)],
            votingAddress
        );

        const poll = await votingProgram.account.poll.fetch(pollAddress);

        console.log(poll);

        expect(poll.pollId.toNumber()).toEqual(1);
        expect(poll.description).toEqual(
            "What is your favorite type of peanut butter?"
        );
        expect(poll.pollStart.toNumber()).toBeLessThan(poll.pollEnd.toNumber());
    });

    it("Initialize Candidate", async () => {
        await votingProgram.methods
            .initializeCandidate("Creamy", new anchor.BN(1))
            .rpc();

        await votingProgram.methods
            .initializeCandidate("Crunchy", new anchor.BN(1))
            .rpc();

        const [crunchyAddress] = PublicKey.findProgramAddressSync(
            [
                new anchor.BN(1).toArrayLike(Buffer, "le", 8),
                Buffer.from("Crunchy"),
            ],
            votingAddress
        );

        const [creamyAddress] = PublicKey.findProgramAddressSync(
            [
                new anchor.BN(1).toArrayLike(Buffer, "le", 8),
                Buffer.from("Creamy"),
            ],
            votingAddress
        );

        const crunchy = await votingProgram.account.candidate.fetch(
            crunchyAddress
        );
        const creamy = await votingProgram.account.candidate.fetch(
            creamyAddress
        );

        console.log(crunchy);
        console.log(creamy);

        expect(crunchy.candidateName).toEqual("Crunchy");
        expect(crunchy.candidateVotes.toNumber()).toEqual(0);

        expect(creamy.candidateName).toEqual("Creamy");
        expect(creamy.candidateVotes.toNumber()).toEqual(0);
    });

    it("Vote", async () => {});
});
