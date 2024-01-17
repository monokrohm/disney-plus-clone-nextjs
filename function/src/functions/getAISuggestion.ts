// https://disney-clone-nextjs.azurewebsites.net/api/getaisuggestion?term=

import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

import OpenAI from "openai";

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function getAISuggestion(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const term = request.query.get("term")

    const completion = await openAI.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:[{
            role: "system",
            content: `You are a video on demand assistant working for streaming services such as Netflix, Disney Plus
            & Amazon Prime Video. Your job is to provide recommendations based on the videos the user specifies. Provide
            a quirky breakdown of what the user should watch next! You should only list the names of the films after the
            introduction. Keep the response short, to the point and fun! Always list at least 3 films as suggestions.
            If the user mentions a genre, you should provide recommendations based on that genre.`
        }, {
            role: "user",
            content: `I like ${term}`
        }]
    })

    return { body: completion.choices[0].message.content || "No recommendations..." };
};

app.http('getAISuggestion', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getAISuggestion
});
