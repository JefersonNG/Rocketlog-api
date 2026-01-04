import { app } from "./app.js";
import { env } from "./env.js";

const PORT = env.PORT;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
