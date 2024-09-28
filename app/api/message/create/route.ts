import { NextResponse } from "next/server";
import OpenAI from "openai";
import { json } from "stream/consumers";


export async function POST(req: Request) {
    const { message, threadId } = await req.json();

    console.log("from user", {message, threadId});

    if(!threadId || !message){
        return NextResponse.json(
            { error: "threadId and message are required", success: false},
            { status: 400}
        )
    }
    const openai = new OpenAI();

    try{
        const threadMessage = await openai.beta.threads.messages.create(threadId, {
            role: 'user',
            content: message
        })
        console.log("created thread message", threadMessage);
        return NextResponse.json(
            { message: threadMessage, success: true},
            { status: 201}
        )
    }
    catch(error){
        console.error("Error creating thread message", error);
        return NextResponse.json(
            { error: "Failed to create thread message", success: false},
            { status: 500}
        )
    }
}