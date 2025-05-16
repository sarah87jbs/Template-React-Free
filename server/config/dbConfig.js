

const config = {
  user: "man",
  password: "man1",
  connectString: `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=223.222.222.132)(PORT=1521))(CONNECT_DATA=(SID=ORCL)))`, // ← correspond à l'entrée TNS dans tnsnames.ora
};

async function testConnexion() {
  let connection;

  try {
    connection = await oracledb.getConnection(config);
    console.log("✅ Connexion Oracle réussie !");

    // Exemple simple : récupérer la date actuelle depuis Oracle
    const result = await connection.execute("SELECT SYSDATE FROM dual");
    console.log("🕒 Date Oracle :", result.rows);

  } catch (err) {
    console.error("❌ Erreur de connexion :", err);
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log("🔌 Connexion fermée.");
      } catch (closeErr) {
        console.error("Erreur lors de la fermeture :", closeErr);
      }
    }
  }
}

