import { Client } from "pg";

const client = new Client({
  connectionString: process.env.NETLIFY_DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

let connected = false;

export async function handler(event) {
  try {
    if (!connected) {
      await client.connect();
      connected = true;
    }

    const data = JSON.parse(event.body);

    // 1️⃣ сохраняем в БД
    await client.query(
      `insert into leads (
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
      ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [
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
    );

    // 2️⃣ отправляем TG уведомление
    const text = `
🆕 *Новая заявка*

👤 Клиент: ${data.clientName}
📞 Телефон: ${data.clientPhone}
💬 Telegram: ${data.clientTelegram || "—"}
📦 Товар: ${data.productOnAvito}
💰 Чек: ${data.averageCheck}
📊 Опыт: ${data.avitoExperience}
⚠️ Запрос: ${data.currentDifficulty}
📈 Лидов/мес: ${data.leadsPerMonth}
📅 Встреча: ${data.meetingDate}
    `;

    await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TG_CHAT_ID,
        text,
        parse_mode: "Markdown"
      })
    });

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
