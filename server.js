const express = require('express');
const path = require('path');
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
  } else {
    response = "This is not related to this";
  }

  res.json({ response });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
