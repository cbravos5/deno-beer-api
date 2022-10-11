import { Router } from "https://deno.land/x/oak@v11.1.0/router.ts";

const router = new Router();

router.get("/", (req, res) => {
  console.log("Salve");
});

export default router;
