const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/ask', (req, res) => {
  const query = req.body.query.toLowerCase();
  let response;

  if (query.includes('women') || query.includes('ladkiyon') || query.includes('mahila')) {
    response = "For women-related laws, you can visit the National Commission for Women website or complain via 181 Women Helpline. Laws include Domestic Violence Act, Sexual Harassment at Workplace, etc.";
  } else if (query.includes('challan') || query.includes('road') || query.includes('traffic') || query.includes('police') || query.includes('bribe') || query.includes('rash driving')) {
    response = "If you face issues like overcharging or bribe during challan, report on the official traffic police website or call 1031 in many states. You can also complain via the state traffic police portal.";
  } else if (query.includes('women') && query.includes('safety') && query.includes('law')) {
    response = "Article 14: Equality Before Law<br>Article 15(1): Prohibition of Discrimination<br>Article 15(3): Positive Discrimination<br>Article 21: Protection of Life and Personal Liberty<br><br>The Protection of Women from Domestic Violence Act, 2005<br>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013<br>The Dowry Prohibition Act, 1961<br>The Indecent Representation of Women (Prohibition) Act, 1986<br>The Commission of Sati (Prevention) Act, 1987";
  } else if (query.includes('rape')) {
    response = "Section 375 & 376: Rape<br>Defines rape and its punishments.<br>Section 376A-E: Enhanced punishments for aggravated forms like gang rape, rape of minors, etc.";
  } else if (query.includes('sexual harassment')) {
    response = "Section 354A: Sexual Harassment<br>Section 354B: Assault with intent to disrobe<br>Section 354C: Voyeurism<br>Section 354D: Stalking";
  } else if (query.includes('acid attack')) {
    response = "Section 326A: Punishment for acid attack<br>Section 326B: Punishment for attempting acid attack";
  } else if (query.includes('domestic violence')) {
    response = "Section 498A: Cruelty by husband or relatives<br>Includes physical/mental abuse and dowry-related harassment.";
  } else if (query.includes('dowry')) {
    response = "Section 304B: Dowry Death<br>If a woman dies under suspicious circumstances within 7 years of marriage due to dowry harassment.";
  } else if (query.includes('wrong') && query.includes('words') && (query.includes('women') || query.includes('girl'))) {
    response = "Section 509: Insulting modesty of a woman<br>Punishes words, gestures, or acts intended to insult a woman.";
  } else if (query.includes('women') && (query.includes('kidnapping') || query.includes('abduction'))) {
    response = "Sections 363–373: Kidnapping/Abduction<br>Includes kidnapping women for forced marriage, sexual exploitation, etc.";
  } else if (query.includes('zero fir')) {
    response = "Zero FIR: You can register a case at any police station regardless of jurisdiction. They must register it and transfer accordingly.";
  } else if (query.includes('statement') && query.includes('rape')) {
    response = "Rape victim’s statement should be recorded by a female officer at her chosen place. Identity protection under Section 228A IPC.";
  } else {
    response = "This is not related to this";
  }
res.setHeader('Content-Type', 'text/html');
  res.json({ response });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
