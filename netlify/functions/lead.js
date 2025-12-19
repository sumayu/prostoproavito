import fetch from "node-fetch";

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    // Убрана проверка секретного кода

    const text = `
🆕 Новая заявка с сайта

👤 Клиент: ${data.clientName}
📞 Телефон: ${data.clientPhone}
💬 TG: ${data.clientTelegram || "—"}
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
      }),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
}
