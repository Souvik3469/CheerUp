import express from "express";
import {
  userController,
} from "../controllers";
import authMiddleware from "../middlewares/Auth.middleware";



const router = express.Router();

router.get("/user-details", authMiddleware, userController.userDetails);
router.post("/create-question", authMiddleware, userController.createQuestion);
router.post("/answer-question", authMiddleware, userController.answerQuestion);
router.get("/user-questions", authMiddleware, userController.getQuestionOfUser);
router.get("/get-allquestions", userController.getAllQuestionandAnswer);
router.delete(
  "/delete-question/:id",
  authMiddleware,
  userController.deleteQuestion
);
router.post("/create-test", authMiddleware, userController.createTest);
router.get("/get-mytest", authMiddleware, userController.getMyTests);
router.get("/get-alltest", userController.getAllTests);
router.delete(
  "/delete-test/:id",
  authMiddleware,
  userController.deleteTest
);
export default router;
