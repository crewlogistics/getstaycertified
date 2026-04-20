// Netlify triggers this function automatically on every form submission
// Function name "submission-created" is a Netlify convention

// Bot 1: @BrettHoganBot (Donna)
const BOT1_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const BOT1_CHAT_ID = process.env.TELEGRAM_CHAT_ID

// Bot 2: @CrewWebLeads_bot
const BOT2_TOKEN = process.env.TELEGRAM_BOT2_TOKEN
const BOT2_CHAT_ID = process.env.TELEGRAM_BOT2_CHAT_ID

export default async (req) => {
  try {
    const body = await req.json()
    const { form_name, data } = body.payload || body

    if (form_name !== 'contact') return new Response('Ignored', { status: 200 })

    const name = `${data.firstName || ''} ${data.lastName || ''}`.trim()
    const message = [
      `📩 *New Contact Form Submission*`,
      `*getstaycertified.com*`,
      ``,
      `*Name:* ${name}`,
      `*Email:* ${data.email || 'N/A'}`,
      `*Company:* ${data.company || 'N/A'}`,
      `*Position:* ${data.position || 'N/A'}`,
      `*Phone:* ${data.phone || 'N/A'}`,
      `*Employees:* ${data.employees || 'N/A'}`,
      ``,
      data.message ? `*Message:*\n${data.message}` : '',
      ``,
      `🔗 [View in Netlify](https://app.netlify.com/projects/getstaycertified/forms)`,
    ].filter(Boolean).join('\n')

    // Send to both bots in parallel
    const sends = []

    if (BOT1_TOKEN && BOT1_CHAT_ID) {
      sends.push(
        fetch(`https://api.telegram.org/bot${BOT1_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: BOT1_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
            disable_web_page_preview: true,
          }),
        })
      )
    }

    if (BOT2_TOKEN && BOT2_CHAT_ID) {
      sends.push(
        fetch(`https://api.telegram.org/bot${BOT2_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: BOT2_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
            disable_web_page_preview: true,
          }),
        })
      )
    }

    await Promise.all(sends)

    return new Response('OK', { status: 200 })
  } catch (err) {
    console.error('Telegram notification failed:', err)
    return new Response('Error', { status: 500 })
  }
}
