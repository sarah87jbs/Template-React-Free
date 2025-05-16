const express = require("express");
const cors = require("cors");
const sortieCniRoutes = require("./routes/sortie_cni"); // ✅ Assure-toi que ce fichier existe
const statsRoutes = require('./routes/stats');
const app = express();



// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', sortieCniRoutes); // ✅ une seule déclaration
app.use('/api', statsRoutes);
// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});




 







