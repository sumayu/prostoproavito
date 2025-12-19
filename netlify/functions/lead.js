import { neon } from "@netlify/neon";

const sql = neon(); // автоматически использует NETLIFY_DATABASE_URL

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = await req.json();

    await sql`
      INSERT INTO leads (
        partner_contact,
        client_name,
        client_phone,
        client_telegram,
        product_on_avito,
        average_check,
        avito_experience,
        current_difficulty,
        leads_per_month,
        meeting_date
      ) VALUES (
        ${data.partnerContact},
        ${data.clientName},
        ${data.clientPhone},
        ${data.clientTelegram || null},
        ${data.productOnAvito},
        ${data.averageCheck},
        ${data.avitoExperience},
        ${data.currentDifficulty},
        ${data.leadsPerMonth},
        ${data.meetingDate}
      )
    `;

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "DB error" }),
      { status: 500 }
    );
  }
};
