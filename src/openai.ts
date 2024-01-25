import OpenAI from "openai";

// OPENAI ZONE
export const openai = (apikey: string) =>
  new OpenAI({
    apiKey: apikey, // This is the default and can be omitted
    dangerouslyAllowBrowser: true, // This is to allow browser to run openai api
  });
