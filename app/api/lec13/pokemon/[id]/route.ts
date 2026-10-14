import { NextRequest, NextResponse } from "next/server";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(req: NextRequest, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    await delay(Math.floor(Math.random() * 5001));

    const json = await res.json();
    return NextResponse.json(json, {status: res.status});
}