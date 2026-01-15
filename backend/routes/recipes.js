import { Router } from "express"
import { createRecipe, getRecipeById, getRecipes, updateRecipe, deleteRecipe } from "../controllers/recipesController.js"

const router = Router()

router.get("/", getRecipes)
router.get("/:id", getRecipeById)
router.post("/", createRecipe)
router.put("/:id", updateRecipe)
router.delete("/:id", deleteRecipe)


export default router
