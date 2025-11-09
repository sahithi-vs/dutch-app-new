// Netlify Function: Google Cloud Text-to-Speech proxy
// Env required: GOOGLE_TTS_API_KEY

export async function handler(event) {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: 'Method Not Allowed'
    };
  }

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: 'Server missing GOOGLE_TTS_API_KEY'
    };
  }

  try {
    const { text, lang = 'nl-NL', voiceHint = 'female' } = JSON.parse(event.body || '{}');
    if (!text || typeof text !== 'string') {
      return { statusCode: 400, headers: corsHeaders(), body: 'Invalid text' };
    }

    // Map voice hint to Google TTS options
    const ssmlGender = (voiceHint || '').toLowerCase() === 'male' ? 'MALE' : 'FEMALE';

    const reqBody = {
      input: { text },
      voice: {
        languageCode: lang,
        ssmlGender
        // Optional: choose a specific Dutch voice name if you want
        // name: ssmlGender === 'MALE' ? 'nl-NL-Wavenet-B' : 'nl-NL-Wavenet-A'
      },
      audioConfig: { audioEncoding: 'MP3', speakingRate: 0.85 }
    };

    const resp = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}` , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody)
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return { statusCode: resp.status, headers: corsHeaders(), body: errText };
    }

    const data = await resp.json();
    // data.audioContent is base64
    return {
      statusCode: 200,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ audioContent: data.audioContent })
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: `TTS error: ${e.message}`
    };
  }
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  };
}


