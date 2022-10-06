import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Paper } from "../../typings";

const query = groq`
    *[_type == "paper"] 
`;

type Data = {
  papers: Paper[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const papers: Paper[] = await sanityClient.fetch(query);

  res.status(200).json({ papers });
}
