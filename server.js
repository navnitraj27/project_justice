const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/ask', (req, res) => {
  const query = req.body.query.toLowerCase();
  let response;

  // Women + Safety + Law
  if (query.includes('women') && query.includes('safety') && query.includes('law')) {
    response = "Article 14: Equality Before Law<br>\
Article 15(3): Special provisions for women<br>\
Article 21: Right to Life & Dignity<br><br>\
Protection of Women from Domestic Violence Act, 2005<br>\
Sexual Harassment at Workplace Act, 2013<br>\
Dowry Prohibition Act, 1961<br><br>\
<b>Major Steps to Take:</b><br>\
1. Call 181 or 1091 immediately if in danger.<br>\
2. File FIR (can file Zero FIR at any police station).<br>\
3. Seek free legal aid from District Legal Services Authority.<br>\
4. Preserve evidence (messages, photos, witnesses).<br>\
5. Approach Women Commission if police do not act.";

  }

  // Rape
  else if (query.includes('rape')) {
    response = "Section 375 & 376 IPC: Rape & punishment.<br>\
Section 376A–E: Enhanced punishments.<br>\
Section 228A IPC: Identity protection of victim.<br><br>\
<b>Major Steps to Take:</b><br>\
1. Immediately call 112 or 100.<br>\
2. Do not wash/change clothes (important for evidence).<br>\
3. File FIR (Zero FIR allowed).<br>\
4. Medical examination is free in government hospitals.<br>\
5. Request statement recording by female officer.";

  }

  // Sexual Harassment
  else if (query.includes('sexual harassment')) {
    response = "Section 354A IPC: Sexual Harassment.<br>\
Section 354D IPC: Stalking.<br>\
POSH Act 2013: Workplace harassment protection.<br><br>\
<b>Major Steps to Take:</b><br>\
1. Report to Internal Complaints Committee (ICC) at workplace.<br>\
2. File police complaint if serious.<br>\
3. Preserve chats, emails, call records.<br>\
4. Call Women Helpline 181.<br>\
5. Seek support from trusted family/legal advisor.";

  }

  // Acid Attack
  else if (query.includes('acid attack')) {
    response = "Section 326A IPC: Acid attack punishment.<br>\
Section 326B IPC: Attempt to throw acid.<br>\
Free medical treatment mandatory.<br><br>\
<b>Major Steps to Take:</b><br>\
1. Wash affected area with clean water immediately.<br>\
2. Call emergency services (112).<br>\
3. File FIR immediately.<br>\
4. Seek compensation under Victim Compensation Scheme.<br>\
5. Preserve evidence and identify attacker.";

  }

  // Domestic Violence
  else if (query.includes('domestic violence')) {
    response = "Section 498A IPC: Cruelty by husband/relatives.<br>\
Domestic Violence Act, 2005 protects physical & mental abuse.<br><br>\
<b>Major Steps to Take:</b><br>\
1. Call 181 Women Helpline.<br>\
2. File FIR or complaint to Protection Officer.<br>\
3. Seek restraining order from court.<br>\
4. Collect medical reports and proof of abuse.<br>\
5. Approach One Stop Centre (Sakhi) for shelter & help.";

  }

  // Dowry
  else if (query.includes('dowry')) {
    response = "Section 304B IPC: Dowry Death.<br>\
Dowry Prohibition Act, 1961.<br><br>\
<b>Major Steps to Take:</b><br>\
1. File complaint immediately.<br>\
2. Collect evidence of dowry demand (messages, witnesses).<br>\
3. Inform Women Commission.<br>\
4. Seek legal aid.<br>\
5. Call 181 if under threat.";

  }

  // Wrong Words / Insult
  else if (query.includes('wrong') && query.includes('words') && (query.includes('women') || query.includes('girl'))) {
    response = "Section 509 IPC: Insulting modesty of a woman.<br><br>\
<b>Major Steps to Take:</b><br>\
1. Note details of the offender.<br>\
2. Preserve recordings/messages if any.<br>\
3. File police complaint.<br>\
4. Inform local Women Cell.";

  }

  // Kidnapping Women
  else if (query.includes('women') && (query.includes('kidnapping') || query.includes('abduction'))) {
    response = "Sections 363–373 IPC: Kidnapping/Abduction.<br><br>\
<b>Major Steps to Take:</b><br>\
1. Immediately call 100 or 112.<br>\
2. File FIR without delay.<br>\
3. Share last known location & details.<br>\
4. Inform Anti-Human Trafficking Unit.";

  }

  // Zero FIR
  else if (query.includes('zero fir')) {
    response = "Zero FIR allows filing complaint at any police station regardless of jurisdiction.<br><br>\
<b>Major Steps:</b><br>\
1. Go to nearest police station.<br>\
2. Insist on FIR registration.<br>\
3. Take FIR copy.<br>\
4. Follow up for transfer to correct jurisdiction.";

  }

  // General Women
  else if (query.includes('women') || query.includes('ladkiyon') || query.includes('mahila')) {
    response = "Women Empowerment Information:<br>\
Helplines: 181, 1091, 112.<br>\
Right to free legal aid.<br>\
Right to privacy during statement.<br>\
Right to self-defense.<br><br>\
<b>Major Steps:</b><br>\
1. Know your legal rights.<br>\
2. Keep emergency contacts saved.<br>\
3. Report harassment immediately.<br>\
4. Approach Women Commission if needed.";

  }

  // Traffic / Challan
  else if (query.includes('challan') || query.includes('road') || query.includes('traffic') || query.includes('police') || query.includes('bribe') || query.includes('rash driving')) {
    response = "Traffic Rules:<br>\
Helmet compulsory.<br>\
Seatbelt mandatory.<br>\
No drunk driving (Section 185 MV Act).<br>\
No mobile while driving.<br><br>\
Common Fines:<br>\
No Helmet – ₹1000<br>\
No Seatbelt – ₹1000<br>\
Drunk Driving – ₹10,000 + Jail<br>\
Driving without license – ₹5000<br><br>\
E-Challan: https://echallan.parivahan.gov.in<br><br>\
<b>Major Steps to Take:</b><br>\
1. Ask for challan receipt if fined.<br>\
2. Do not pay bribe - insist on official receipt.<br>\
3. Check challan details online.<br>\
4. If wrongly fined, file complaint on traffic portal.<br>\
5. Keep RC, License, Insurance & PUC updated.";

  }

  else {
    response = "This is not related to this.";
  }

  res.setHeader('Content-Type', 'text/html');
  res.json({ response });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
