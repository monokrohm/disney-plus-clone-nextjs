export async function GET(req: Request){
    const { searchParams} = new URL(req.url);
    const term = searchParams.get('term');

    const res = await fetch(`https://disney-clone-nextjs.azurewebsites.net/api/getaisuggestion?term=${term}`,{
        method: "GET",
        next: {
            revalidate: 60 * 60 * 24, // 24H
        }
    })
   
    const message = await res.text();

    return Response.json({message});
}