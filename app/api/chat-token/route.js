import { generateUserToken } from "@/lib/actions";

export async function POST(req) {
  const { userId } = await req.json();
  if (!userId) return Response.json({ error: "Missing user ID" }, { status: 400 });

  const token = await generateUserToken(userId)

  return Response.json({ token });
}
