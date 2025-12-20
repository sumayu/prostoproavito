export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    const text = `
🆕 Новая заявка с сайта

👤 Клиент: ${data.clientName}
📞 Телефон: ${data.clientPhone}
💬 TG: ${data.clientTelegram || "—"}
🤝 Партнёр: ${data.partnerContact}
📦 Товар: ${data.productOnAvito}
💰 Чек: ${data.averageCheck}
📊 Опыт: ${data.avitoExperience}
⚠️ Запрос: ${data.currentDifficulty}
📈 Лидов/мес: ${data.leadsPerMonth}
📅 Встреча: ${data.meetingDate}
`;

    // 🔹 Telegram
    await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TG_CHAT_ID,
        text
      })
    });

    // 🔹 Neo / Postgres
    const res = await fetch(process.env.DATABASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEON_API_KEY}`
      },
      body: JSON.stringify({
        query: `
          insert into leads (
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
          ) values (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10
          )
        `,
        params: [
          data.partnerContact,
          data.clientName,
          data.clientPhone,
          data.clientTelegram,
          data.productOnAvito,
          data.averageCheck,
          data.avitoExperience,
          data.currentDifficulty,
          data.leadsPerMonth,
          data.meetingDate
        ]
      })
    });

    if (!res.ok) {
      throw new Error("DB insert failed");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    };

  } catch (err) {
    console.error("LEAD ERROR:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
}
