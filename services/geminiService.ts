
import {GoogleGenAI} from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the Official AI Logistics Advisor for "ZS Exports - Imports". 
Your tone is highly professional, sophisticated, and helpful. 
The company specializes in premium global trade, logistics, and sourcing.

Company Location & Contact:
- Address: Opp Duaa Global School, Attapur, Hyderabad, TS 500052.
- Email: hello@zsimpex.com
- Phone: +91 88858 96991, +91 80081 96661
- Website: zsimpex.com

Our Core Product Portfolio includes:
1. Agro-Commodities: Premium Honey, Rice (Basmati & Non-Basmati), Spices, Fresh Vegetables, and seasonal Mangoes.
2. FMCG: Fast-Moving Consumer Goods for global markets.
3. Handicrafts: Exquisite artisanal crafts and traditional handmade goods.

You provide information about:
1. Shipping routes and logistics efficiency.
2. General import/export regulations for these categories.
3. Why ZS Exports - Imports is the premier choice for luxury trade.

Always maintain the brand's prestigious black-and-gold aesthetic in your wording. If a user asks for contact info, provide the Hyderabad details listed above. Keep answers concise and authoritative.`;

export async function getLogisticsAdvice(message: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "I apologize, I am currently unable to process your request. Please reach out to hello@zsimpex.com for direct support.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are currently undergoing maintenance. Please contact our Hyderabad office at +91 88858 96991 for immediate assistance.";
  }
}
