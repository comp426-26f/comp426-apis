import { NextRequest, NextResponse } from "next/server";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(req: NextRequest, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await res.json();

    await delay(Math.floor(Math.random() * 5001));

    return NextResponse.json(json);
}