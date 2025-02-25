import {
  ActionGetResponse,
  ActionPostRequest,
  ACTIONS_CORS_HEADERS,
} from "@solana/actions";
import { Connection, PublicKey } from "@solana/web3.js";

const IDL = require("@/../anchor/target/idl/voting.json");

export const OPTIONS = GET;

export async function GET(request: Request) {
    const actionMetadata: ActionGetResponse = {
        icon: "https://zestfulkitchen.com/wp-content/uploads/2021/09/Peanut-butter_hero_for-web-2.jpg",
        title: "Vote for your favorite type of Peanut Butter!",
        description: "Vote between crunchy and creamy peanut butter.",
        label: "Vote",
        links: {
            actions: [
                {
                    label: "Vote for Crunchy",
                    href: "/api/vote?candidate=crunchy",
                },
                {
                    label: "Vote for Creamy",
                    href: "/api/vote?candidate=creamy",
                },
            ],
        },
    };
    return Response.json(actionMetadata, { headers: ACTIONS_CORS_HEADERS });
}

export async function POST(request: Request) {
    const url = new URL(request.url);
    const candidate = url.searchParams.get("candidate");

    if (candidate !== "crunchy" && candidate !== "creamy") {
        return new Response("Invalid candidate", {
            status: 400,
            headers: ACTIONS_CORS_HEADERS,
        });
    }

    const connection = new Connection("http://127.0.0.1:8899", "confirmed");
    const body: ActionPostRequest = await request.json();
    let voter;

    try {
        voter = new PublicKey(body.account);
    } catch (error) {
        return new Response("Invalid account", {
            status: 400,
            headers: ACTIONS_CORS_HEADERS,
        });
    }
}
